const actionReducer = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "window":
      return state - action.payload;
    default:
      return state;
  }
};

export default actionReducer;
