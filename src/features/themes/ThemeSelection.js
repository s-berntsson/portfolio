import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectThemeKeys } from "./themesSlice";
import styles from "./ThemeSelection.module.css";
import ColorCircle from "./ColorCircle";
import lampSvg from "./lamp.svg";

const ThemeSelection = () => {
    const themeKeys = useSelector(selectThemeKeys)
    const [hidden, setHidden] = useState(true)

    const renderedCircles = themeKeys.map(key => {
        return (<ColorCircle color={key} className={styles.colorCircle} key={key} />)
    })

    const handleClick = (e) => {
        setHidden(!hidden)
        document.getElementById("container").classList.toggle(styles.hidden)
    }

    return (
        <div className={`${styles.container} ${styles.hidden}`} id="container" >
            <img className={styles.lampSvg} src={lampSvg} onClick={handleClick} alt='lamp symbol' />
            {renderedCircles}
        </div>
    )
}

export default ThemeSelection