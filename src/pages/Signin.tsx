import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
export const SignIn = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(user){
        navigate('/');
    }
  }, [user]);

  return (
    <div>
      <h3 className="text-primary">SignIn Page</h3>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};
