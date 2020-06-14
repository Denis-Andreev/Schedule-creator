const SIGN_OUT = "SIGN-OUT";
const LOG_IN = "LOG-IN";
const SIGN_IN = "SIGN-IN";

export const signOutAC = () => ({type: SIGN_OUT});
export const logInAc = (id,login) => ({type: LOG_IN, id, login});
export const signInAc = () => ({type: SIGN_IN});

const initialState = {
    id: 321312,
    login: "User Name",
    isAuth: true,
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN: {
            return {
                ...state,
                id: action.id,
                login: action.login,
                isAuth: true,
            }
        }
        case SIGN_OUT: {
            return {
                ...state,
                isAuth: false,
            }
        }
        case SIGN_IN: {
            return state;
        }
        default: {
            return state;
        }
    }
}