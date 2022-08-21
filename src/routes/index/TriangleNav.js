import React from "react";
import { Link } from "react-router-dom"
import triangle from "./triangle.svg"
import text from "./text.svg"
import styles from './TriangleNav.module.css'

const TriangleNav = () => {
    return (
        <nav className={styles.gridContainer}>
            <Link className={styles.gridItem} id={styles.about} to="/about"><h4>ABOUT</h4></Link>
            <section className={styles.gridItem} id={styles.triangleText}>
                <img className={styles.triangle} src={triangle} alt="triangle" />
                <img className={styles.text} src={text} alt="Susanna Berntsson Portfolio" />
            </section>
            <Link className={styles.gridItem} id={styles.artGallery} to="/art-gallery"><h4>ART<br/>GALLERY</h4></Link>
            <Link className={styles.gridItem} id={styles.projects} to="/projects"><h4>PROJECTS</h4></Link>
        </nav>
    )
}

export default TriangleNav