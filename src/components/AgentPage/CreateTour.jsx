import styles from "./CreateTour.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreateTour = () => {
  const [clicked, setClicked] = useState(false);
  
  return (
    <div className={styles.createTourEncompass}>
      <div className={styles.titleInput}>
        <input
          type="text"
          name="title"
          placeholder="Enter Tour Title"
          className={styles.title}
        ></input>
      </div>

      <div className={styles.imageInput}>
        <input type="file" accept="images/*"></input>
      </div>

      <div className={styles.inputSection}>
        <textarea
          name="description"
          placeholder="Enter Tour Description"
          className={styles.description}
        ></textarea>

        <div className={styles.money}>
          <input
            type="number"
            className={styles.cost}
            style={{ color: "green", fontSize: "2rem" }}
          ></input>
          <h1 className={styles.dollar}>💰</h1>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.submit} onClick={() => {setClicked(true)}} style = {{borderRadius: `${clicked && "5rem"}`, height: `${clicked && "5rem"}`, width: `${clicked && "5rem"}`, backgroundColor: `${clicked && "green"}`, fontSize: `${clicked && "2rem"}`}}>
          {clicked ? "✔" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export { CreateTour };
