interface IrootReducerInitialState {
  count: number;
}

const rootInitialState = {
  count: 0,
};

const rootReducer = (
  state: IrootReducerInitialState = rootInitialState,
  action: any
) => {
  switch (action.type) {
    case "TEST":
      return state;
    default:
      return state;
  }
};

export { rootInitialState, rootReducer };
export type { IrootReducerInitialState };
