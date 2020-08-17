import { StoreState } from "store/reducer";
import { Dispatch } from "redux";
import { updateAction } from "smart/ConwayLife/saga";
import { connect } from "react-redux";
import { ConwayLife } from "components/ConwayLife/ConwayLife";

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
