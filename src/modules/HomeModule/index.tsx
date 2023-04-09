import { RootContext } from "ContextApi/RootContext";
import { SidebarContext } from "ContextApi/SidebarNavContext";
import React, { useContext } from "react";

const HomeModule = () => {
  const { dispatch } = useContext(RootContext);
  const { sidebarState, sideBarDispatch } = useContext(SidebarContext);

  const handleIncrement = () => {
    sideBarDispatch({ type: "TEST" });
    console.log(sidebarState);
  };

  const handleDecrement = () => {
    dispatch({ type: "TEST" });
  };
  return (
    <div>
      HomeModule
      {/* <h2>Counter: {state.count}</h2> */}
      <button onClick={handleIncrement}>TEST</button>
      <button onClick={handleDecrement}>TEST</button>
    </div>
  );
};

export default HomeModule;
