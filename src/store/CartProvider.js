import { useReducer } from "react";

import CartContext from "./cart-content";

const defauktCartState = {
  items: [],
  totalAmaunt: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {

    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmaunt + action.item.amount * action.item.price;

    return {
      items: updatedItems,
      totalAmaunt: updatedTotalAmount
    };
  }
  
  return defauktCartState
};

const CardProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defauktCartState)

  console.log("cartState", cartState)

  const addItemCartHandler = (item) => {
    dispatchCartAction({type: "ADD", item: item})
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({type: "REMOVE", id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmaunt: cartState.totalAmaunt,
    addItem: addItemCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;
