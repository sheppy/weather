import React from "react";
import ReactDOM from "react-dom";

import history from "./weather/services/history";
import routes from "./weather/routes";
import Root from "./weather/containers/Root";
import reducers from "./weather/reducers";
import configureStore from "./weather/store";

const store = configureStore(reducers);

ReactDOM.render(<Root store={store} history={history} routes={routes}/>, document.getElementById("app"));
