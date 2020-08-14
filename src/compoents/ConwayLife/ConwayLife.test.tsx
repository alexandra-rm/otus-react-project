import {ConwayLife, ConwaySettings} from "./ConwayLife";
import {PoorCellProps} from "../Cell/Cell";
import {mount} from "enzyme";
import React from "react";

const initField = (
    settings: ConwaySettings
): Array<Array<PoorCellProps>> => {
    const cells: Array<Array<PoorCellProps>> = [];
    for (let i = 0; i < settings.fieldHeight; i++) {
        cells[i] = [];
        for (let j = 0; j < settings.fieldWidth; j++) {
            cells[i][j] = {
                alive: i <= j,
                animated: false,
                step: 0,
            };
        }
    }
    return cells;
};

const settings: ConwaySettings = {
    alivePercent: 30,
    animationDelay: 0,
    animationStepsCount: 0,
    cellSize: 10,
    fieldHeight: 25,
    fieldWidth: 25
};

describe("ConwayLife", () => {
    it("Render", () => {
        const wrapper = mount(
            <ConwayLife conwayField={initField(settings)} conwaySettings={settings} />
        );
        expect(wrapper.props().conwaySettings).toBe(settings);
        expect(wrapper.props().conwayField).toEqual(initField(settings));
        expect(wrapper.getDOMNode().tagName.toLowerCase()).toBe("div");
        expect(wrapper.find("Cell")).toHaveLength(25 * 25)
    });
});
