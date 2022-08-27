import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectCurrentTheme, selectAllThemeData, selectThemeKeys } from "./themesSlice";
import styles from "./ThemeSelection.module.css";
import ColorCircle from "./ColorCircle";

const ThemeSelection = () => {

    const themeKeys = useSelector(selectThemeKeys)
    const [hidden, setHidden] = useState(true)

    const renderedCircles = themeKeys.map(key => {
        return(<ColorCircle color={key} className={styles.colorCircle} key={key}/>)
        })



    
    const handleClick = (e) => {
        setHidden(!hidden)
        document.getElementById("container").classList.toggle(styles.hidden)
    }

    return (
        <div className={`${styles.container} ${styles.hidden}`} id="container">
            <input type="button" onClick={handleClick} value={hidden ? "<" : ">"}></input>
            {renderedCircles}
        </div>
    )
}

export default ThemeSelection