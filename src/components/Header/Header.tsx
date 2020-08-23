/** @jsx jsx */
import { jsx } from "@emotion/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React, { MouseEventHandler } from "react";
import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

interface HeaderProps {
    authenticated: boolean;
    username: string;
    logout: MouseEventHandler;
}

export const Header = (props: HeaderProps) => {
    const welcome = props.authenticated ? (
        <Typography variant="h6">Здравствуйте, {props.username}.</Typography>
    ) : null;

    return (
        <AppBar position="static">
            <Toolbar>
                <Container>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={5} md={3}>
                            <Typography variant="h6">
                                <RouterLink
                                    to="/life"
                                    css={{
                                        color: "white",
                                        textDecoration: "none",
                                        marginRight: 15,
                                    }}
                                >
                                    Жизнь
                                </RouterLink>
                                <RouterLink
                                    to="/about"
                                    css={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                >
                                    О проекте
                                </RouterLink>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            {welcome}
                        </Grid>
                        <Grid item xs={3} sm={1} md={1} justify="flex-end">
                            {props.authenticated ? (
                                <Button color="inherit" onClick={props.logout}>
                                    Выйти
                                </Button>
                            ) : null}
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
