import styles from './GalleryGrid.module.css';
import {Photo} from './Photo';

const GalleryGrid = () => {
    return(
        <div className={styles.galleryGridEncompass}>
            <Photo image = {require('../../assets/images/4.jpg')}/>
            <Photo image = {require('../../assets/images/1.jpg')}/>
            <Photo image = {require('../../assets/images/3.jpg')}/>
            <Photo image = {require('../../assets/images/5.jpg')}/>
            <Photo image = {require('../../assets/images/6.jpg')}/>
            <Photo image = {require('../../assets/images/10.jpg')}/>
        </div>
    );
}

export {GalleryGrid};