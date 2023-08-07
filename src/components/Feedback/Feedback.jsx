import styles from "./Feedback.module.css";
import { useState } from "react";
const Feedback = () => {
  const [stars, setStars] = useState({
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [review, setReview] = useState("");

  const post = (feedback) => {
    fetch("https://localhost:7064/api/Feedbacks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(feedback),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickHandler = (e) => {
    let totalStars = Object.values(stars).reduce((total, data) => {
      if (data == true) return total + data;
      else return total;
    });

    let feedback = { description: review, rating: totalStars + 1 };

    post(feedback);
  };

  const changeHandler = (e) => {
    setReview(e.target.value);
  };

  return (
    <div className={styles.feedbackEncompass}>
      <div className={styles.title}>
        <h1 className={styles.heading}>Feedback.</h1>
        <h3 className={styles.subheading}>
          We value your opinion. Please share what you feel.
        </h3>
      </div>

      <div className={styles.form}>
        <div className={styles.stars}>
          <h1
            className={styles.star}
            onClick={() => {
              setStars((prev) => ({
                2: false,
                3: false,
                4: false,
                5: false,
              }));
            }}
          >
            ⭐
          </h1>
          <h1
            className={styles.star}
            onClick={() => {
              setStars((prev) => ({
                2: !prev[2],
                3: false,
                4: false,
                5: false,
              }));
            }}
            style={{ opacity: `${stars[2] ? "1" : "0.3"}` }}
          >
            ⭐
          </h1>
          <h1
            className={styles.star}
            onClick={() => {
              setStars((prev) => ({
                2: !prev[3],
                3: !prev[3],
                4: false,
                5: false,
              }));
            }}
            style={{ opacity: `${stars[3] ? "1" : "0.3"}` }}
          >
            ⭐
          </h1>
          <h1
            className={styles.star}
            onClick={() => {
              setStars((prev) => ({
                2: !prev[4],
                3: !prev[4],
                4: !prev[4],
                5: false,
              }));
            }}
            style={{ opacity: `${stars[4] ? "1" : "0.3"}` }}
          >
            ⭐
          </h1>
          <h1
            className={styles.star}
            onClick={() => {
              setStars((prev) => ({
                2: !prev[5],
                3: !prev[5],
                4: !prev[5],
                5: !prev[5],
              }));
            }}
            style={{ opacity: `${stars[5] ? "1" : "0.3"}` }}
          >
            ⭐
          </h1>
        </div>

        <div className={styles.review}>
          <textarea
            className="form-control"
            rows="5"
            id="description"
            name="description"
            style={{ height: "15rem" }}
            onChange={changeHandler}
          ></textarea>
        </div>

        <div className={styles.submit}>
          <h3 className={styles.send} onClick={clickHandler}>
            Send
          </h3>
        </div>
      </div>
    </div>
  );
};

export { Feedback };
