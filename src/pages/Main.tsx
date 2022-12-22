import { InsertTask } from "../components/InsertTask";
import { TaskList } from "../components/TaskList";

export const Main = () => {
  return (
    <div className="main-cnt">
      <h3>Main Page</h3>
      <InsertTask />
      <TaskList /> 
    </div>
  );
};
