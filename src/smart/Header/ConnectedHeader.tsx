import { StoreState } from "store/reducer";
import { connect } from "react-redux";
import { Header } from "components/Header/Header";
import { Dispatch } from "redux";
import { sagaLogoutAction } from "smart/ConnectedLogin/saga";

const mapStateToProps = ({ user }: StoreState) => ({
    authenticated: !!user.username,
    username: user.username,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        logout: () => {
            dispatch(sagaLogoutAction());
        },
    };
};

export const ConnectedHeader = connect(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore
)(Header);
