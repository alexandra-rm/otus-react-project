import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";
import Container from "@material-ui/core/Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedConwayLifeWithControls } from "smart/ConwayLifeWithControls/ConnectedConwayLifeWithControls";
import { ConnectedLogin } from "smart/ConnectedLogin/ConnectedLogin";
import { ConnectedHeader } from "smart/Header/ConnectedHeader";
import { ConnectedRootPage } from "smart/RootPage/ConnectedRootPage";
import { About } from "components/About/About";

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ConnectedHeader />
                    <Container fixed>
                        <Switch>
                            <Route
                                exact
                                path="/life"
                                component={ConnectedConwayLifeWithControls}
                            />
                            <Route
                                exact
                                path="/login"
                                component={ConnectedLogin}
                            />
                            <Route exact path="/about" component={About} />
                            <Route component={ConnectedRootPage} />
                        </Switch>
                    </Container>
                </BrowserRouter>
            </Provider>
        );
    }
}
