/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

export interface PoorCellProps {
    alive: boolean;
    step: number;
    animated: boolean;
}

export interface CellProps extends PoorCellProps {
    size: number;
    stepsCount: number;
}

const topColorValue = 255;

export const getColorComponent = (props: CellProps): number => {
    if (props.animated) {
        if (!props.alive) {
            return topColorValue * (props.step / props.stepsCount);
        } else {
            return topColorValue * (1 - props.step / props.stepsCount);
        }
    } else {
        return props.alive ? 0 : topColorValue;
    }
};

export const getColor = (colorComponent: number): string => {
    return `rgb(${colorComponent},${colorComponent},${colorComponent})`;
};

export const Cell = (props: CellProps) => {
    return (
        <div
            css={{
                width: props.size,
                height: props.size,
                marginRight: 1,
                marginTop: 1,
                float: "left",
                backgroundColor: getColor(getColorComponent(props)),
            }}
            className="cell"
        />
    );
};
