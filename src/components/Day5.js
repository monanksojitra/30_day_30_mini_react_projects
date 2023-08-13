import React, { useState, useEffect } from "react";

const Day5 = () => {
  const [data, setData] = useState(null);
  const [randomCities, setRandomCities] = useState([]);
  const [city, setCity] = useState(""); // User-input city

  const apiKey = "5cbd4880bb4eb9057f71ca64725a74a5"; // Replace with your actual API key

  useEffect(() => {
    // Fetch weather data for random cities
    const fetchRandomCitiesData = async () => {
      const cities = ["New York", "Tokyo", "London"]; // Add more cities if needed
      const randomCityDataPromises = cities.map(async (city) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        const data = await response.json();
        return data;
      });
      const randomCityData = await Promise.all(randomCityDataPromises);
      setRandomCities(randomCityData);
    };

    fetchRandomCitiesData();
  }, []);

  const fetchWeatherData = async () => {
    // Fetch weather data for the user-input city
    if (city) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const newData = await response.json();

      // Update randomCities list by removing the oldest city and adding the new city
      setRandomCities((prevCities) => {
        const newRandomCities = [...prevCities];
        if (newRandomCities.length >= 3) {
          newRandomCities.shift(); // Remove the oldest city
        }
        newRandomCities.push(newData); // Add the new city
        return newRandomCities;
      });

      setData(newData);
    }
  };

  const handleSearch = () => {
    fetchWeatherData();
  };

  return (
    <>
      <div className="input-group mb-3 w-50 m-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Enter City Name !!"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSearch}
        >
          <i className="fas fa-search" />
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {randomCities.map((cityData, index) => (
          <div className="col" key={index}>
            <div
              className="card mb-4 rounded-3 shadow-sm"
              style={{ width: "21rem" }}
            >
              <div className="card-header">
                Weather in {cityData.name}, {cityData.sys.country}
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-cloud"></i>{" "}
                  {cityData.weather[0].description}
                </h5>
                <div className="list-group list-group-light mt-3">
                  <p className="card-text">
                    <i className="fas fa-tint"></i> Humidity:{" "}
                    {cityData.main.humidity}%
                  </p>
                  <p className="card-text">
                    <i className="fas fa-wind"></i> Wind Speed:{" "}
                    {cityData.wind.speed} m/s
                  </p>
                  <p className="card-text">
                    <i className="fas fa-cloud"></i> Cloudiness:{" "}
                    {cityData.clouds.all}%
                  </p>
                  <p className="card-text">
                    <i className="fas fa-compress"></i> Pressure:{" "}
                    {cityData.main.pressure} hPa
                  </p>
                  <p className="card-text">
                    <i className="fas fa-eye"></i> Visibility:{" "}
                    {cityData.visibility} meters
                  </p>
                </div>
                <div className="card-footer text-dark mt-3">
                  Last Updated: {new Date(cityData.dt * 1000).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Day5;
