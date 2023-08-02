import styles from "./Bold.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Bold = () => {
  const [image, setImage] = useState(Math.round(Math.random() * 9 + 1));

  useEffect(() => {
    setTimeout(() => {
      while (true) {
        let rndm = Math.round(Math.random() * 9 + 1);
        if (rndm != image) {
          setImage(rndm);
          break;
        }
      }
    }, 3000);
  });

  return (
    <div className={styles.boldEncompass}>
      <img
        src={require(`../../assets/images/${image}.jpg`)}
        className={styles.coverImage}
      />

      <div className={styles.backdrop}>
        <div className={styles.navbar}>
          <h5 className={styles.logo}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "3rem" }}
            >
              travel_explore
            </span>
            <h5 className={styles.logo}>Make My Trip.</h5>
          </h5>
          <div className={styles.options}>
            <h5 className={styles.logreg} style={{ marginRight: "1rem" }}>
              <Link to="/Login">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "2rem" }}
                >
                  login
                </span>
              </Link>
            </h5>
            <h5 className={styles.logreg}>
              <Link to="/Choice">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "2rem" }}
                >
                  how_to_reg
                </span>
              </Link>
            </h5>
          </div>
        </div>

        <div className={styles.boldContent}>
          <div className={styles.textContent}>
            <h1 className={styles.normalText}>
              Lifelong <span>Memories</span>,
            </h1>
            <h1 className={styles.normalText}>Just a few clicks away.</h1>
          </div>

          <div className={styles.moveDown}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "4rem" }}
            >
              expand_more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Bold };
