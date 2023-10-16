import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="day-and-description">
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={54} />
          <span>
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
        </div>
        <div className="col-6">
          <div className="weather-conditions">
            <ul>
              <li>
                Humidity:{" "}
                <span className="humidity">{props.data.humidity}%</span>
              </li>
              <li>
                Wind: <span className="speed">{props.data.wind} km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
