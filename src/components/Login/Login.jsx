import styles from "./Login.module.css";
import { useEffect, useState } from "react";
const Login = () => {
  const [image, setImage] = useState(Math.round(Math.random() * 9 + 1));

  useEffect(() => {
    setTimeout(() => {
      setImage(Math.round(Math.random() * 9 + 1));
    }, 10000);
  });

  return (
    <div className={styles.loginEncompass}>
      <div className={styles.decor}>
      </div>

      <div className={styles.form}></div>
    </div>
  );
};

export { Login };
