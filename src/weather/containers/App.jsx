import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {};
}

class App extends React.Component {
    // Load initial items
    //componentDidMount() {
    //    fetchItems();
    //}

    render() {
        return (
            <main>
                <h1>App</h1>
            </main>
        )
    }
}

export default App;
export const AppContainer = connect(mapStateToProps)(App);
