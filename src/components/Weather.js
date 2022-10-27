import "../App.css";

import { useSelector } from "react-redux/es/exports";

const Weather = () => {
  const weatherData = useSelector((state) => state.weatherReducer.weather);
  const cityName = useSelector((state) => state.weatherReducer.name);

  return (
    <div className="weather-content">
      {weatherData.map((data, index) => (
        <div key={index}>
          <h2>{cityName}</h2>
          <h3>{data.main.temp} °C</h3>
          <h4>Feels like {data.main.feels_like}°C</h4>
          <h4>Min Temp {data.main.temp_min}°C</h4>
          <h4>Max Temp {data.main.temp_max}°C</h4>
          <h4>Pressure {data.main.pressure}</h4>
        </div>
      ))}
    </div>
  );
};

export default Weather;
