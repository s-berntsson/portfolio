import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCurrentThemeData, useGlowEffect } from "./themeHooks";


const HoverLink = ({pathText, className, id}) => {
    // theme styling
    const {light, dark} = useCurrentThemeData()
    const colorGlow = useGlowEffect("glow")
    
    // Handle hover effect
    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => { setHover(true) }

    const handleMouseLeave = () => { setHover(false) }

    const linkStyle = {
        color: hover ? light : dark,
        filter: hover ? colorGlow : null
    }

    // adapt multiple word paths into display text
    const linkText = pathText.toUpperCase().replace('-', '<br/>')

    return (
        <Link to={`/${pathText}`} className={className} id={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={linkStyle}>
            <h4 dangerouslySetInnerHTML={{__html: linkText}}></h4>
        </Link>
    )
}

export default HoverLink