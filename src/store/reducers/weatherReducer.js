const initialState = {
  weather: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETWEATHERDATA":
      return {
        ...state,
        weather: action.payload,
      };

    default:
      return state;
  }
};
