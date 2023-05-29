import React, { useState, useEffect } from "react";
import {
  WiSunrise,
  WiWindBeaufort0,
  WiWindBeaufort1,
  WiWindBeaufort2,
  WiWindBeaufort3,
  WiWindBeaufort4,
  WiWindBeaufort5,
  WiWindBeaufort6,
  WiWindBeaufort7,
  WiWindBeaufort8,
  WiWindBeaufort9,
  WiWindBeaufort10,
  WiWindBeaufort11,
  WiWindBeaufort12,
  WiHumidity,
  WiThunderstorm,
  WiRain,
  WiShowers,
  WiSnow,
  WiFog,
  WiDaySunny,
  WiCloud,
} from "react-icons/wi";

import {
  CardContainer,
  CardH2,
  CardP,
  CardBottomContainer,
  WeatherInfoContainer,
} from "./CardElements";

const smallIconStyle = { height: "100%", width: "50%", color: "#FCEbb6" };
const LargeIconStyle = { height: "100%", width: "100%", color: "#FCEbb6" };

const Card = (props) => {
  const [weather, setWeather] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState(0);
  const [windSpeedIcon, setWindSpeedIcon] = useState(0);

  useEffect(() => {
    fetchData();
  }, [props.city]);

  const fetchData = async () => {
    let response = await (
      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&APPID=5a722c8d2a5e9813f85a0e33d9c6aab5`
      )
    ).json();

    var windSpeed = response.wind?.speed;
    var weatherID =
      response.weather === undefined ? undefined : response.weather[0]?.id;

    setWeather(response);
    setWindSpeedIcon(getWindIcon(windSpeed));
    setWeatherIcon(getWeatherIcon(weatherID));
  };

  return (
    <CardContainer>
      <CardH2>{weather.name}</CardH2>
      <WeatherInfoContainer>
        {weatherIcon}
        <CardP>
          {weather.main?.temp === undefined ? "" : weather.main.temp + "°C"}
        </CardP>
      </WeatherInfoContainer>
      <CardBottomContainer>
        <WeatherInfoContainer>
          {windSpeedIcon}
          <p>{weather.wind?.speed === undefined ? "" : weather.wind.speed}</p>
        </WeatherInfoContainer>
        <WeatherInfoContainer>
          <WiHumidity
            style={
              weather.main?.humidity === undefined
                ? { opacity: "0" }
                : smallIconStyle
            }
          />
          <p>
            {weather.main?.humidity === undefined ? "" : weather.main?.humidity}
          </p>
        </WeatherInfoContainer>
      </CardBottomContainer>
    </CardContainer>
  );
};

//https://en.wikipedia.org/wiki/Beaufort_scale
function getWindIcon(windSpeed) {
  if (windSpeed === undefined)
    return <WiWindBeaufort0 style={{ opacity: "0" }} />;

  if (windSpeed > 0 && windSpeed < 2)
    return <WiWindBeaufort0 style={smallIconStyle} />;
  if (windSpeed > 2 && windSpeed < 5)
    return <WiWindBeaufort1 style={smallIconStyle} />;
  if (windSpeed > 5 && windSpeed < 11)
    return <WiWindBeaufort2 style={smallIconStyle} />;
  if (windSpeed > 11 && windSpeed < 19)
    return <WiWindBeaufort3 style={smallIconStyle} />;
  if (windSpeed > 19 && windSpeed < 28)
    return <WiWindBeaufort4 style={smallIconStyle} />;
  if (windSpeed > 28 && windSpeed < 38)
    return <WiWindBeaufort5 style={smallIconStyle} />;
  if (windSpeed > 38 && windSpeed < 49)
    return <WiWindBeaufort6 style={smallIconStyle} />;
  if (windSpeed > 49 && windSpeed < 61)
    return <WiWindBeaufort7 style={smallIconStyle} />;
  if (windSpeed > 61 && windSpeed < 74)
    return <WiWindBeaufort8 style={smallIconStyle} />;
  if (windSpeed > 74 && windSpeed < 88)
    return <WiWindBeaufort9 style={smallIconStyle} />;
  if (windSpeed > 88 && windSpeed < 102)
    return <WiWindBeaufort10 style={smallIconStyle} />;
  if (windSpeed > 102 && windSpeed < 117)
    return <WiWindBeaufort11 style={smallIconStyle} />;
  if (windSpeed >= 118) return <WiWindBeaufort12 style={smallIconStyle} />;
}

//https://openweathermap.org/weather-conditions
function getWeatherIcon(id) {
  if (id === undefined) return <WiSunrise style={LargeIconStyle} />;

  if (isThunderIcon(id)) return <WiThunderstorm style={LargeIconStyle} />;
  if (isDrizzleIcon(id)) return <WiRain style={LargeIconStyle} />;
  if (isRainIcon(id)) return <WiShowers style={LargeIconStyle} />;
  if (isSnowIcon(id)) return <WiSnow style={LargeIconStyle} />;
  if (isAtmosphereIcon(id)) return <WiFog style={LargeIconStyle} />;
  if (isClearsIcon(id)) return <WiDaySunny style={LargeIconStyle} />;
  if (isCloudsIcon(id)) return <WiCloud style={LargeIconStyle} />;

  return <WiSunrise style={LargeIconStyle} />;
}

function isThunderIcon(id) {
  if (id >= 200 && id <= 299) return true;

  return false;
}

function isDrizzleIcon(id) {
  if (id >= 300 && id <= 399) return true;

  return false;
}

function isRainIcon(id) {
  if (id >= 500 && id <= 599) return true;

  return false;
}

function isSnowIcon(id) {
  if (id >= 600 && id <= 699) return true;

  return false;
}

function isAtmosphereIcon(id) {
  if (id >= 700 && id <= 799) return true;

  return false;
}

function isClearsIcon(id) {
  return id == 800;
}

function isCloudsIcon(id) {
  if (id >= 801 && id <= 804) return true;

  return false;
}

export default Card;
