import { useRef, useState } from "react";

import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountValid, setAmountValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmoundInt = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmoundInt < 1 || enteredAmoundInt > 100) {
      setAmountValid(false)
      return;
    }

    props.onAddToCart(enteredAmoundInt)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount-" + props.id,
          type: "number",
          min: "1",
          max: "100",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter valid amount</p>}
    </form>
  );
};

export default MealItemForm;
