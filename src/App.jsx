import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@mui/material/Container";
import RouterHead from "./RouterHead";

const App = () => (
  <Router>
    <div className="App">
      <Container fixed>
        <RouterHead />
      </Container>
    </div>
  </Router>
);

export default connect()(App);
