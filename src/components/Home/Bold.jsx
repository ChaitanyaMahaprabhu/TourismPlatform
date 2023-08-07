import styles from "./Bold.module.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/SharedData";

const Bold = (props) => {
  const sharedData = useContext(context);
  const travellersC = sharedData.travellers.length;
  const agentsC = sharedData.agents.length;
  const toursC = sharedData.tours.length;
  const feedbacksC = sharedData.feedbacks.length;

  const [image, setImage] = useState(Math.round(Math.random() * 9 + 1));
  const [users, setUsers] = useState(0);
  const [trips, setTrips] = useState(0);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      while (true) {
        let rndm = Math.round(Math.random() * 9 + 1);
        if (rndm != image) {
          setImage(rndm);
          break;
        }
      }
    }, 5000);
  }, [image]);

  useEffect(() => {
    setTimeout(() => {
      if (users < (travellersC+agentsC)) {setUsers(prev => (prev+2));}
      if (trips < toursC) {setTrips(prev => (prev + 2));}
      if (reviews < feedbacksC) {setReviews(prev => (prev+1));}
    }, 100);
  });

  return (
    <div className={styles.boldEncompass}>
      <img
        src={require(`../../assets/images/${image}.jpg`)}
        className={styles.coverImage}
      />

      <div className={styles.backdrop}>
        <div className={styles.navbar}>
          <h5 className={styles.logo}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "3rem" }}
            >
              travel_explore
            </span>
            <h5 className={styles.logo}>Make My Trip.</h5>
          </h5>
          <div className={styles.options}>
            <h5 className={styles.logreg}>
              <Link to="/Login" style={{ color: "white" }}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "2rem" }}
                >
                  login
                </span>
              </Link>
            </h5>
            <h5 className={styles.logreg}>
              <Link to="/Choice" style={{ color: "white" }}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "2rem" }}
                >
                  how_to_reg
                </span>
              </Link>
            </h5>
            <h5 className={styles.logreg} style = {{textAlign: "center", paddingTop: "0.5rem"}}>
              <Link to="/Gallery" style={{ color: "white"}}>
                <span class="material-symbols-outlined">photo_library</span>
              </Link>
            </h5>
          </div>
        </div>

        <div className={styles.boldContent}>
          <div className={styles.textContent}>
            <h1 className={styles.normalText}>
              Lifelong <span>Memories</span>,
            </h1>
            <h1 className={styles.normalText}>Just a few clicks away.</h1>
            <div style={{ display: "flex" }}>
              <h3
                className={styles.counter}
                style={{ backgroundColor: "white", color: "black" }}
              >
                +{users} Users 😁
              </h3>
              <h3
                className={styles.counter}
                style={{ backgroundColor: "white", color: "black" }}
              >
                +{trips} Trips 🌏
              </h3>
              <h3
                className={styles.counter}
                style={{ backgroundColor: "white", color: "black" }}
              >
                +{reviews} Reviews ⭐
              </h3>
            </div>
          </div>

          <div className={styles.moveDown}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "4rem" }}
              onClick={() => {
                props.setScroll(true);
              }}
            >
              expand_more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Bold };
