import styles from "./ReviewCard.module.css";
const ReviewCard = (props) => {
  
  let stars = "";
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
            {props.duration} months ago.
          </p>
        </div>
    </div>
  );
};

export { ReviewCard };
