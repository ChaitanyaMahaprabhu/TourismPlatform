import styles from "./Photo.module.css";

const Photo = (props) => {
  return (
    <div className={styles.photoEncompass}>
      <img
        className={styles.image}
        src={props.image}
      ></img>
      <div className={styles.backdrop}></div>
    </div>
  );
};

export { Photo };
