import "./App.css";
import CityInput from "./components/CityInput";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="app-container">
      <CityInput />
      <Weather />
    </div>
  );
}

export default App;
