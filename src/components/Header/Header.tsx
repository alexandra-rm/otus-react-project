import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";

interface HeaderProps {
    authenticated: boolean;
    username: string;
}

export const Header = (props: HeaderProps) => {
    return (
        <AppBar position="static">
            <Toolbar>
                { props.authenticated ? <Button color="inherit">Выйти</Button> : null }

            </Toolbar>
        </AppBar>
    );
};