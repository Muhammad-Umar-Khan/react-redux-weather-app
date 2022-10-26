import { useState } from "react";
import { getWeatherData } from "../store/actions/weatherActions";
import { useDispatch, useSelector } from "react-redux/es/exports";
const CityInput = () => {
  const weatherData = useSelector((state) => state.weatherReducer.weather);
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    city && dispatch(getWeatherData(city));
    setCity("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={city} onChange={(e) => setCity(e.target.value)}></input>
        <button>Search</button>
      </form>
    </>
  );
};

export default CityInput;
