import React from "react";
import { ConnectedControlsForm } from "smart/ControlsForm/ConnectedControlsForm";
import { ConnectedConwayLife } from "smart/ConwayLife/ConnectedConwayLife";
import { Redirect } from "react-router";

interface AuthenticationProps {
    authenticated: boolean;
}

export const ConwayLifeWithControls = (props: AuthenticationProps) => {
    if (props.authenticated) {
        return (
            <>
                <ConnectedControlsForm />
                <ConnectedConwayLife />
            </>
        );
    } else {
        return <Redirect to="/login" />;
    }
};
