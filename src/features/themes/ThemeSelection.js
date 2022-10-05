import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectCurrentTheme, selectAllThemeData, selectThemeKeys } from "./themesSlice";
import styles from "./ThemeSelection.module.css";
import ColorCircle from "./ColorCircle";
import lampSvg from "./lamp.svg"
import { useGlowEffect } from "./themeHooks";


const ThemeSelection = () => {

    const themeKeys = useSelector(selectThemeKeys)
    const [hidden, setHidden] = useState(true)

    const renderedCircles = themeKeys.map(key => {
        return (<ColorCircle color={key} className={styles.colorCircle} key={key} />)
    })

    // Handle hover effect  DET FUNKAR INTE FAAAAAN
    const [hover, setHover] = useState(false)
    const glowEffect = {filter: "drop-shadow(0 0 2rem white)"}
    const handleMouseEnter = () => { setHover(true) }
    const handleMouseLeave = () => { setHover(false) }

    const linkStyle = glowEffect

    linkStyle.filter = hover ? linkStyle.filter : "none"
    linkStyle.display = hover ? "none" : "block"


    const handleClick = (e) => {
        setHidden(!hidden)
        document.getElementById("container").classList.toggle(styles.hidden)
    }

    return (
        <div className={`${styles.container} ${styles.hidden}`} id="container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={lampSvg} onClick={handleClick} style={{linkStyle}} />
            {renderedCircles}
        </div>
    )
}

export default ThemeSelection