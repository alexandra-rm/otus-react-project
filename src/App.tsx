import React from "react";
import {Provider} from "react-redux";
import {store} from "store/store";
import {ConnectedControlsForm} from "smart/ControlsForm/ControlsForm";
import {ConnectedConwayLife} from "smart/ConwayLife/ConwayLife";

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedControlsForm />
                <ConnectedConwayLife />
            </Provider>
        );
    }
}