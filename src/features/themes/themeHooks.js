import { useSelector } from "react-redux";
import { selectAllThemeData, selectCurrentTheme, selectCurrentThemeData } from "./themesSlice";

export const useGlowEffect = (string) => {
    let color = useSelector(selectCurrentThemeData)[string] || string
    console.log(color)
    return {filter: `drop-shadow(0 0 .2rem ${color}`}
}

export const useCurrentThemeData = () => {
    const currentTheme = useSelector(selectCurrentTheme)
    const {light, dark, glow} = useSelector(selectCurrentThemeData)

    const currentThemeData = {
        currentTheme: currentTheme,
        light: light,
        dark: dark,
        glow: glow
    }

    return currentThemeData
}

export const useSpecificThemeData = color => {
    const allThemeData = useSelector(selectAllThemeData)
    return allThemeData[color] 
}