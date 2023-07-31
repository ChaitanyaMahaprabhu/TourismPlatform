import styles from "./FaqCard.module.css";
const FaqCard = (props) => {
  
  const stars = "";
  for(let i = 0;i < props.stars;i++){
    stars += "⭐";
  }

  return (
      <div className={styles.cardBody}>
        <div className={styles.details}>
          <h1>{stars}</h1>
          <h1 className={styles.name} style={{ marginLeft: "0.3rem" }}>
            {props.name}
          </h1>
          <p className={styles.duration} style={{ marginLeft: "0.3rem" }}>
            {props.duration}
          </p>
        </div>

        <div className={styles.review}>
          <span class="material-symbols-outlined" style = {{fontSize: "4rem"}}>format_quote</span>
          <p className = {styles.words}>{props.review}</p>
        </div>
    </div>
  );
};

export { FaqCard };
