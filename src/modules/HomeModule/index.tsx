import { RootContext } from "ContextApi/RootContext";
import React, { useContext } from "react";

const HomeModule = () => {
  const { state, dispatch } = useContext(RootContext);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      HomeModule
      <h2>Counter: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default HomeModule;
