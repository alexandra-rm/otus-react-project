import { StoreState } from "store/reducer";
import { connect } from "react-redux";
import { RootPage } from "components/RootPage/RootPage";

const mapStateToProps = ({ user }: StoreState) => ({
    authenticated: !!user.username,
});

export const ConnectedRootPage = connect(mapStateToProps)(RootPage);
