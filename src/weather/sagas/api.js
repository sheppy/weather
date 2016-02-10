import { take, put, call, fork } from "redux-saga";
import T from "../constants/ACTION_TYPES";
import * as API from "../services/api";


function *requestWeather(location) {
    // TODO: Error handling
    const response = yield call(API.request, "/weather", { q: location });

    yield put({ type: T.API.WEATHER_SUCCESS, response, receivedAt: Date.now() });
}

export function *watchRequestWeather() {
    var data;
    while ((data = yield take(T.API.WEATHER_REQUEST))) {
        yield fork(requestWeather, data.location);
    }
}

function *requestForecast(location) {
    // TODO: Error handling
    const response = yield call(API.request, "/forecast", { q: location });

    yield put({ type: T.API.FORECAST_SUCCESS, response, receivedAt: Date.now() });
}

export function *watchRequestForecast() {
    var data;
    while ((data = yield take(T.API.FORECAST_REQUEST))) {
        yield fork(requestForecast, data.location);
    }
}
