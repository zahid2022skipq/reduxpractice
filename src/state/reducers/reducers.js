const actionReducer = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return action.payload + amount;
    case "window":
      return action.payload - amount;
    default:
      return state;
  }
};
