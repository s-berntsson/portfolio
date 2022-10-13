import { CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos, selectPhotoData, selectPhotoIds, selectPhotosStatus } from "../../features/photo-fetch/photosSlice";
import GlowingFrame from "../../features/themes/GlowingFrame";
import { useCurrentThemeData, useGlowEffect } from "../../features/themes/themeHooks";
import styles from "./ArtGallery.module.css"

const ArtGallery = () => {
    const dispatch = useDispatch();
    const success = useSelector(selectPhotosStatus) === 'succeeded';
    const { light } = useCurrentThemeData();
    const headingStyle = useGlowEffect("glow");
    headingStyle.color = light;

    const loadingColor = createTheme({
        palette: {
            primary: {
                main: light,
            },
        },
    });

    const loadingIcon = (
        <div className={styles.loading} style={useGlowEffect('glow')}>
            < ThemeProvider theme={loadingColor} >
                < CircularProgress />
            </ ThemeProvider>
        </div>
    );

    useEffect(() => { dispatch(loadPhotos()) }, []);

    const photos = useSelector(selectPhotoData);
    const ids = useSelector(selectPhotoIds);

    const renderedPhotos = ids.map(id => (<div className={styles.gridItem} style={{ backgroundImage: `url(${photos[id].url})` }} key={id} />))

    return (
        <div className={styles.artGallery}>
            <h2 style={headingStyle}>ART GALLERY</h2>
            < GlowingFrame className={styles.gridContainer} childElement={success ? renderedPhotos : loadingIcon} />
        </div>
    )
}

export default ArtGallery
