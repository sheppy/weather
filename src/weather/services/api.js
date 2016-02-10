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
