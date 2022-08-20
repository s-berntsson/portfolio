import React from "react";
import {Link} from "react-router-dom"
import triangle from "./triangle.svg"
import styles from './TriangleNav.module.css'

const TriangleNav = () => {
    return (
        <nav className={styles.gridContainer}>
            <Link className={styles.gridItem} id={styles.about} to="/about"><h4>ABOUT</h4></Link>
            <section className={styles.gridItem} id={styles.triangle}>
                {/*<img className={styles.triangleSvg} src={triangle} alt="triangle" />*/}
                <h2 className={styles.name}>
                    SUSANNA<br/>
                    &nbsp;&nbsp;BERNT<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;SSON
                </h2>
                <h1 className={styles.title}>
                    POR<br/>
                    TFO<br/>
                    &nbsp;LIO
                </h1>
            </section>
            <Link className={styles.gridItem} id={styles.artGallery} to="/art-gallery"><h4>ART GALLERY</h4></Link>
            <Link className={styles.gridItem} id={styles.projects} to="/projects"><h4>PROJECTS</h4></Link>
        </nav>
    )
}

export default TriangleNav