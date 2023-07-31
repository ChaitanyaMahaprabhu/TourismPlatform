import { useContext, useEffect, useState } from "react";
import { context } from "../../context/SharedData";
import styles from "./Reviews.module.css";
import { dummyReviews } from "../../constants/constants";
import { ReviewCard } from "./ReviewCard";
const Reviews = () => {
  const data = useContext(context);
  useEffect(() => {
    console.log(data.questions);
  });

  return (
    <div className={styles.faqEncompass}>
        {dummyReviews.map((data) => (<ReviewCard name = {data.name} stars = {data.stars} duration = {data.duration} review = {data.review}/>))}
    </div>
  );
};

export { Reviews };
