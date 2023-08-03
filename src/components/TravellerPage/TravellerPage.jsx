import styles from "./TravellerPage.module.css";
import { useState } from "react";

const TravellerPage = () => {

  return (
    <div className={styles.travellerPageEncompass}>
      <div className={styles.travellerNav}>
        <div className={styles.mainOptions}>
          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
            >
              edit
            </span>
          </h4>

          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
            >
              edit_note
            </span>
          </h4>

          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
            >
              search
            </span>
          </h4>
        </div>

        <div className={styles.subOptions}>
          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
            >
              logout
            </span>
          </h4>

          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
            >
              contact_support
            </span>
          </h4>
        </div>
      </div>

      <div className={styles.travellerWorking}>
        <div
          className={styles.top}
          style={{ backgroundColor: "black"}}
        >
        </div>

        <div className={styles.tab}>
        </div>
      </div>
    </div>
  );
};

export { TravellerPage };
