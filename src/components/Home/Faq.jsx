import { useContext, useEffect, useState } from "react";
import { context } from "../../context/SharedData";
import styles from "./Faq.module.css";
const Faq = () => {
  const data = useContext(context);
  useEffect(() => {
    console.log(data.questions);
  });

  return (
    <div className={styles.faqEncompass}>

    </div>
  );
};

export { Faq };
