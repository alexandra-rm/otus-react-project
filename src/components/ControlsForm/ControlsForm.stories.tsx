import { number, withKnobs } from "@storybook/addon-knobs";
import { ControlsForm, ControlsFormProps } from "./ControlsForm";
import * as React from "react";

export default {
    title: "ControlsForm",
    component: ControlsForm,
    decorators: [withKnobs],
};

export const controlsForm = () => {
    const settings: ControlsFormProps = {
        changeSetting: (fieldName: string, value: number) => {
            console.log("fieldName", fieldName, "value", value);
        },
        update: () => {
            console.log("Updated");
        },
        alivePercent: number("alivePercent", 30),
        animationDelay: 0,
        animationStepsCount: 0,
        cellSize: number("size", 10),
        fieldHeight: number("fieldHeight", 25),
        fieldWidth: number("fieldWidth", 25),
    };

    return <ControlsForm {...settings} />;
};
