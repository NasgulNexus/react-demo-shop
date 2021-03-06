import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProdcutCard from "../ProductCard";
import ImageProduct from "../ImageProduct";
import TextProduct from "../TextProduct";
import { addToCart } from "../actions/cart";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import TablesButton from "../TablesButton";
import CartButton from "../CartButton";

const useStyles = makeStyles(theme => ({
  PopupBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "2px solid #000",
    zIndex: 1,
    padding: "40px",
    maxHeight: "100vh",
    overflowY: "auto",
    boxSizing: "border-box"
  },
  closePopup: {
    position: "absolute",
    right: "10px",
    top: "10px",
    cursor: "pointer"
  },
  PopupButton: {
    marginTop: "20px"
  }
}));

const PopupCard = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const cart = useSelector(state => state.cart);
  const handleClose = () => setOpen(false);
  const addCartShow = cart.find(el => el.id === product.id);
  const dispatch = useDispatch();

  return (
    <>
      <div onClick={handleOpen}>
        <ProdcutCard product={product} />
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.PopupBox}>
          <CloseIcon
            sx={{ fontSize: 40 }}
            className={classes.closePopup}
            color="primary"
            onClick={handleClose}
          />
          <ImageProduct image={product.image} title={product.title} />
          <TextProduct
            title={product.title}
            descriptionFull={product.description}
            price={product.price}
            category={product.category}
            rate={product.rating.rate}
          />
          <div className={classes.PopupButton} />
          <TablesButton id={product.id} />
          <div>
            {cart.map(data =>
              data.id === product.id ? (
                <div key={product.id}>
                  <CartButton productId={product.id} count={data.count} />
                </div>
              ) : null
            )}
            {addCartShow === undefined ? (
              <Button
                onClick={event => {
                  dispatch(addToCart(product.id));
                  event.stopPropagation();
                }}
              >
                ???????????????? ?? ??????????????
              </Button>
            ) : null}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default PopupCard;
