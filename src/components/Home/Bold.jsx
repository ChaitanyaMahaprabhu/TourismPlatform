import styles from "./Bold.module.css";
import { useState, useEffect } from "react";

const Bold = () => {
  const [image, setImage] = useState(Math.round(Math.random() * 9 + 1));

  return (
    <div className={styles.boldEncompass}>
      <img
        src={require(`../../assets/images/${image}.jpg`)}
        className={styles.coverImage}
      />

      <div className={styles.backdrop}>
        <div className={styles.navbar}>
          <h5 className={styles.logo}>
            <span className="material-symbols-outlined" style = {{fontSize: "3rem"}}>travel_explore</span>
          </h5>
          <div className={styles.options}>
            <h5 className={styles.logreg} style={{ marginRight: "1rem" }}>
              <span className="material-symbols-outlined" style = {{fontSize: "2rem"}}>login</span>
            </h5>
            <h5 className={styles.logreg}>
              <span className="material-symbols-outlined" style = {{fontSize: "2rem"}}>how_to_reg</span>
            </h5>
          </div>
        </div>

        <div className={styles.boldContent}>
          <div className={styles.textContent}>
            <h1 className={styles.normalText}>
              Create <span className={styles.specialText}>Memories</span>
            </h1>
            <h1 className={styles.normalText}>That Last A</h1>
            <h1 className={styles.normalText}>Lifetime</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Bold };
