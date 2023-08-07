import styles from "./TourDetails.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AYS } from "../AreYouSure/AYS";
import {UpdateTour} from "../AgentPage/UpdateTour";

const TourDetails = (props) => {
  const [img, setImg] = useState("");
  const [view, setView] = useState(false);
  const [remove, setRemove] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (remove) {
    }
  });

  useEffect(() => {
    const base64String = props.tour.image;

    const base64ToBlob = (base64String) => {
      const binaryString = atob(base64String);
      const length = binaryString.length;
      const bytes = new Uint8Array(length);

      for (let i = 0; i < length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      return new Blob([bytes], { type: "image/jpeg" }); // Change the MIME type accordingly.
    };

    const displayImageFromBlob = (blob) => {
      const imageUrl = URL.createObjectURL(blob);
      setImg(imageUrl);
    };

    const blob = base64ToBlob(base64String);

    displayImageFromBlob(blob);
  }, [props.image]);

  const cartHandler = (e) => {
    setView(false);
    toast("Tour added to cart!");
  };

  return (
    <>
      {update ? (
        <UpdateTour tour={props.tour} setUpdate = {setUpdate}/>
      ) : (
        <>
          {view && (
            <AYS
              setView={setView}
              setCommand={cartHandler}
              message="Add tour to cart?"
            />
          )}
          <div className={styles.tourDetailsEncompass}>
            <div className={styles.imageSection}>
              <img src={img} className={styles.image} />
            </div>
            <div className={styles.descriptionSection}>
              <h3 className={styles.heading} style = {{textTransform: "capitalize"}}>{props.tour.title}</h3>
              <h3 className={styles.heading} style = {{fontFamily: "Commissioner", fontSize: "2rem"}}>Organization - {props.tour.organization}</h3>
              <p className={styles.description}>{props.tour.description}</p>

              <h6 className={styles.cost}>{props.tour.cost} 💵</h6>
            </div>
            <div className={styles.buttonSection}>
              <button
                className="btn btn-success"
                style={{
                  width: "20rem",
                  fontSize: "1.5rem",
                  marginTop: "2rem",
                }}
                onClick={() => {
                  setView(true);
                }}
              >
                Add To Cart
              </button>
            </div>
            <ToastContainer />
          </div>
        </>
      )}
    </>
  );
};

export { TourDetails };
