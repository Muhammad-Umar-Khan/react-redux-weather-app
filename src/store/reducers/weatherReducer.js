const initialState = {
  weather: [],
  name: "",
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETWEATHERDATA":
      return {
        ...state,
        weather: [action.payload],
        name: action.payload.name,
      };

    default:
      return state;
  }
};
