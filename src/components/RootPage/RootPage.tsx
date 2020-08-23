import { Redirect } from "react-router";
import React from "react";

interface AuthenticationProps {
    authenticated: boolean;
}

export const RootPage = (props: AuthenticationProps) => {
    if (props.authenticated) {
        return <Redirect to="/life" />;
    } else {
        return <Redirect to="/login" />;
    }
};
