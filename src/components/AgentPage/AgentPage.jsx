import styles from "./AgentPage.module.css";
import { useEffect, useState } from "react";
import { CreateTour } from "./CreateTour";
import { AYS } from "../AreYouSure/AYS";
import { ToastContainer, toast } from "react-toastify";

const AgentPage = () => {
  const [view, setView] = useState(false);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (out === true) {
      window.location = "/";
    }
  }, [out]);

  return (
    <div className={styles.agentPageEncompass}>
      {view && <AYS message="Log Out?" setCommand={setOut} setView={setView} />}
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
              onClick={() => {
                setView(true);
              }}
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
        <div className={styles.top} style={{ backgroundColor: "black" }}></div>

        <div className={styles.tab}>
          <CreateTour />
        </div>
      </div>
    </div>
  );
};

export { AgentPage };
