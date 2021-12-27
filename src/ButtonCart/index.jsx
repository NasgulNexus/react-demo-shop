import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteToCart, incrementCart, decrementCart } from "../actions/cart";

const ButtonCart = ({ productId, index, count }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        size="small"
        onClick={event =>
          dispatch(deleteToCart(productId), event.stopPropagation())
        }
      >
        Удалить из корзины
      </Button>
      <Button
        size="small"
        onClick={event =>
          dispatch(incrementCart(index), event.stopPropagation())
        }
      >
        +
      </Button>
      <Typography>{count}</Typography>
      {count > 1 ? (
        <Button
          size="small"
          onClick={event =>
            dispatch(decrementCart(index), event.stopPropagation())
          }
        >
          -
        </Button>
      ) : (
        <Button
          size="small"
          onClick={event =>
            dispatch(deleteToCart(productId), event.stopPropagation())
          }
        >
          -
        </Button>
      )}
    </div>
  );
};

export default ButtonCart;
