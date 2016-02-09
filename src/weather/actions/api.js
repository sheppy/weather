import T from "../constants/ACTION_TYPES";


export function requestWeather(location) {
    return { type: T.API.WEATHER_REQUEST, location };
}

export function requestForecast(location) {
    return { type: T.API.FORECAST_REQUEST, location };
}
