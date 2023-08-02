import { useEffect, useState } from "react";
import styles from "./Choice.module.css";
import { Link } from "react-router-dom";

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
        <h1 className={styles.home}>
          <Link to="/">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "2rem", mixBlendMode: "difference", color: "white"}}
            >
              home
            </span>
          </Link>
        </h1>
      </div>

      <div className={styles.choices}>
        <div className={styles.traveller}>
          <Link to="/TravellerRegistration">
            <h1
              className={styles.main}
              onMouseOver={() => {
                setHover((prev) => ({ ...prev, traveller: true }));
              }}
              onMouseOut={() => {
                setHover((prev) => ({ ...prev, traveller: false }));
              }}
              style={{
                transform: `translateY(${hover.traveller ? "-1rem" : "0rem"})`,
              }}
            >
              Traveller
            </h1>
          </Link>
        </div>

        <div className={styles.agent}>
          <Link to="/AgentRegistration">
            <h1
              className={styles.main}
              onMouseOver={() => {
                setHover((prev) => ({ ...prev, agent: true }));
              }}
              onMouseOut={() => {
                setHover((prev) => ({ ...prev, agent: false }));
              }}
              style={{
                transform: `translateY(${hover.agent ? "-1rem" : "0rem"})`,
              }}
            >
              Agent
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Choice };
