import styles from "./TourDetails.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const TourDetails = (props) => {
  const [img, setImg] = useState("");
  
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

  const deleteTour = async (id) => {
    try {
      const response = await fetch(`https://localhost:7064/api/Tours/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Tour data deleted successfully");
        toast("Tour data deleted successfully!");
      } else {
        console.error("Error deleting doctor:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = (e) => {
    deleteTour(props.tour.id);

    setTimeout(() => {window.location = `/AgentPage/${props.userName}`}, 1500);
  };

  return (
    <div className={styles.tourDetailsEncompass}>
      <div className={styles.imageSection}>
        <img
          src={img}
          className={styles.image}
        />
      </div>
      <div className={styles.descriptionSection}>
        <h3 className={styles.heading}>{props.tour.title}</h3>
        <p className={styles.description}>
          {props.tour.description}
        </p>

        <h6 className={styles.cost}>{props.tour.cost} 💵</h6>
      </div>
      <div className={styles.buttonSection}>
        <button className = "btn btn-warning" style = {{width: "20rem", fontSize: "1.5rem"}}>Edit This Tour</button>
        <button className = "btn btn-danger" style = {{width: "20rem", fontSize: "1.5rem", marginTop: '2rem'}} onClick = {deleteHandler}>Delete This Tour</button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export { TourDetails };
