import React, { useState } from "react";
import { Nav, Button, Navbar, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Navbar expand="md"  bg="dark" variant="dark">
        <Container>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              </Nav>
            <Nav>
              <Button variant="light" onClick={handleLogout}>
                Log Out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
