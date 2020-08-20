import {boolean, text, withKnobs} from "@storybook/addon-knobs";
import {Header} from "./Header";
import React from "react";

export default {
    title: "Header",
    component: Header,
    decorators: [withKnobs],
};

export const header = () => {
    return <Header
        authenticated={boolean("authenticated", true)}
        username={text("username", "Evgeny")}
    />
};