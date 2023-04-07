import { createContext, useReducer } from "react";
import { rootInitialState, rootReducer } from "./Reducers/rootReducer";

interface Istate {
  count: number;
}

interface ICtxInitialData {
  state: Istate;
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
