import React from "react";
import { Route, IndexRoute } from "react-router";
import LocationPage from "./containers/LocationPage"
import App from "./containers/App"
import WeatherPage from "./containers/WeatherPage"

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LocationPage}/>
        <Route path="/weather/:location" component={WeatherPage}/>
    </Route>
);
