import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";
import Container from "@material-ui/core/Container";
import { Route, StaticRouter, Switch } from "react-router-dom";
import { ConnectedConwayLifeWithControls } from "smart/ConwayLifeWithControls/ConnectedConwayLifeWithControls";
import { ConnectedLogin } from "smart/ConnectedLogin/ConnectedLogin";
import { ConnectedHeader } from "smart/Header/ConnectedHeader";
import { ConnectedRootPage } from "smart/RootPage/ConnectedRootPage";
import { About } from "components/About/About";

interface StaticAppProps {
    uri: string;
}

export class StaticApp extends React.Component<StaticAppProps> {
    render() {
        return (
            <Provider store={store}>
                <StaticRouter location={this.props.uri}>
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
                </StaticRouter>
            </Provider>
        );
    }
}
