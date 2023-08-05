import styles from "./TourDetails.module.css";
const TourDetails = (props) => {
  return (
    <div className={styles.tourDetailsEncompass}>
      <div className={styles.imageSection}>
        <img
          src={require("../../assets/images/3.jpg")}
          className={styles.image}
        />
      </div>
      <div className={styles.descriptionSection}>
        <h3 className={styles.heading}>Lorem Ipsum</h3>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <h6 className={styles.cost}>2000 💵</h6>
      </div>
      <div className={styles.buttonSection}>
        <button className = "btn btn-warning" style = {{width: "20rem", fontSize: "1.5rem"}}>Edit This Tour</button>
      </div>
    </div>
  );
};

export { TourDetails };
