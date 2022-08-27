import React from "react";
import { useCurrentThemeData } from "./themeHooks";

const GlowingFrame = ({childElement, className}) => {
    const {light, glow} = useCurrentThemeData()

    const style = {
        border: `.2rem ${light} solid`,
        borderRadius: ".3rem",
        //have to use outset+inset box-shadow instead of drop-shadow, otherwise the grid items get the glow effect as well
        boxShadow: `0 0 .3rem .1rem ${glow}80, inset 0 0 .3rem .1rem ${glow}80`
    }

    return <div style={style} className={className}> {childElement} </div>
}

export default GlowingFrame