import styles from './GalleryTitle.module.css';

const GalleryTitle = () => {
    return(
        <div className = {styles.galleryTitleEncompass}>
            <h1 className={styles.heading}>Gallery</h1>
        </div>
    );
}

export {GalleryTitle};