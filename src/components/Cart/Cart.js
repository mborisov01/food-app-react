import {useContext} from "react"

import Modal from "../UI/Modal"
import CartContext from "../../store/cart-content"
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  console.log("cart", cartCtx)

  const totalAmount = `$${cartCtx.totalAmaunt.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map(item => (
        <li>{item.name} / {item.price} * {item.amount}</li>
      ))}
    </ul>
  )

  console.log('items', cartItems)
  return (
    <Modal onHideCartModal={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
          {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
