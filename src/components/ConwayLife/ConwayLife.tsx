/** @jsx jsx */
import { jsx } from "@emotion/core";
import {Cell, PoorCellProps} from "./Cell/Cell";
import React from "react";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

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
        <Grid container spacing={1} >
            <Grid item xs={12} css={{ marginTop: 8 }}>
                <Box border={1} borderColor="#cccccc" borderRadius="borderRadius" padding={2}>
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
                    <div css={{ clear: "both" }} />
                </Box>
            </Grid>
        </Grid>
    );
};
