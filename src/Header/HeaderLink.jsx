import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const HeaderLink = ({ link }) => {
  return (
    <Button component={Link} variant="text" to={link.to}>
      {link.title}
    </Button>
  );
};

export default HeaderLink;
