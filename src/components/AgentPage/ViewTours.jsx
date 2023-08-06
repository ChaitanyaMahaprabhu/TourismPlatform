import styles from "./ViewTours.module.css";
import { TourCard } from "../TourComponents/TourCard";
import { context } from "../../context/SharedData";
import { useContext, useEffect, useState } from "react";


const ViewTours = (props) => {
  const sharedData = useContext(context);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    let t = [];
    for(let tour of sharedData.tours){
      if(tour.agentId === props.id){
        t.push(tour);
      }
    }
    setTours(t);
  }, []);

  return (
    <>
      <div className={styles.what} style = {{marginTop: "2rem"}}>
        <h1>Your Tour Plans</h1>
      </div>
      <div className={styles.viewToursEncompass}>
        {tours.map((d) => (<TourCard
          image={d.image}
          title={d.title}
          description={d.description}
          btn="Explore More"
        />))}
      </div>
    </>
  );
};

export { ViewTours };
