import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
