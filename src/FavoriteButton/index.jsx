import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, deleteFromFavorites } from "../actions/favorites";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

const useStyles = makeStyles(theme => ({
  ProductListHeart: {
    color: "red",
    position: "absolute",
    cursor: "pointer",
    top: "10px",
    right: "10px"
  }
}));

const FavoriteButton = ({ id }) => {
  const classes = useStyles();
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <>
      {favorites.indexOf(id) > -1 ? (
        <IconButton
          key={id}
          className={classes.ProductListHeart}
          onClick={event => {
            dispatch(deleteFromFavorites(id));
            event.stopPropagation();
          }}
        >
          <FavoriteIcon />
        </IconButton>
      ) : (
        <IconButton
          key={id}
          className={classes.ProductListHeart}
          onClick={event => {
            dispatch(addToFavorites(id));
            event.stopPropagation();
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      )}
    </>
  );
};
export default FavoriteButton;
