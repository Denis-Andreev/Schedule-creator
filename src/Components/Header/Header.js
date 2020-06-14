import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signOutAC} from "../../redux/user-reducer";

let Header = (props) => {
    let nav = props.user.isAuth && (
        <nav className="text-white">
            <NavLink to="/createSchedule">
                Создать расписание
            </NavLink>
            <NavLink to="/mySchedules">
                Мои расписания
            </NavLink>
        </nav>
    );

    return (
        <header className="navbar navbar-dark bg-dark">
            {nav}
            <div className="authContainer">
                <Auth
                    login={props.user.login}
                    isAuth={props.user.isAuth}
                    signOut={props.signOut}
                />
            </div>
        </header>
    )
}

const Auth = (props) => {
    if(props.isAuth) {
        return (
            <>
                <span>{props.login}</span>
                <button onClick={props.signOut} className="btn btn-md btn-primary">Выйти</button>
            </>
        )
    } else {
        return (
            <>
                <NavLink to="/login" className="btn btn-md btn-primary">Войти</NavLink>
                <NavLink to="/signup" className="btn btn-md btn-info">Зарегистрироваться</NavLink>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutAC()),
    }
}

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;