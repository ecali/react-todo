import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { UserAuth } from "../context/AuthContext";
import { DiReact } from "react-icons/di";
import {SiGoogle} from 'react-icons/si';
import {AiOutlineLogin} from 'react-icons/ai';
import { Login } from "../components/Login";

export const Landing = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);
  return (
    <>
      {user ? (
        <Loader />
      ) : (
        <div className="landing-container">
          <h1 className="display-5">Hello! 👋</h1>
          <p className="lead">
            If you want use this simple todo app made with React <DiReact />
            you can make login with <SiGoogle />oogle with clicking on button under this
            paragraph.
          </p>
          <Login />
          
        </div>
      )}
    </>
  );
};
