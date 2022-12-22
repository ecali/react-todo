import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InsertTask } from "../components/InsertTask";
import { TaskList } from "../components/TaskList";
import { UserAuth } from "../context/AuthContext";

export const Main = () => {
    const {user } = UserAuth();
    const navigate = useNavigate();
  
  
    useEffect(() => {
      if(user !== undefined){
          navigate('/home');
      }
    }, []);

  return (
    <div className="main-cnt">
      <h3>TASK</h3>
      <InsertTask />
      <TaskList />
    </div>
  );
};
