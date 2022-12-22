import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Protected } from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import { Account } from "./pages/Account";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/Signup";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
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
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
