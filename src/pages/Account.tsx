import { UserAuth } from "../context/AuthContext";

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
      <h3 className="text-primary">Account Page</h3>
      {user ? (
        <>
          <p>Hello, {user?.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
