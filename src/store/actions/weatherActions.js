import axios from "axios";

export const getWeatherData = (selected) => async (dispatch) => {
  try {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selected}&units=metric&APPID=77f93e08184506ace7d35d0871a8375f`
      )
      .then((res) => {
        dispatch({
          type: "GETWEATHERDATA",
          payload: {
            main: res?.data.main,
            name: res?.data.name,
          },
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};
