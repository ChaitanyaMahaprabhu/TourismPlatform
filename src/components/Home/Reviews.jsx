import { useContext, useEffect, useState } from "react";
import { context } from "../../context/SharedData";
import styles from "./Reviews.module.css";
import { dummyReviews } from "../../constants/constants";
import { ReviewCard } from "./ReviewCard";
const Reviews = () => {
  const data = useContext(context);
  const reviews = data.feedbacks;

  useEffect(() => {
    console.log(data.questions);
  });

  return (
    <div className={styles.faqEncompass}>
        {reviews.map((data) => (<ReviewCard stars = {data.rating} duration = {data.feedbackDate} review = {data.description}/>))}
    </div>
  );
};

export { Reviews };
