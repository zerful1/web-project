import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import ForgotPassword from "./pages/ForgotPassword";
import Reset from "./pages/Reset";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");

  React.useEffect(() => {
    if (!message) return;
    const timeout = setTimeout(() => {
      setMessage("");
      setMessageType("info");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [message]);

  const setMessageWithType = (msg, type = "info") => {
    setMessage(msg);
    setMessageType(type);
  };

  React.useEffect(() => {
    if (message !== "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [message]);

  return (
    <AuthProvider>
      <Router>
        <div className="main">
          <Nav />
          <div className="content">
            {message && (
              <div className={`app-message app-message--${messageType}`}>
                {message}
              </div>
            )}
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/reset" element={<Reset />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
