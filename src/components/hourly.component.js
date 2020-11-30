import React from 'react';
import './daily.component.css';
import { formatTime } from "../utilities";
import { Temp } from "./temp.component";
import { WeatherIcon } from "./weather-icon.component";

function daily({ daily }) {
    return (
        <div className="daily">
            {daily.map(hour => (
                <div className="hour">
                    <div className="hour-time">{formatTime(hour.observation_time.value)}</div>
                    <div className="hour-icon"><WeatherIcon value={hour.weather_code.value} /></div>
                    <div className="hour-temp"><Temp value={hour.temp.value} />°</div>
                </div>
            ))}
        </div>
    );
}

export { daily };
