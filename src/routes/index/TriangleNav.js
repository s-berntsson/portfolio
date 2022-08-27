import React from "react";
import triangle from "./triangle.svg"
import text from "./text.svg"
import styles from './TriangleNav.module.css'
import HoverLink from "../../features/themes/HoverLink";
import { useGlowEffect } from "../../features/themes/themeHooks";

const TriangleNav = () => {
    const colorGlow = useGlowEffect("glow")
    const whiteGlow = useGlowEffect("white")

    return (
        <nav className={styles.gridContainer}>
            <HoverLink pathText="about" displayText="ABOUT" id={styles.about} className={styles.gridItem} />
            <section className={styles.gridItem} id={styles.triangleText}>
                <img className={styles.triangle} src={triangle} alt="triangle" style={colorGlow}/>
                <img className={styles.text} src={text} style={whiteGlow} alt="Susanna Berntsson Portfolio" />
            </section>
            <HoverLink pathText="art-gallery" displayText={<div>ART<br/>GALLERY</div>} id={styles.artGallery} className={styles.gridItem} />
            <HoverLink pathText="projects" displayText="PROJECTS" id={styles.projects} className={styles.gridItem} />
        </nav>
    )
}

export default TriangleNav