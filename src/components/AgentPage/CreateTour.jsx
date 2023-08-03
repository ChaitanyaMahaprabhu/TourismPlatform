import styles from "./CreateTour.module.css";

const CreateTour = () => {
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
        <input type = "file" accept = "images/*"></input>
      </div>

      <div className={styles.inputSection}>
        <textarea
          name="description"
          placeholder="Enter Tour Description"
          className={styles.description}
        ></textarea>

        <div className={styles.money}>
          <input type="number" className={styles.cost}></input>
          <h1 className={styles.dollar}>💰</h1>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.submit}>Submit</button>
      </div>
    </div>
  );
};

export { CreateTour };
