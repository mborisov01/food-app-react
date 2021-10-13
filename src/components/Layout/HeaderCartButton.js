import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-content";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  
  const cartCtx = useContext(CartContext);

  const itemsinCart = cartCtx.items.length;

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsinCart}</span>
    </button>
  );
};

export default HeaderCartButton;
