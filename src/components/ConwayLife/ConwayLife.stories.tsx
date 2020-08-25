import { boolean, number, withKnobs } from "@storybook/addon-knobs";
import { ConwayLife, ConwaySettings } from "./ConwayLife";
import { PoorCellProps } from "./Cell/Cell";
import React from "react";

export default {
    title: "ConwayLife",
    component: ConwayLife,
    decorators: [withKnobs],
};

const initField = (
    settings: ConwaySettings,
    random: boolean
): Array<Array<PoorCellProps>> => {
    const cells: Array<Array<PoorCellProps>> = [];
    for (let i = 0; i < settings.fieldHeight; i++) {
        cells[i] = [];
        for (let j = 0; j < settings.fieldWidth; j++) {
            cells[i][j] = {
                alive: random
                    ? Math.random() < settings.alivePercent / 100
                    : i <= j,
                animated: false,
                step: 0,
            };
        }
    }
    return cells;
};

export const conwayLife = () => {
    const random = boolean("Random Field Filling", false);

    const settings: ConwaySettings = {
        alivePercent: number("alivePercent", 30),
        animationDelay: 0,
        animationStepsCount: 0,
        cellSize: number("size", 10),
        fieldHeight: number("fieldHeight", 25),
        fieldWidth: number("fieldWidth", 25),
    };

    return (
        <ConwayLife
            conwayField={initField(settings, random)}
            conwaySettings={settings}
        />
    );
};
