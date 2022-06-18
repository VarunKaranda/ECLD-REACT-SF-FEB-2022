import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/Auth";
import "./Login.css";
import { Form, Button, Container } from "react-bootstrap";


const default_username = "Admin";
const default_password = "admin";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    if (username === default_username && password === default_password) {
      Auth.login(username, password);
      navigate(redirectPath, { replace: true });
    } else {
      alert("Enter correct Username and Password");
    }
  };

  return (
    <div>
      {/* <div className="login-container">
        <h1 className="login-heading">Login</h1>
        <div className="login-input-div">
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-input-div">
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div> */}
      <Container className="Container-login p-5">
        <Form>
          <h1 style={{ fontSize: "3rem" }}>Login</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "1.5rem" }}>Username</Form.Label>
            <Form.Control
              style={{
                textAlign: "center",
                borderRadius: "10px",
                height: "3.5rem",
                fontSize: "1.5rem",
              }}
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontSize: "1.5rem" }}>Password</Form.Label>
            <Form.Control
              style={{
                textAlign: "center",
                borderRadius: "10px",
                height: "3.5rem",
                fontSize: "1.5rem",
              }}
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            style={{ borderRadius: "10px" }}
            variant="primary"
            type="submit"
            size="lg"
            onClick={handleLogin}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
