import styles from "./TourCard.module.css";
const TourCard = (props) => {
  return (
    <div className={styles.tourCardEncompass}>
      <div className={styles.imageSection}>
        <img src={props.image} className={styles.image} />
      </div>

      <div className={styles.detailsSection}>
        <h1 className={styles.titleText}>{props.title}</h1>
        <p className={styles.secondaryText}>{props.description}</p>

        <button className="btn btn-success mt-4" style={{ width: "10rem" }}>
          {props.btn}
        </button>
      </div>
    </div>
  );
};

export { TourCard };
