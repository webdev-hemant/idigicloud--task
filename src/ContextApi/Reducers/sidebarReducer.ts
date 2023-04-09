import {
  IJsonData,
  jsonData as sidebarInitialState,
} from "constants/routesData";

const sidebarNavReducer = (
  state: IJsonData[] = sidebarInitialState,
  action: any
) => {
  switch (action.type) {
    case "TEST":
      return state;
    case "TEST":
      return state;
    default:
      return state;
  }
};

export { sidebarInitialState, sidebarNavReducer };
