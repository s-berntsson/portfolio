import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos, selectPhotoData, selectPhotoIds } from "../../features/photo-fetch/photosSlice";
import GlowingFrame from "../../features/themes/GlowingFrame";
import { useCurrentThemeData, useGlowEffect } from "../../features/themes/themeHooks";
import styles from "./ArtGallery.module.css"

const ArtGallery = () => {

    const dispatch = useDispatch()
    const headingStyle = useGlowEffect("glow")
    const {light} = useCurrentThemeData()
    headingStyle.color = light

    useEffect(() => { dispatch(loadPhotos()) }, [])

    const photos = useSelector(selectPhotoData)
    const ids = useSelector(selectPhotoIds)

    const renderedPhotos = ids.map(id => (<div className={styles.gridItem} style={{ backgroundImage: `url(${photos[id].imgUrl})` }} key={id} />))

    return (
        <div className={styles.artGallery}>
            <h2 style={headingStyle}>ART GALLERY</h2>
            < GlowingFrame className={styles.gridContainer} childElement={renderedPhotos} />
            
        </div>
    )
}

export default ArtGallery
