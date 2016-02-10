import React from "react";
import { Map } from "immutable";
import { connect } from "react-redux";
import { requestWeather } from "../actions/api";

function mapStateToProps(state) {
    return {
        time: state.time,
        temperature: state.weather.get("temperature", Map()),
        wind: state.weather.get("wind", Map()),
        weather: state.weather.get("weather", Map())
    };
}

class App extends React.Component {
    // Load initial items
    componentDidMount() {
        console.log("componentDidMount");
        // Need to trigger this action
        this.props.dispatch(requestWeather("London,uk"));
    }

    render() {
        let { temperature, weather, wind } = this.props;

        return (
            <main>
                <h1>App</h1>

                {weather.get("id") &&
                    <div>
                        <p><i className="wi wi-thermometer"></i> {temperature.get("current")}<i className="wi wi-celsius"></i></p>
                        <p><i className={weather.get("typeIcon")}></i> {weather.get("description")} ({weather.get("cloudiness")}%)</p>

                        <p><i className={wind.get("directionIcon")}></i> {wind.get("speed")} m/s</p>
                    </div>
                }
            </main>
        )
    }
}

export default App;
export const AppContainer = connect(mapStateToProps)(App);
