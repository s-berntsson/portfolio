import React from "react";
import {Link} from "react-router-dom"
import triangle from "./triangle.svg"

const TriangleNav = () => {
    return (
        <nav>
            <Link to="/about">ABOUT</Link>
            <img src={triangle} alt="triangle" />
            <Link to="/art-gallery">ART GALLERY</Link>
            <Link to="/projects">PROJECTS</Link>
        </nav>
    )
}

export default TriangleNav