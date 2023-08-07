import React, { useContext, useEffect, useState } from "react";
import styles from "./ViewTours.module.css";
import { TourCard } from "../TourComponents/TourCard";
import { context } from "../../context/SharedData";
import { TourDetails } from "./TourDetails";

const ViewTours = (props) => {
  const [clicked, setClicked] = useState(false);
  const [rend, setRend] = useState();

  const create = (tour) => {
    setRend(<TourDetails tour={tour} agent = {props.agent}/>);
  };

  return (
    <>
      {clicked ? (
        rend
      ) : (
        <>
          <div className={styles.what} style={{ marginTop: "2rem" }}>
            <h1>Your Tour Plans</h1>
          </div>
          <div className={styles.viewToursEncompass}>
            {props.tours.map((d) => (
              <TourCard
                key={d.id}
                image={d.image}
                title={d.title}
                description={d.description}
                btn="Explore More"
                tour={d}
                create={create}
                setClicked = {setClicked}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export { ViewTours };
