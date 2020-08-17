import { MouseEventHandler } from "react";
import { ConwaySettings } from "components/ConwayLife/ConwayLife";
import React from "react";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export interface ControlsFormProps extends ConwaySettings {
    changeSetting: Function;
    update: MouseEventHandler;
}

export class ControlsForm extends React.Component<ControlsFormProps> {
    handleChange = (fieldName: string) => (event: React.FormEvent) => {
        const target = event.target as HTMLFormElement;
        if (target.value === "") {
            return;
        }
        const value: number = parseFloat(target.value);
        this.props.changeSetting(fieldName, value);
    };

    render() {
        return (
            <form>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="По горизонтали"
                            defaultValue={this.props.fieldWidth.toString()}
                            onChange={this.handleChange("fieldWidth")}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="По вертикали"
                            defaultValue={this.props.fieldHeight.toString()}
                            onChange={this.handleChange("fieldHeight")}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Размер клетки"
                            defaultValue={this.props.cellSize.toString()}
                            onChange={this.handleChange("cellSize")}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Задержка анимации"
                            defaultValue={this.props.animationDelay.toString()}
                            onChange={this.handleChange("animationDelay")}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Процент живых клеток"
                            defaultValue={this.props.alivePercent.toString()}
                            onChange={this.handleChange("alivePercent")}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Количество шагов анимации"
                            defaultValue={this.props.animationStepsCount.toString()}
                            onChange={this.handleChange("animationStepsCount")}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.props.update}
                        >
                            Обновить
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}
