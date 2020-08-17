import {StoreState} from "store/reducer";
import {Dispatch} from "redux";
import {changeSettingAction, reinitAction} from "smart/ConwayLife/saga";
import {connect} from "react-redux";
import {ControlsForm} from "components/ControlsForm/ControlsForm";

const mapStateToProps = ({ conwaySettings }: StoreState) => {
    return conwaySettings;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeSetting: (fieldName: string, value: number) => {
            dispatch(changeSettingAction(fieldName, value));
        },
        update: () => {
            dispatch(reinitAction());
        },
    };
};

export const ConnectedControlsForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlsForm);
