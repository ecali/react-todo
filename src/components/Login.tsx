import { useState } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Loader } from "./Loader";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await googleSignIn();
      setLoading(false);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading ? <Loader /> : <GoogleButton onClick={handleGoogleSignIn} />}
    </div>
  );
};
