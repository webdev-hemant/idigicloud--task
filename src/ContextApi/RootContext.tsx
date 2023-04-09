import { createContext, useReducer } from "react";
import {
  IrootReducerInitialState,
  rootInitialState,
  rootReducer,
} from "./Reducers/rootReducer";

interface ICtxInitialData {
  state: IrootReducerInitialState;
  dispatch: React.Dispatch<any>;
}

export const RootContext = createContext<ICtxInitialData>({
  state: rootInitialState,
  dispatch: () => {},
});

const RootContextProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);

  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
