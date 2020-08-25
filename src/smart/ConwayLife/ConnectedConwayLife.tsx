import { StoreState } from "store/reducer";
import { bindActionCreators, Dispatch } from "redux";
import { update } from "smart/ConwayLife/saga";
import { connect } from "react-redux";
import { ConwayLife } from "components/ConwayLife/ConwayLife";

const mapStateToProps = ({ conwaySettings, conwayField }: StoreState) => ({
    conwaySettings,
    conwayField,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ update }, dispatch);
};

export const ConnectedConwayLife = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConwayLife);
