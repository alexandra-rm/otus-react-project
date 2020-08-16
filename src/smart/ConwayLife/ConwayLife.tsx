/** @jsx jsx */
import { jsx } from "@emotion/core";
import {Cell, PoorCellProps} from "./Cell";
import { connect } from "react-redux";
import React from "react";
import {updateAction} from "smart/ConwayLife/saga";
import {Dispatch} from "redux";
import {StoreState} from "store/reducer";

export interface ConwaySettings {
    fieldWidth: number;
    fieldHeight: number;
    cellSize: number;
    animationDelay: number;
    alivePercent: number;
    animationStepsCount: number;
}

interface ConwayLifeProps {
    conwayField: Array<Array<PoorCellProps>>;
    conwaySettings: ConwaySettings;
}

export const ConwayLife = (props: ConwayLifeProps) => {
    return (
        <div
            className="conway-life"
            css={{
                clear: "both",
            }}
        >
            {props.conwayField.map((l: Array<PoorCellProps>, i) => (
                <div
                    key={"l-" + i.toString()}
                    className="line"
                    css={{
                        clear: "both",
                    }}
                >
                    {l.map((c, j) => (
                        <Cell
                            key={"c-" + i.toString() + "-" + j.toString()}
                            {...c}
                            size={props.conwaySettings.cellSize}
                            stepsCount={props.conwaySettings.animationStepsCount}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = ({ conwaySettings, conwayField }: StoreState) => ({
    conwaySettings,
    conwayField,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        update: () => {
            dispatch(updateAction());
        },
    };
};

export const ConnectedConwayLife = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConwayLife);