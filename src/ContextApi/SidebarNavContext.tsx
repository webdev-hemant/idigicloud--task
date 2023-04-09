import { createContext, useReducer } from "react";
import {
  sidebarInitialState,
  sidebarNavReducer,
} from "./Reducers/sidebarReducer";
import { IJsonDate } from "constants/routesData";

interface ICtxInitialData {
  sidebarState: IJsonDate[];
  sideBarDispatch: React.Dispatch<any>;
}

export const SidebarContext = createContext<ICtxInitialData>({
  sidebarState: sidebarInitialState,
  sideBarDispatch: () => {},
});

const SidebarContextProvider = ({ children }: { children: JSX.Element }) => {
  const [sidebarState, sideBarDispatch] = useReducer(
    sidebarNavReducer,
    sidebarInitialState
  );

  return (
    <SidebarContext.Provider value={{ sidebarState, sideBarDispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
