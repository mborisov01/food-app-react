import { useContext } from "react";

import MealitemForm from "./MealItemForm";
import CartContext from "../../../store/cart-content";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealitemForm id={props.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
