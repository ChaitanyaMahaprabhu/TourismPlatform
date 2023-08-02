import styles from "./AgentPage.module.css";
const AgentPage = () => {
  return (
    <div className={styles.agentPageEncompass}>
      <div className={styles.agentNav}>
        <div className={styles.mainOptions}>
          <h4 className={styles.options}>
            <span class="material-symbols-outlined" style = {{fontSize: "2rem"}}>edit</span>
          </h4>

          <h4 className={styles.options}>
            <span class="material-symbols-outlined" style = {{fontSize: "2rem"}}>edit_note</span>
          </h4>

          <h4 className={styles.options}>
            <span class="material-symbols-outlined" style = {{fontSize: "2rem"}}>search</span>
          </h4>
        </div>

        <div className={styles.subOptions}>
          <h4 className={styles.options}>
            <span class="material-symbols-outlined" style = {{fontSize: "2rem"}}>logout</span>
          </h4>

          <h4 className={styles.options}>
            <span class="material-symbols-outlined" style = {{fontSize: "2rem"}}>contact_support</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export { AgentPage };
