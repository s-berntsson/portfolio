import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HoverRouterLink = ({pathText, themeData, colorGlow, className, id}) => {

    // Handle hover effect
    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => { setHover(true) }

    const handleMouseLeave = () => { setHover(false) }

    const linkStyle = {
        color: hover ? themeData.light : themeData.dark,
        filter: hover ? colorGlow : null
    }

    const linkText = pathText.toUpperCase().replace('-', '<br/>')

    // Element
    return (
        <NavLink to={`/${pathText}`} className={className} id={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={linkStyle}>
            <h4 dangerouslySetInnerHTML={{__html: linkText}}></h4>
        </NavLink>
    )
}

export default HoverRouterLink