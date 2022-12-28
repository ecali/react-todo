import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { LogOutButton } from "./LogoutButton";

export const Navbar = () => {
  const { user, logOut } = UserAuth();
  const location = useLocation();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar">
      {user?.displayName ? (
        <>
          <h1 className="display-6 text-light">Cali React Todo</h1>
          {location.pathname !== "/home" && (
            <Link to="/home">
              <button
                type="button"
                className="btn btn-primary active"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                HOME
              </button>
            </Link>
          )}
          {location.pathname !== "/account" && (
            <Link to="/account">
              <button
                type="button"
                className="btn btn-primary active"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                ACCOUNT
              </button>
            </Link>
          )}

          {/* <LogOutButton onClick={handleLogOut}  image={user.photoURL} /> */}
        </>
      ) : (
        <h1 className="display-6 text-light">Cali React Todo</h1>
        // <Link to="/login">
        //   <button
        //     type="button"
        //     className="btn btn-primary active"
        //     data-bs-toggle="button"
        //     aria-pressed="true"
        //   >
        //     LOGIN
        //   </button>
        // </Link>
      )}
    </div>
  );
};
