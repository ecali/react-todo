import { TaskModel } from "../utils/task";
import { Task } from "./Task";

export const TaskList = (props: {tasks: TaskModel[]}) => {
  return (
    <div className="task-cnt">
      {
        props.tasks.map((task, index) => <Task key={index} task={task} />)
      }
      
    </div>
  );
};
