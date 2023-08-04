import styles from './Gallery.module.css';
import {GalleryTitle} from './GalleryTitle';
import {GalleryGrid} from './GalleryGrid';
import {Footer} from '../Footer/Footer';
import {Contact} from '../Footer/Contact';
import { useState, useEffect } from 'react';

const Gallery = () => {
    const [top, setTop] = useState(false);
    useEffect(() => {
        if(top == true){
            window.scrollTo(0, 0);
            setTop(false);
        }
    }, [top]);
    return(
        <div className={styles.galleryEncompass}>
            <GalleryTitle/>
            <GalleryGrid/>
            <Contact/>
            <Footer setTop = {setTop}/>
        </div>
    );
}

export {Gallery};