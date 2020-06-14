import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";

export const withRedirect = (Component) => {
    class Redirect extends React.Component {
        render() {
            if(this.props.isAuth) {
                return <Component />;
            } else {
                return <Redirect to={"/"} />
            }
        }
    }
    let WithRedirectComponent = connect((state) => ({isAuth: state.user.isAuth}))(Redirect);
    return WithRedirectComponent;
}
