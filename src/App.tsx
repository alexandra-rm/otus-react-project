import React from "react";
import {Provider} from "react-redux";
import {store} from "store/store";
import {ConnectedControlsForm} from "smart/ControlsForm/ControlsForm";
import {ConnectedConwayLife} from "smart/ConwayLife/ConwayLife";
import Container from "@material-ui/core/Container";

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container fixed>
                    <ConnectedControlsForm />
                    <ConnectedConwayLife />
                </Container>
            </Provider>
        );
    }
}