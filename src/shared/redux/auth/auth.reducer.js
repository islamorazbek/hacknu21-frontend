
export const AuthActionTypes = {
    AUTH_LOGIN: "AUTH_LOGIN",
    AUTH_LOGIN_SUCCESS: "AUTH_SUCCESS",
    AUTH_LOGIN_ERROR: "AUTH_LOGIN_ERROR",

    FETCH_PROFILE: "FETCH_PROFILE",
    FETCH_PROFILE_SUCCESS: "FETCH_PROFILE_SUCCESS",
    FETCH_PROFILE_ERROR: "FETCH_PROFILE_ERROR",

    AUTH_LOGOUT: "AUTH_LOGOUT"
}

const initialState = {
    auth: false,
    profile: null,
    loading: false,
    errors: '',
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.AUTH_LOGIN:
            return {
                ...state,
                loading: true
            }
        case AuthActionTypes.AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                auth: true,
                errors: '',
                loading: false,
            }
        case AuthActionTypes.AUTH_LOGIN_ERROR:
            return {
                ...state,
                auth: false,
                errors: action.payload,
                loading: false
            }

        case AuthActionTypes.FETCH_PROFILE:
            return {
                ...state,
                loading: true
            }
        case AuthActionTypes.FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                errors: '',
                loading: false
            }
        case AuthActionTypes.FETCH_PROFILE_ERROR:
            return {
                ...state,
                errors: action.payload,
                loading: false
            }
        case AuthActionTypes.AUTH_LOGOUT:
            return {
                ...state,
                profile: null
            }
        default:
            return state;
    }
}