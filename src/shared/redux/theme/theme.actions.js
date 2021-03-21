import ThemeActionTypes from './theme.reducer'

export const setDark = () => {
    return {
        type: ThemeActionTypes.SET_DARK
    }
}

export const setLight = () => {
    return {
        type: ThemeActionTypes.SET_LIGHT
    }
}