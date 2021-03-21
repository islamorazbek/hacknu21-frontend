export const ThemeActionTypes = {
    SET_DARK: "SET_DARK",
    SET_LIGHT: "SET_LIGHT"
}

const initialState = {
    dark: false
}

export const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ThemeActionTypes.SET_DARK:
            return {
                ...state,
                dark: true
            };
        case ThemeActionTypes.SET_DARK:
            return {
                ...state,
                dark: false
            };
        default:
            return state;
    }
}