import { UserAuth } from "../context/AuthContext";
import { MdOutlineVerified } from "react-icons/md";

export const Account = () => {
  const { user, logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user && (
        <div className="account-card">
          <img
            src={user.photoURL.replace("s96", "s150")}
            referrerPolicy="no-referrer"
          />
          <p className="lead">
            Hello, <strong>{user?.displayName}</strong>
            {!user.isAnonymous ? <MdOutlineVerified /> : "❌"}{" "}
          </p>

          <p className="fw-lighter">{user.email}</p>
          <button type="button" onClick={handleLogout} className="btn btn-dark">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
