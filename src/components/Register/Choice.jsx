import { useEffect, useState } from "react";
import styles from "./Choice.module.css";
const Choice = () => {
  const [hover, setHover] = useState({
    traveller: false,
    agent: false,
  });

  useEffect(() => {
    console.log(hover);
  }, [hover]);

  return (
    <div className={styles.choiceEncompass}>
      <div className={styles.heading}>
        <h1 className={styles.main} style={{ mixBlendMode: "difference" }}>
          Let's get you registered
        </h1>
        <h4
          className={styles.subheading}
          style={{ mixBlendMode: "difference" }}
        >
          Choose one of the options below
        </h4>
      </div>

      <div className={styles.choices}>
        <div className={styles.traveller}>
          <h1
            className={styles.main}
            onMouseOver={() => {
              setHover((prev) => ({ ...prev, traveller: true }));
            }}
            onMouseOut={() => {
              setHover((prev) => ({ ...prev, traveller: false }));
            }}
            style={{
              transform: `translateY(${hover.traveller ? "-2rem" : "0rem"})`,
            }}
          >
            Traveller
          </h1>
        </div>

        <div className={styles.agent}>
          <h1
            className={styles.main}
            onMouseOver={() => {
              setHover((prev) => ({ ...prev, agent: true }));
            }}
            onMouseOut={() => {
              setHover((prev) => ({ ...prev, agent: false }));
            }}
            style={{
              transform: `translateY(${hover.agent ? "-2rem" : "0rem"})`,
            }}
          >
            Agent
          </h1>
        </div>
      </div>
    </div>
  );
};

export { Choice };
