import { doc, updateDoc } from "firebase/firestore";
import { title } from "process";
import { MdDeleteOutline } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { useWindowResize } from "../hooks/useWindowsSize";
import { TaskModel } from "../utils/task";

export const Task = (props: { task: TaskModel }) => {
  const width = useWindowResize();
  const brackPoint = 650;
  const {user} = UserAuth();

  const handleUpdate = async () => {
    console.log(props.task.id)
    const taskDocRef = doc(db, 'todos' + user.uid, props.task.id ?? '');
    try {
      await updateDoc(taskDocRef, {
        t:{
          completed: true
        }
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="task-card">
      <div className="task-description">
        <p>{props.task.text}</p>
      </div>
      <div className="task-button-cnt">
        <button className="btn-del" onClick={handleUpdate}>
          {width > brackPoint && "DELETE - "}
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};
