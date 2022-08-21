import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentTheme, selectAllThemeData, selectThemeKeys } from "./themesSlice";

import styles from "./ThemeSelection.module.css";

import ColorCircle from "./ColorCircle";



const ThemeSelection = () => {

    const currentTheme = useSelector(selectCurrentTheme)
    const themes = useSelector(selectAllThemeData)
    const themeKeys = useSelector(selectThemeKeys)

    const devColor = "red"

    function renderCircles() {themeKeys.map(key => {
            return (
                <ColorCircle color={key} themeData={themes[key]} />
            )
        })
    }

    const handleClick = () => {
        console.log(themeKeys)
    }

    return (
        <div onClick={handleClick}>
            <ColorCircle color={devColor} className={styles.colorCircle} themeData={themes[devColor]} currentTheme={currentTheme} />
        </div>
    )
}

export default ThemeSelection