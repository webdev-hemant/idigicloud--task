import { RootContext } from "ContextApi/RootContext";
import { SidebarContext } from "ContextApi/SidebarNavContext";
import React, { useContext } from "react";

const HomeModule = () => {
  const { state, dispatch } = useContext(RootContext);
  const { sidebarState, sideBarDispatch } = useContext(SidebarContext);

  const handleIncrement = () => {
    sideBarDispatch({ type: "INCREMENT" });
    console.log(sidebarState);
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
