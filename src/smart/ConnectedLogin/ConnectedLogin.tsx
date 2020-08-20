import {Dispatch} from "redux";
import {sagaLoginAction} from "smart/ConnectedLogin/saga";
import {connect} from "react-redux";
import {LoginForm} from "components/LoginForm/LoginForm";
import {StoreState} from "store/reducer";

const mapStateToProps = ({ user }: StoreState) => {
    return {
        authenticated: !!user.username
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        login: (username: string) => {
            dispatch(sagaLoginAction(username));
        }
    };
};

export const ConnectedLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);