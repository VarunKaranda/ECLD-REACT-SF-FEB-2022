import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { Navbar, Nav, Container } from "react-bootstrap"
import "./Style.css";

const Navbars = () => {

  const Auth = useAuth()

  return (
    <div>
      {/* <header className="header">
        <Link to="/" className="logo">
          <i className="fas fa-lightbulb"></i> educa{" "}
        </Link> */}

      {/* <nav className="navbar">
          <div id="close-navbar" className="fas fa-times"></div>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/students">Students</Link>
          {!Auth.username && !Auth.password && (
            <Link to="/login">Login</Link>
          )}
        </nav> */}

      <Navbar bg="light" variant="light" style={{ padding: "2rem" }}>
        <Container style={{ fontSize: "1.75rem" }}>
          <Navbar.Brand
            href="/"
            style={{ fontSize: "2.5rem", color: "#0eb582" }}
          >
            <i className="fas fa-lightbulb"></i> educa{" "}
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/students">Students</Nav.Link>
            {!Auth.username && !Auth.password && (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      {/* </header> */}
    </div>
  );
};

export default Navbars;
