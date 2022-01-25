import React from "react";
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

export default App;
