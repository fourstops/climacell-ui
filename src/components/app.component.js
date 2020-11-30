import React from 'react';
import './app.component.css';
import { Realtime } from "./realtime.component";
import { daily } from "./daily.component";
import { usedaily, useRealtime } from "../hooks/use-weather.hook";
import ClimacellIcon from '../icons/climacell-icon-colored.svg';
import PinIcon from '../icons/pin.svg';
import { addHours } from "../utilities";

const now = new Date();
const sixHoursFromNow = addHours({ date: now, hours: 6 });

function Loading() {
    return <div>Loading...</div>;
}

function Error() {
    return <div>Oops! Something went wrong :(</div>;
}

function PoweredByClimacell() {
    return (
        <div className="powered">
            <a className="powered-link" target="_blank" href="https:/www.climacell.co">
                <img className="icon powered-icon"
                     src={ClimacellIcon}
                     alt="Powered by ClimaCell"
                     title="Powered by ClimaCell" />
            </a>
        </div>
    );
}

function App({ apikey, lat, lon, location }) {
    const [realtimeResponse, loadingRealtime, realtimeHasError] = useRealtime({
        apikey, lat, lon
    });
    const [dailyResponse, loadingdaily, dailyHasError] = usedaily({
        apikey, lat, lon, start: now, end: sixHoursFromNow
    });

    if (loadingRealtime || loadingdaily) {
        return <Loading />;
    }

    if (realtimeHasError || dailyHasError) {
        return <Error />;
    }

    return (
        <div className="app-root">
            <PoweredByClimacell />
            <div className="time">{now.toDateString()}</div>
            <div className="location">
                <img className="icon location-icon"
                     src={PinIcon}
                     alt={location}
                     title={location} />
                Baltimore
            </div>
            <Realtime realtime={realtimeResponse} />
            <div className="divider" />
            <daily daily={dailyResponse} />
        </div>
    );
}

export { App };
