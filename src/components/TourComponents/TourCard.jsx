import { useEffect, useState } from "react";
import styles from "./TourCard.module.css";

const TourCard = (props) => {
  const [img, setImg] = useState("");

  useEffect(() => {
    const base64String = props.image;

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

  return (
    <div className={styles.tourCardEncompass}>
      <div className={styles.imageSection}>
        {img && <img src={img} className={styles.image} />} {/* Check if img is available before rendering */}
      </div>

      <div className={styles.detailsSection}>
        <h1 className={styles.titleText}>{props.title}</h1>
        <p className={styles.secondaryText}>{props.description}</p>

        <button className="btn btn-success mt-4" style={{ width: "10rem" }}>
          {props.btn}
        </button>
      </div>
    </div>
  );
};

export { TourCard };
