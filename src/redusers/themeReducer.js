import initialState from "./initialState";

export default function themeReducer(state = initialState.theme, action) {
  switch (action.type) {
    /* Show/hide the form  */
    case "TOGGLE_THEME": {
      return {
        ...state,
        name: state.name === "light" ? "dark" : "light",
      };
    }
    default:
      return state;
  }
}
