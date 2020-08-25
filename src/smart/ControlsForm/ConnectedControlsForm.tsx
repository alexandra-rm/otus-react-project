import { StoreState } from "store/reducer";
import { bindActionCreators, Dispatch } from "redux";
import { reinit } from "smart/ConwayLife/saga";
import { connect } from "react-redux";
import { ControlsForm } from "components/ControlsForm/ControlsForm";
import { changeSetting } from "smart/ControlsForm/saga";

const mapStateToProps = ({ conwaySettings }: StoreState) => {
    return conwaySettings;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ changeSetting, reinit }, dispatch);
};

export const ConnectedControlsForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlsForm);
