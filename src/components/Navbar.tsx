import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { user, logOut } = UserAuth();
  const handleLogOut = async() => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar">
      <Link to="/home"> Home </Link>
      <Link to="/account"> Account </Link>
      {user?.displayName ? (
        <button onClick={handleLogOut}>Logout </button>
      ) : (
        <Link to="/login"> Login </Link>
      )}
    </div>
  );
};
