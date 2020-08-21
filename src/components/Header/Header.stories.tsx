import {boolean, text, withKnobs} from "@storybook/addon-knobs";
import {Header} from "./Header";
import React from "react";
import {StaticRouter} from "react-router";

export default {
    title: "Header",
    component: Header,
    decorators: [withKnobs],
};

export const header = () => {
    return <StaticRouter>
        <Header
            authenticated={boolean("authenticated", true)}
            username={text("username", "Evgeny")}
            logout={() => { alert("Logout!"); }}
        />
    </StaticRouter>;
};