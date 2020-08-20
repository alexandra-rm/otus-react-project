import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {ConnectedConwayLifeWithControls} from "smart/ConwayLifeWithControls/ConnectedConwayLifeWithControls";
import {ConnectedLogin} from "smart/ConnectedLogin/ConnectedLogin";

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppBar position="static">
                    <Toolbar>
                    </Toolbar>
                </AppBar>
                <Container fixed>
                    <BrowserRouter>
                        <Route exact path="/life" component={ConnectedConwayLifeWithControls} />
                        <Route exact path="/login" component={ConnectedLogin} />
                        <Route exact path="/" render={() => (
                            <Redirect to="/login" />
                        )} />
                    </BrowserRouter>
                </Container>
            </Provider>
        );
    }
}
