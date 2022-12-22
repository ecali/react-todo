import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { UserAuth } from "../context/AuthContext";

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
      {user ?(
        <Loader />
      ):  (
        <h4>hello baby</h4>
      ) }
    </>
  );
};
