import {
  IJsonDate,
  jsonData as sidebarInitialState,
} from "constants/routesData";

const sidebarNavReducer = (
  state: IJsonDate[] = sidebarInitialState,
  action: any
) => {
  switch (action.type) {
    case "INCREMENT":
      return state;
    case "DECREMENT":
      return state;
    default:
      return state;
  }
};

export { sidebarInitialState, sidebarNavReducer };
