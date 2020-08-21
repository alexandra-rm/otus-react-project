import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";
import Container from "@material-ui/core/Container";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {ConnectedConwayLifeWithControls} from "smart/ConwayLifeWithControls/ConnectedConwayLifeWithControls";
import {ConnectedLogin} from "smart/ConnectedLogin/ConnectedLogin";
import {ConnectedHeader} from "smart/Header/ConnectedHeader";

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ConnectedHeader />
                    <Container fixed>
                    <Route exact path="/life" component={ConnectedConwayLifeWithControls} />
                    <Route exact path="/login" component={ConnectedLogin} />
                    <Route exact path="/" render={() => (
                        <Redirect to="/login" />
                    )} />
                    </Container>
                </BrowserRouter>
            </Provider>
        );
    }
}
