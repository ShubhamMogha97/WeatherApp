import React, { useEffect, useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {
    const API_KEY = "f56f24967aaf51182d1d4df628297c6d";
      const [data, setdata] = useState();
      const [inputCity,setInputCity]=useState()
      const weatherDetails = (cityName) => {
        if (!cityName) return;
        const API_URL ="https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=" + API_KEY;
        axios.get(API_URL).then((res) => {
            setdata(res.data)
          }).catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
        weatherDetails("delhi")
      },[]);

      const handleInputChange=(e)=>{
        setInputCity(e.target.value)
      }

      const handleSearch=()=>{
        weatherDetails(inputCity)
      }
  return (
    <div className="col-md-12">
      <div className="weather-bg">
        <h1 className="heading">Weather APP</h1>
        <div class="d-grid gap-3 col-4 mt-4">
          <input type="text" class="form-control" onChange={handleInputChange} value={inputCity}/>
          <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weather-result-box">
          <img
            className="image-icon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
          />
          <h5 class="weather-city">{data?.name}</h5>
          <h5 class="weather-temp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h5>
        </div>
      </div>
    </div>
  );
};
export default App;

