import { withKnobs } from "@storybook/addon-knobs";
import { About } from "./About";
import React from "react";

export default {
    title: "About",
    component: About,
    decorators: [withKnobs],
};

export const about = () => {
    return <About />;
};
