import { MdDeleteOutline } from "react-icons/md";
import { useWindowResize } from "../hooks/useWindowsSize";
import { TaskModel } from "../utils/task";

export const Task = (props: {task: TaskModel}) => {
    const width = useWindowResize();
    const brackPoint = 650;
  return (
    <div className="task-card">
      <div className="task-description">
        <p>{props.task.text} - {props.task.uid}</p>

      </div>
      <div className="task-button-cnt">
        <button className="btn-del">
          {width > brackPoint && 'DELETE - ' }<MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};
