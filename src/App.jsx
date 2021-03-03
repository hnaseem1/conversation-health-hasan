import React from "react";
import CityListDropDown from "./Components/WeatherForcast-Components/CityListDropdown";
import CityForcastDetail from "./Components/WeatherForcast-Components/CityForcastDetail";
import "./styles.css";
import ForcastTableWithToggle from "./Components/WeatherForcast-Components/ForcastTableToggle";

const cityList = [
  {
    id: 6167865,
    name: "Toronto",
    country: "CA"
  },
  {
    id: 6094817,
    name: "Ottawa",
    country: "CA"
  },
  {
    id: 1850147,
    name: "Tokyo",
    country: "JP"
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <h5>Fetches Information every min</h5>
      <CityListDropDown data={cityList} />
      <CityForcastDetail id={6094817} />
      <ForcastTableWithToggle />
    </div>
  );
}
