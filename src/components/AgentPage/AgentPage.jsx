import styles from "./AgentPage.module.css";
import { useState } from "react";

const AgentPage = () => {
  const [gradient, setGradient] = useState(
    `rgb(${Math.random() * 250 + 1}, ${Math.random() * 250 + 1}, ${
      Math.random() * 250 + 1
    }), rgb(${Math.random() * 250 + 1}, ${Math.random() * 250 + 1}, ${
      Math.random() * 250 + 1
    })`
  );

  return (
    <div className={styles.agentPageEncompass}>
      <div className={styles.agentNav}>
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

      <div className={styles.agentWorking}>
        <div
          className={styles.top}
          style={{ background: `linear-gradient(60deg, ${gradient})` }}
        >
          <img
            src={require("../../assets/images/mountain.png")}
            className={styles.decor}
          />
        </div>
      </div>
    </div>
  );
};

export { AgentPage };
