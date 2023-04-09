const rootInitialState = {
  count: 0,
};

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case "TEST":
      return state;
    case "TEST":
      return state;
    default:
      return state;
  }
};

export { rootInitialState, rootReducer };
