import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Button, IconButton, Snackbar } from "@mui/material";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { useWindowResize } from "../hooks/useWindowsSize";
import { TaskModel } from "../utils/task";

export const Task = (props: { task: TaskModel }) => {
  const [snack, setSnack] = useState(false);
  const width = useWindowResize();
  const brackPoint = 650;
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
      sendSnackBar();
    } catch (err) {
      alert(err);
    }
  };

  const handleDelete = async () => {
    const taskDocRef = doc(db, "todos" + user.uid, props.task.id ?? "");
    try {
      await deleteDoc(taskDocRef);
      sendSnackBar();
    } catch (err) {
      alert(err);
    }
  };

  const sendSnackBar = () => {
    setSnack(true);
  };
  const handleSnackClose = () => {
    setSnack(false);
  };

  return (
    <div className="task-card">
      <div className="task-description">
        <p>{props.task.text}</p>
      </div>
      <div className="task-button-cnt">
        {props.task.completed ? (
          width > brackPoint ? (
            <Button
              variant="contained"
              endIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
          ) : (
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
          )
        ) : width > brackPoint ? (
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleUpdate}
          >
            Send
          </Button>
        ) : (
          <IconButton aria-label="delete" size="small">
            <SendIcon fontSize="small" />
          </IconButton>
        )}
      </div>
      <Snackbar
        open={snack}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        message={props.task.completed ? "Task Deleted" : "Task Update"}
        // action={action}
      />
    </div>
  );
};
