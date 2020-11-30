import { useFetch } from "./use-fetch.hook";
import { createUrl } from "../utilities";

/**
 * A react hook that fetches hourly forecast for a given location
 * (<lat>, <lon>) for a time frame (<start>, <end>).
 */
const useHourly = ({ apikey, lat, lon, start, end }) => {
    const url = createUrl({
        url: 'https://api.climacell.co/v3/weather/forecast/hourly',
        query: {
            apikey:'KkwjvSqyDCLJcQCWMnYKnOtd0CccROKu',
               lat:'39.309',
            lon:'-76.626',
            unit_system: 'us',
            fields: 'precipitation,temp,feels_like,weather_code',
            start_time: start.toISOString(),
            end_time: end.toISOString()
        }
    });

    return useFetch({ url });
};

/**
 * A react hook that fetches realtime data for a given location
 * (<lat>, <lon>) for a time frame (<start>, <end>).
 */
const useRealtime = ({ apikey, lat, lon }) => {
    const url = createUrl({
        url: 'https://api.climacell.co/v3/weather/realtime',
        query: {
            apikey:'KkwjvSqyDCLJcQCWMnYKnOtd0CccROKu',
            lat:'39.309',
            lon:'-76.626',
            unit_system: 'us',
            fields: 'precipitation,temp,feels_like,weather_code',
        }
    });

    return useFetch({ url });
};

export { useHourly, useRealtime };
