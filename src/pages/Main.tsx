import { Box, Tab, Tabs } from "@mui/material";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { InsertTask } from "../components/InsertTask";
import { Loader } from "../components/Loader";
import { NoTask } from "../components/NoTasks";
import { TaskList } from "../components/TaskList";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { TaskModel } from "../utils/task";

export const Main = () => {
  const { user } = UserAuth();
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (user !== undefined) {
      const q = query(collection(db, "todos" + user.uid));
      onSnapshot(q, (querySnapshot) =>
        setTasks(
          querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              text: doc.data().t.text,
              completed: doc.data().t.completed,
            };
          })
        )
      );
    }
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="main-cnt">
      <h1 className="display-6">Tasks</h1>
      <small className="text-muted secondary-text">
        Complete list of your tasks
      </small>

      <InsertTask />

      {tasks.length > 0 ? (
        // <>
        //   <div
        //     className="btn-group button-filter"
        //     role="group"
        //   >
        //     <button onClick={ ()  => setComplete(false)} type="button" className="btn btn-success">
        //       To do
        //     </button>

        //     <button onClick={ ()  => setComplete(true)} type="button" className="btn btn-danger">
        //       Completed
        //     </button>
        //   </div>
        //   <TaskList tasks={tasks} complete={complete} />
        // </>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
            centered
          >
            <Tab label="To do" />
            <Tab label="Completed" />
          </Tabs>
          <TaskList tasks={tasks} complete={value !== 0} />
        </Box>
      ) : (
        <NoTask />
      )}
    </div>
  );
};
