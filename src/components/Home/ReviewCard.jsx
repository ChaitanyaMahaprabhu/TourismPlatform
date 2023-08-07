import styles from "./ReviewCard.module.css";
const ReviewCard = (props) => {

  function getDaysDifference(isoDate1, isoDate2) {
    const date1 = new Date(isoDate1);
    const date2 = new Date(isoDate2);
  
    const differenceInMilliseconds = Math.abs(date1 - date2);
    const millisecondsInADay = 1000 * 60 * 60 * 24;
  
    const daysDifference = Math.floor(differenceInMilliseconds / millisecondsInADay);
    return daysDifference;
  }

  const current = new Date().toISOString();
  
  let stars = "";
  for(let i = 0;i < props.stars;i++){
    stars += "⭐";
  }

  return (
      <div className={styles.cardBody}>
        <div className={styles.details}>
          <h1>{stars}</h1>
          <h1 className={styles.name} style={{ marginLeft: "0.3rem" }}>
            {props.review}
          </h1>
          <p className={styles.duration} style={{ marginLeft: "0.3rem" }}>
            {getDaysDifference(props.duration, current)} days ago.
          </p>
        </div>
    </div>
  );
};

export { ReviewCard };
