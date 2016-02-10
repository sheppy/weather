import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reducers from "./weather/reducers";
import configureStore from "./weather/store";
import { AppContainer } from "./weather/containers/App.jsx";

const store = configureStore(reducers);

ReactDOM.render(<Provider store={store}><AppContainer/></Provider>, document.getElementById("app"));
