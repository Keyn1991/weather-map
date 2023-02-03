import React, { useState, useEffect } from 'react';


import './css/style.css'
import {Form} from "../FormsComponents/Form";
import {axiosService} from "../../services/axiosService";
const WeatherApp = () => {

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({});

    const handleChange = event => {
        setCity(event.target.value);
    };

    useEffect(() => {
        const axiData = async () => {
            const result = await axiosService(city);
            setWeatherData(result.data);
        };

        if (city) {
            axiData();
        }
    }, [city]);

    const handleClick = event => {
        setWeatherData({});
        setCity('');
    };

    return (
        <div className="weather-app">
          <Form handleChange={handleChange} handleClick={handleClick} key={city.code} city={city}/>
            {weatherData.main && (
                <div className="weather-data">
                    <h1>Weather in {city}:</h1>
                    <p>Temperature: {Math.round(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Conditions: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp

























