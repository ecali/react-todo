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

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
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
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
