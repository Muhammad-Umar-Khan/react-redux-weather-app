import axios from "axios";

export const getWeatherData = (city) => async (dispatch) => {
  try {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=77f93e08184506ace7d35d0871a8375f`
      )
      .then((res) => {
        dispatch({
          type: "GETWEATHERDATA",
          payload: res?.data,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};
