import { Avatar, Button, Card, Grid, Typography } from "@mui/material";
import { UserAuth } from "../context/AuthContext";
import { DigitalClock } from "./DigitalClock";
import { DigitalDate } from "./DigitalDate";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { MdOutlineVerified } from "react-icons/md";
export const Widget = () => {
  const { user, logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="widget-container">
      <h1 className="display-6">Widget</h1>
      <Grid container direction="column" columns={1}>
        <Card variant="outlined" style={{ marginTop: "1rem" }}>
          <div className="card-prof">
            <img
              alt={user.displayName}
              height="50px"
              referrerPolicy="no-referrer"
              src={user.photoURL.replace("s96", "s150")}
            />
            <Typography variant="h5" gutterBottom>
              {user.displayName} {!user.isAnonymous && <MdOutlineVerified />}
            </Typography>

            <Button
              variant="outlined"
              startIcon={<ExitToAppOutlinedIcon />}
              onClick={handleLogout}
            >
              LOGOUT
            </Button>
          </div>
        </Card>

        <Card variant="outlined" style={{ marginTop: "1rem" }}>
          <div className="card-dt">
            <p className="lead">Schedule</p>

            <DigitalClock format24={false} />
            <hr></hr>
            <p className="lead">Date</p>

            <DigitalDate />
          </div>
        </Card>
      </Grid>
    </div>
  );
};
