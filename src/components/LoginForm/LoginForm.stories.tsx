import {withKnobs} from "@storybook/addon-knobs";
import {LoginForm} from "./LoginForm";
import * as React from "react";

export default {
    title: "LoginForm",
    component: LoginForm,
    decorators: [withKnobs],
};

export const loginForm = () => {
    return <LoginForm login={(username: string) => { alert(username); }} />;
};