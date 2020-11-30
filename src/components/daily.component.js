import React from 'react';
import './daily.component.css';
import { formatTime } from "../utilities";
import { Temp } from "./temp.component";
import { WeatherIcon } from "./weather-icon.component";

function daily({ daily }) {
    return (
        <div className="daily">
            {daily.map(day => (
                <div className="day">
                    <div className="day-time">{formatTime(day.observation_time.value)}</div>
                    <div className="day-icon"><WeatherIcon value={day.weather_code.value} /></div>
                    <div className="day-temp"><Temp value={day.temp.value} />°</div>
                </div>
            ))}
        </div>
    );
}

export { daily };
