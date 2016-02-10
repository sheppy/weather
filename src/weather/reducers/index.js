import { combineReducers } from "redux";

import time from "./time";
import weather from "./weather";

export default combineReducers({
    time,
    weather
});
