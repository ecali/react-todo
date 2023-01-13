import { Stack } from "@mui/material";
import { TaskModel } from "../utils/task";
import { PacmanLoader } from "./PacmanLoader";
import { Task } from "./Task";

export const TaskList = (props: { tasks: TaskModel[]; complete: boolean }) => {
  return (
    <div className="task-cnt">
      <Stack spacing={2}>
        {props.tasks.filter((task) => task.completed === props.complete)
          .length > 0 ? (
          props.tasks.map(
            (task, index) =>
              task.completed === props.complete && (
                <Task key={index} task={task} />
              )
          )
        ) : (
          <PacmanLoader />
        )}
      </Stack>
    </div>
  );
};
