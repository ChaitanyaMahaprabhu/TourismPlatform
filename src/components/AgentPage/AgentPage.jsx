import styles from "./AgentPage.module.css";
import { useEffect, useState } from "react";
import { CreateTour } from "./CreateTour";
import { AYS } from "../AreYouSure/AYS";
import { ViewTours } from "./ViewTours";
import { ToastContainer, toast } from "react-toastify";
import { Contact } from "../Footer/Contact";
import { Footer } from "../Footer/Footer";

const AgentPage = () => {
  const [view, setView] = useState(false);
  const [out, setOut] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    if (out === true) {
      window.location = "/";
    }
  }, [out]);

  useEffect(() => {
    if (top === true) {
      window.scrollTo(0, 0);
      setTop(false);
    }
  }, [top]);

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
          <ViewTours />
          <Contact />
          <Footer setTop={setTop} />
        </div>
      </div>
    </div>
  );
};

export { AgentPage };
