import { TaskModel } from "../utils/task";
import { Task } from "./Task";

export const TaskList = (props: {tasks: TaskModel[], complete: boolean}) => {
  return (
    <div className="task-cnt">
      {
        props.tasks.map((task, index) => task.completed === props.complete && <Task key={index} task={task} />)
      }
      
    </div>
  );
};
