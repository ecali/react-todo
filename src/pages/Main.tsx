import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InsertTask } from "../components/InsertTask";
import { TaskList } from "../components/TaskList";
import { UserAuth } from "../context/AuthContext";
import { TaskModel } from "../utils/task";

export const Main = () => {
    const {user } = UserAuth();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState<TaskModel[]>([]);
  
  
    useEffect(() => {
      if(user !== undefined){
          navigate('/home');
      }
    }, []);

  return (
    <div className="main-cnt">
      <h3>TASK</h3>
      <InsertTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
};
