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

  useEffect(() => {
    if (user !== undefined) {
      const q = query(collection(db, "todos" + user.uid));
      onSnapshot(q, (querySnapshot) =>
        setTasks(querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            text: doc.data().t.text,
            completed: doc.data().t.completed,
          }
        }))
      );
    }
  }, []);

  return (
    <div className="main-cnt">
       <h3>TASK</h3>
          <InsertTask />
      {tasks.length > 0 ? (
        <>
          <TaskList tasks={tasks} />
        </>
      ) : (
        <NoTask />
      )}
    </div>
  );
};
