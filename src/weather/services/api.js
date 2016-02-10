import axios from "axios";
import API_KEY from "../../../api.key.js";

const API_URL = "http://api.openweathermap.org/data/2.5";

export function request(url, params) {
    params = params || {};
    params.appid = API_KEY;
    params.units = "metric";

    return axios({
        baseURL: API_URL,
        method: "get",
        headers: {
            Accept: "application/json"
        },
        url,
        params: { ...params }
    }).then(response => response.data)
}

export function transformWeatherResponse(response) {
    return {
        time: {
            location: response.name,
            calculated: response.dt,
            sunrise: response.sys.sunrise,
            sunset: response.sys.sunset
        },
        temperature: {
            current: response.main.temp,
            min: response.main.temp_min,
            max: response.main.temp_max
        },
        wind: {
            speed: response.wind.speed,
            direction: response.wind.direction,
            directionIcon: "wi wi-wind towards-" + parseInt(response.wind.direction, 10) + "-deg"
        },
        weather: {
            id: response.weather[0].id,
            type: response.weather[0].main,
            typeIcon: "wi wi-owm-" + response.weather[0].id,
            description: response.weather[0].description,
            cloudiness: response.clouds.all
        }
    };
}
