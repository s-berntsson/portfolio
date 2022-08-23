import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    current: "red",
    data: {
        red: {
            light: "#FFC7C7",
            dark: "#D62F2F",
            glow: "#FF0000"
        },
        purple: {
            light: "#FEC6FF",
            dark: "#AE36B0",
            glow: "#FA00FF"
        },
        blue: {
            light: "#D8EEFF",
            dark: "#1D7BBF",
            glow: "#0094FF"
        },
        green: {
            light: "#D8FFE0",
            dark: "#329748",
            glow: "#00FF38"
        }
    }
}

export const themesSlice = createSlice({
    name: 'themes',
    initialState,

    reducers: {
        changeTheme: (state, action) => {
            state.current = action.payload;
        }
    }
})

export const { changeTheme } = themesSlice.actions

export const selectCurrentTheme = state => state.themes.current

export const selectThemeKeys = state => Object.keys(state.themes.data)

export const selectAllThemeData = state => state.themes.data

export const selectCurrentThemeData = (state) => { 
    const current = selectCurrentTheme(state)
    const data = selectAllThemeData(state)
    return data[current]
}

export default themesSlice.reducer