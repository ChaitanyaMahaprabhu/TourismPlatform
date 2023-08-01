import styles from "./Login.module.css";
import { useEffect, useState } from "react";
const Login = () => {
  const [gradient, setGradient] = useState(`rgb(${Math.random()*250+1}, ${Math.random()*250+1}, ${Math.random()*250+1}), rgb(${Math.random()*250+1}, ${Math.random()*250+1}, ${Math.random()*250+1})`);

  return (
    <div className={styles.loginEncompass}>
      <div className={styles.decor} style = {{background: `linear-gradient(60deg, pink, ${gradient})`}}>
        <img src = {require('../../assets/images/mountain.png')} className = {styles.mountain}/>
        <img src = {require('../../assets/images/forest.png')} className = {styles.forest}/>
      </div>

      <div className={styles.form}>
        <div className={styles.loginForm}>
            
        </div>
      </div>
    </div>
  );
};

export { Login };
