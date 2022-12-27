import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { title } from "process";
import { MdDeleteOutline } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { useWindowResize } from "../hooks/useWindowsSize";
import { TaskModel } from "../utils/task";
import {TiTickOutline} from 'react-icons/ti';

export const Task = (props: { task: TaskModel }) => {
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
    } catch (err) {
      alert(err);
    }
  };

  const handleDelete = async () => {
    const taskDocRef = doc(db, "todos" + user.uid, props.task.id ?? "")
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className="task-card">
      <div className="task-description">
        <p>{props.task.text}</p>
      </div>
      <div className="task-button-cnt">
        {props.task.completed ? (
          <button className="btn-del" onClick={handleDelete}>
            {width > brackPoint && "DELETE - "}
            <MdDeleteOutline />
          </button>
        ) : (
          <button className="btn-end" onClick={handleUpdate}>
            {width > brackPoint && "COMPLETE - "}
            <TiTickOutline />
          </button>
        )}
      </div>
    </div>
  );
};
