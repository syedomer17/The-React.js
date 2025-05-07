export const initialState = { isOn: false };

export const toggleReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isOn: !state.isOn };
    default:
      return state;
  }
};
