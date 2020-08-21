/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";

interface LoginProps {
    authenticated: boolean;
    login: Function;
}

export class LoginForm extends React.Component<LoginProps> {
    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // @ts-ignore
        const username = document.getElementById("username-input")
            .value as string;
        this.props.login(username);
    };

    render() {
        if (this.props.authenticated) {
            return <Redirect to="/life" />;
        }

        return (
            <form css={{ marginTop: 20 }} onSubmit={this.handleSubmit}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <TextField
                            fullWidth
                            label="Представьтесь"
                            id="username-input"
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            OK
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}
