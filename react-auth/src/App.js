import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login"
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Account from "./Account";
import AuthComponent from "./AuthComponent";
import FreeComponent from "./FreeComponent";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Container>
      <Col className="text-center">
        <h1>React Authentication Tutorial</h1>
      </Col>
        <Routes>
          <Route exact path="/" element={<Account />} />
          <Route exact path="/free" element={<FreeComponent />} />
          <Route exact path="/auth" element={<AuthComponent />} />
        </Routes>
    </Container>
  );
}

export default App;
