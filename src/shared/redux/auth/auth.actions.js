import { AuthActionTypes } from "./auth.reducer"

export const loginAction = ({ email, password }) => {
    return {
        type: AuthActionTypes.AUTH_LOGIN,
        payload: { email, password }
    }
}

export const loginSuccessAction = () => {
    return {
        type: AuthActionTypes.AUTH_LOGIN_SUCCESS
    }
}

export const loginErrorAction = ({ error }) => {
    return {
        type: AuthActionTypes.AUTH_LOGIN_ERROR,
        payload: error
    }
}

export const fetchProfileAction = () => {
    return {
        type: AuthActionTypes.FETCH_PROFILE
    }
}

export const fetchProfileSuccessAction = (profile) => {
    return {
        type: AuthActionTypes.FETCH_PROFILE_SUCCESS,
        payload: profile
    }
}

export const fetchProfileErrorAction = (error) => {
    return {
        type: AuthActionTypes.FETCH_PROFILE_ERROR,
        payload: error
    }
}

export const logoutAction = () => {
    return {
        type: AuthActionTypes.AUTH_LOGOUT
    }
}
