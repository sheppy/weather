import React from "react";
import { Map } from "immutable";
import { connect } from "react-redux";
import { requestWeather } from "../actions/api";


function mapStateToProps(state) {
    return {
        location: state.location
    };
}

class LocationPage extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = { location: props.location };
    }

    chooseLocation(e) {
        e.preventDefault();
        this.context.router.push(`/weather/${this.state.location}`);
    }

    updateLocation(e) {
        this.setState({ location: e.target.value });
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.chooseLocation.bind(this)}>
                    <input placeholder="Location" type="text" onChange={this.updateLocation.bind(this)}/>
                    <button type="submit">Choose</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(LocationPage);
