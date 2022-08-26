import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos, selectPhotoData, selectPhotoIds } from "../../features/photo-fetch/photosSlice";
import styles from "./ArtGallery.module.css"

const ArtGallery = () => {

    const dispatch = useDispatch()

    useEffect( () => { dispatch( loadPhotos() )}, [])

    const photos = useSelector(selectPhotoData)
    const ids = useSelector(selectPhotoIds)

    const renderedPhotos = ids.map(id => ( <div className={styles.gridItem} style={{backgroundImage: `url(${photos[id].imgUrl})`}} key={id} /> )) 

    return (
        <div className={styles.artGallery}> 
            <h1>ART GALLERY</h1> 
            <div className={styles.gridContainer}>
                {renderedPhotos}
            </div>
        </div>
    )
}

export default ArtGallery
