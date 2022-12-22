import { MdDeleteOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useWindowResize } from "../hooks/useWindowsSize";

export const Task = () => {
    const width = useWindowResize();
    const brackPoint = 650;
  return (
    <div className="task-card">
      <div className="task-description">
        <p>questo è un task 1</p>
      </div>
      <div className="task-button-cnt">
        <button className="btn-del">
          {width > brackPoint && 'DELETE - ' }<MdDeleteOutline />
        </button>
        |
        <button className="btn-end">
        {width > brackPoint && 'CLOSE - ' }<TiTick />
        </button>
      </div>
    </div>
  );
};
