import { useState, useEffect } from "react";
import { getWeatherData } from "../store/actions/weatherActions";
import { useDispatch } from "react-redux/es/exports";
const CityInput = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherData("London"));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    city && dispatch(getWeatherData(city));
    setCity("");
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input value={city} onChange={(e) => setCity(e.target.value)}></input>
        <button>
          <span class="material-symbols-outlined">search</span>
        </button>
      </form>
    </div>
  );
};

export default CityInput;
