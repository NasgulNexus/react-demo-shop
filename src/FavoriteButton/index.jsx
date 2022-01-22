import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, deleteFromFavorites } from "../actions/favorites";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
        <FavoriteIcon
          className={classes.ProductListHeart}
          key={id}
          onClick={event => {
            dispatch(deleteFromFavorites(id));
            event.stopPropagation();
          }}
        />
      ) : (
        <FavoriteBorderIcon
          className={classes.ProductListHeart}
          key={id}
          onClick={event => {
            dispatch(addToFavorites(id));
            event.stopPropagation();
          }}
        />
      )}
    </>
  );
};
export default FavoriteButton;
