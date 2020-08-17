import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";
import Container from "@material-ui/core/Container";
import { ConnectedConwayLife } from "smart/ConwayLife/ConnectedConwayLife";
import { ConnectedControlsForm } from "smart/ControlsForm/ConnectedControlsForm";

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
