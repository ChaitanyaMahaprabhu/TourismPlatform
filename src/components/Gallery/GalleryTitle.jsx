import styles from "./GalleryTitle.module.css";
import {Link} from "react-router-dom";

const GalleryTitle = () => {
  return (
    <div className={styles.galleryTitleEncompass}>
      <h1 className={styles.heading}>Gallery</h1>
      <h1 className={styles.home}>
        <Link to="/">
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "2rem",
              color: "white",
              marginLeft: '1rem',
              marginTop: '1rem',
            }}
          >
            home
          </span>
        </Link>
      </h1>
    </div>
  );
};

export { GalleryTitle };
