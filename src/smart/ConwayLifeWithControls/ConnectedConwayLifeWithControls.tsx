import {StoreState} from "store/reducer";
import {connect} from "react-redux";
import {ConwayLifeWithControls} from "components/ConwayLifeWithControls/ConwayLifeWithControls";

const mapStateToProps = ({user}: StoreState) => ({
    authenticated: !!user.username
});

export const ConnectedConwayLifeWithControls = connect(
    mapStateToProps
)(ConwayLifeWithControls);