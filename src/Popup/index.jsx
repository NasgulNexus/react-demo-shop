import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProdcutCard from "../ProductCard";
import ImageProduct from "../ImageProduct";
import TextProductFull from "../TextProduct/TextProductFull";

const useStyles = makeStyles(theme => ({
  PopupBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "2px solid #000",
    zIndex: 1,
    padding: "20px"
  }
}));

const Popup = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div onClick={handleOpen}>
      <ProdcutCard product={product} />
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.PopupBox}>
          <ImageProduct image={product.image} title={product.title} />
          <TextProductFull product={product} />
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;
