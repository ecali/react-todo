import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { TaskModel } from "../utils/task";

export const Task = (props: { task: TaskModel }) => {
  const { user } = UserAuth();

  const handleUpdate = async () => {
    const taskDocRef = doc(db, "todos" + user.uid, props.task.id ?? "");
    try {
      await updateDoc(taskDocRef, {
        t: {
          completed: true,
          text: props.task.text,
        },
      });
    } catch (err) {
      alert(err);
    }
  };

  const handleDelete = async () => {
    const taskDocRef = doc(db, "todos" + user.uid, props.task.id ?? "");
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "start",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));

  return (
    <Box>
      <Item elevation={3}>
        {props.task.text}

        <div className="button-le">
          {!props.task.completed && (
            <IconButton aria-label="complete" onClick={handleUpdate}>
              <CheckIcon className="edit-min" />
            </IconButton>
          )}
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon className="edit-min" />
          </IconButton>
        </div>
      </Item>
    </Box>
  );
};
