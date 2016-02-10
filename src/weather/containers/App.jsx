import React from "react";
import { connect } from "react-redux";
import { requestWeather } from "../actions/api";

function mapStateToProps(state) {
    return {
        time: state.getIn(["weather", "dt"]),
        timeSunrise: state.getIn(["weather", "sys", "sunrise"]),
        timeSunset: state.getIn(["weather", "sys", "sunset"]),
        location: state.getIn(["weather", "name"]),
        temperature: state.getIn(["weather", "main", "temp"]),
        temperatureMin: state.getIn(["weather", "main", "temp_min"]),
        temperatureMax: state.getIn(["weather", "main", "temp_max"]),
        windSpeed: state.getIn(["weather", "wind", "speed"]),
        windDirection: state.getIn(["weather", "wind", "deg"]),
        type: state.getIn(["weather", "weather", 0, "main"]),
        description: state.getIn(["weather", "weather", 0, "description"]),
        id: state.getIn(["weather", "weather", 0, "id"]),
        cloudiness: state.getIn(["weather", "clouds", "all"])
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
        return (
            <main>
                <h1>App</h1>

                {this.props.id &&
                    <div>
                        <p><i className="wi wi-thermometer"></i> {this.props.temperature}<i className="wi wi-celsius"></i></p>
                        <p><i className={"wi wi-owm-" + this.props.id}></i> {this.props.type}</p>

                        <p><i className={"wi wi-wind towards-" + parseInt(this.props.windDirection, 10) + "-deg"}></i> {this.props.windSpeed} m/s</p>

                    </div>
                }
            </main>
        )
    }
}

export default App;
export const AppContainer = connect(mapStateToProps)(App);
