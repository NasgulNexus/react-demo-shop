import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
  },
  PopupImg: {
    maxWidth: "300px",
    maxHeight: "300px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px"
  }
}));

const Popup = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button size="small" onClick={handleOpen}>
        Подробнее...
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.PopupBox}>
          <img
            src={product.image}
            alt={product.title}
            className={classes.PopupImg}
          />
          <Typography variant="h6" component="h2">
            {product.title}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Описание: {product.description}
          </Typography>
          <Typography sx={{ mt: 2 }}>Цена: {product.price} $</Typography>
          <Typography sx={{ mt: 2 }}>Категория: {product.category}</Typography>
          <Typography sx={{ mt: 2 }}>
            Рейтинг: {product.rating.rate}/5
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;
