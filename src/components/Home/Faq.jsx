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
      <div className={styles.faqTitle}>
        <h1 className={styles.title}>Frequently Asked</h1>
        <h1 className={styles.title}>Questions.</h1>
      </div>

      <div className={styles.qa}>
        {data.questions.map((d, i) => (
          <div key={i}>
            <div
              className={styles.question}
              onClick={() => {
                data.setQuestions((prev) =>
                  prev.map((data, index) => {
                    return {
                      ...data,
                      status: !data.status,
                    };
                  })
                );
              }}
            >
              <h1>{d.question}</h1>
            </div>
            <div
              className={styles.answer}
              style={{ height: `${d.status ? "54%" : "0%"}` }}
            >
              <p>{d.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Faq };
