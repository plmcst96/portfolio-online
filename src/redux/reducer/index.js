const initalState = {
  darkMode: false,
};

export const mainReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ENABLE_DARK_MODE":
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};
