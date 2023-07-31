import styles from "./Bold.module.css";
import { useState, useEffect } from "react";

const Bold = () => {
  const [image, setImage] = useState(Math.round(Math.random() * 9 + 1));

  return (
    <div className={styles.boldEncompass}>
      <img
        src={require(`../../assets/images/${image}.jpg`)}
        className={styles.coverImage}
      />
    </div>
  );
};

export { Bold };
