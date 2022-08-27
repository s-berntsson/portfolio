import React, { useState } from "react";
import { Link } from "react-router-dom"
import triangle from "./triangle.svg"
import text from "./text.svg"
import styles from './TriangleNav.module.css'
import { useSelector } from "react-redux";
import { selectCurrentThemeData } from "../../features/themes/themesSlice";
import HoverRouterLink from "../../features/themes/HoverLink";

const TriangleNav = () => {
    const themeData = useSelector(selectCurrentThemeData)
    const { glow, light, dark } = themeData

    const colorGlow = {filter: `drop-shadow(0 0 .2rem ${glow})`}
    const whiteGlow = {filter: `drop-shadow(0 0 .2rem #fff)`}


    return (
        <nav className={styles.gridContainer}>
            <HoverRouterLink pathText="about" id={styles.about} className={styles.gridItem} themeData={themeData} colorGlow={colorGlow}/>
            <section className={styles.gridItem} id={styles.triangleText}>
                <img className={styles.triangle} src={triangle} alt="triangle" style={colorGlow}/>
                <img className={styles.text} src={text} style={whiteGlow} alt="Susanna Berntsson Portfolio" />
            </section>
            {/* Replace with HoverRouterLink after completing template */}
            <HoverRouterLink pathText="art-gallery" id={styles.artGallery} className={styles.gridItem} themeData={themeData} colorGlow={colorGlow}/>
            <HoverRouterLink pathText="projects" id={styles.projects} className={styles.gridItem} themeData={themeData} colorGlow={colorGlow}/>
        </nav>
    )
}

export default TriangleNav