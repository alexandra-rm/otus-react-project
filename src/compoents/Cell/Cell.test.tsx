import React from "react";
import { mount } from "enzyme";
import { Cell, CellProps, getColor, getColorComponent } from "./Cell";

describe("Cell", () => {
  it("Render", () => {
    const wrapper = mount(
      <Cell alive={true} size={10} stepsCount={4} animated={false} step={0} />
    );
    expect(wrapper.props().alive).toBe(true);
    expect(wrapper.props().size).toBe(10);
    expect(wrapper.getDOMNode().tagName.toLowerCase()).toBe("div");
    expect(wrapper.getDOMNode().attributes.length).toBe(1);
    const style = wrapper.getDOMNode().getAttribute("style");
    expect(style).toBeNull();
    expect(wrapper.getDOMNode().className.length).toBeGreaterThan(4);
    expect(wrapper.getDOMNode().className.substr(0, 4)).toBe("cell");
  });
});

describe("getColor", () => {
  it("getColor", () => {
    expect(getColor(5)).toBe("rgb(5,5,5)");
    expect(getColor(50)).toBe("rgb(50,50,50)");
    expect(getColor(199)).toBe("rgb(199,199,199)");
  });
});

describe("getColorComponent", () => {
  it("getColorComponent", () => {
    const cellProps1: CellProps = {
      alive: false,
      animated: false,
      size: 0,
      step: 0,
      stepsCount: 0,
    };
    expect(getColorComponent(cellProps1)).toBe(255);
    const cellProps2: CellProps = {
      alive: true,
      animated: false,
      size: 0,
      step: 0,
      stepsCount: 0,
    };
    expect(getColorComponent(cellProps2)).toBe(0);
    const cellProps3: CellProps = {
      alive: true,
      animated: true,
      size: 0,
      step: 0,
      stepsCount: 2,
    };
    expect(getColorComponent(cellProps3)).toBe(255);
    const cellProps4: CellProps = {
      alive: true,
      animated: true,
      size: 0,
      step: 1,
      stepsCount: 2,
    };
    expect(getColorComponent(cellProps4)).toBe(255 * (1 - 1 / 2));
    const cellProps5: CellProps = {
      alive: true,
      animated: true,
      size: 0,
      step: 2,
      stepsCount: 2,
    };
    expect(getColorComponent(cellProps5)).toBe(0);
    const cellProps6: CellProps = {
      alive: false,
      animated: true,
      size: 0,
      step: 0,
      stepsCount: 24,
    };
    expect(getColorComponent(cellProps6)).toBe(0);
    const cellProps7: CellProps = {
      alive: false,
      animated: true,
      size: 0,
      step: 10,
      stepsCount: 24,
    };
    expect(getColorComponent(cellProps7)).toBe(255 * (10 / 24));
    const cellProps8: CellProps = {
      alive: false,
      animated: true,
      size: 0,
      step: 20,
      stepsCount: 24,
    };
    expect(getColorComponent(cellProps8)).toBe(255 * (20 / 24));
    const cellProps9: CellProps = {
      alive: false,
      animated: true,
      size: 0,
      step: 23,
      stepsCount: 24,
    };
    expect(getColorComponent(cellProps9)).toBe(255 * (23 / 24));
    const cellProps10: CellProps = {
      alive: false,
      animated: true,
      size: 0,
      step: 24,
      stepsCount: 24,
    };
    expect(getColorComponent(cellProps10)).toBe(255);
  });
});
