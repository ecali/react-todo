import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Protected } from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import { Account } from "./pages/Account";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/Signup";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ResponsiveAppBar } from "./components/ResponsiveAppBar";
import { Counter } from "./pages/Counter";
import { Backlog } from "./pages/Backlog";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AuthContextProvider>
        <Router>
          {/* <Navbar /> */}
          <ResponsiveAppBar />
          <div className="App">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/home"
                element={
                  <Protected>
                    <Home />
                  </Protected>
                }
              />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route
                path="/account"
                element={
                  <Protected>
                    <Account />
                  </Protected>
                }
              />
              <Route
                path="/counter"
                element={
                  <Protected>
                    <Counter />
                  </Protected>
                }
              />
              <Route
                path="/backlog"
                element={
                  <Protected>
                    <Backlog />
                  </Protected>
                }
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
