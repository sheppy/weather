import axios from "axios";

const API_URL = "http://api.openweathermap.org/data/2.5";
const API_KEY = "";

export function request(url, params) {
    params = params || {};

    // TODO: Add the API key
    return axios({
        baseURL: API_URL,
        method: "get",
        headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest"
        },
        url,
        params: { ...params }
    }).then(response => response.data);
}
