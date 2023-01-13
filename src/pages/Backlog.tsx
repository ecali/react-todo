import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import SendIcon from "@mui/icons-material/Send";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DataArrayIcon from "@mui/icons-material/DataArray";
interface BacklogInterface {
  val: string;
  desc?: string;
  date: string;
  id: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-between",
  alignItems: 'center'
}));

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Backlog = () => {
  const { user } = UserAuth();
  const [backlog, setBacklog] = useState("");
  const [values, setValues] = useState<BacklogInterface[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<BacklogInterface | undefined>();
  const [editing, setEditing] = useState(false);
  const [newDesc, setNewDesc] = useState("");

  const handleOpen = (id: string) => {
    setOpen(true);
    setSelected(values.filter((back) => back.id === id)[0]);
  };
  const handleClose = () => {
    setOpen(false);
    setNewDesc("");
    setEditing(false);
    setSelected(undefined);
  };
  const openEdit = () => {
    setEditing(true);
    setNewDesc(selected?.desc ? selected.desc : "");
  };
  const handleEdit = async () => {
    if (selected) {
      const taskDocRef = doc(db, "backlog" + user.uid, selected.id ?? "");
      try {
        await updateDoc(taskDocRef, {
          ...selected,
          desc: newDesc,
        });
      } catch (err) {
        alert(err);
      }
      setEditing(false);
      setNewDesc("");
    }
  };

  useEffect(() => {
    if (user !== undefined) {
      const q = query(
        collection(db, "backlog" + user.uid),
        orderBy("date", "desc")
      );
      onSnapshot(q, (querySnapshot) =>
        setValues(
          querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              val: doc.data().val,
              date: doc.data().date,
              desc: doc.data().desc,
            };
          })
        )
      );
    }
  }, []);

  const addNewBacklog = async () => {
    await addDoc(collection(db, "backlog" + user.uid), {
      val: backlog.charAt(0).toUpperCase() + backlog.slice(1),
      date: new Date().toLocaleDateString(),
    });
    setBacklog("");
  };

  const handleDelete = async () => {
    if (selected) {
      const taskDocRef = doc(db, "backlog" + user.uid, selected.id ?? "");
      try {
        await deleteDoc(taskDocRef);
        handleClose();
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <div>
      <div className="insert-back">
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Insert here..."
            variant="outlined"
            value={backlog}
            onChange={(e) => setBacklog(e.target.value)}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={addNewBacklog}
            disabled={backlog === ""}
          >
            Send
          </Button>
        </Stack>
      </div>
      <div className="backlog-cnt">
        <Stack spacing={2}>
          {values.map((backlogEl) => (
            <Box key={backlogEl.id} >
              <Item>
                {backlogEl.desc ? (
                  <DataArrayIcon />
                ) : (
                  <DataArrayIcon className="icon-none" />
                )}
                {backlogEl.val}
                <IconButton aria-label="edit" onClick={() => handleOpen(backlogEl.id)}>
                  <EditIcon className="edit-min"/>
                </IconButton>
              </Item>
            </Box>
          ))}
        </Stack>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selected?.val}
          </Typography>
          {}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Backlog creato il {selected?.date}
            {!editing ? (
              <IconButton aria-label="delete" onClick={openEdit}>
                <EditIcon />
              </IconButton>
            ) : (
              <IconButton aria-label="delete" onClick={() => setEditing(false)}>
                <CloseIcon />
              </IconButton>
            )}
          </Typography>
          {editing ? (
            <>
              <hr></hr>
              <TextField
                fullWidth={true}
                id="outlined-basic-desc"
                label="Insert here..."
                variant="outlined"
                value={newDesc}
                multiline={true}
                onChange={(e) => setNewDesc(e.target.value)}
              />
            </>
          ) : (
            <>
              <hr></hr>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {selected?.desc}
              </Typography>
            </>
          )}

          <div className="button-container">
            {editing ? (
              <Button
                variant="outlined"
                startIcon={<CheckIcon />}
                onClick={handleEdit}
              >
                Confirm
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                DELETE
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};
