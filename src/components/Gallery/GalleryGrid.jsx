import styles from "./GalleryGrid.module.css";
import { Photo } from "./Photo";
import { context } from "../../context/SharedData";
import { useContext, useEffect, useState } from "react";

const GalleryGrid = () => {
  const sharedData = useContext(context);
  const [gallery, setGallery] = useState([]);
  const [images, setImages] = useState({});
  const [page, setPages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  });

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await fetch("https://localhost:7064/api/Galleries");
        if (response.ok) {
          const data = await response.json();
          setGallery(data);
          setImages(data[data.length - 1]);
        } else {
          console.error("Error fetching galleries:", response.statusText);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchGalleries();
  }, []);

  return (
    <div className={styles.galleryGridEncompass}>
      <Photo image={`data:image/jpeg;base64,${images.image1}`} />
      <Photo image={`data:image/jpeg;base64,${images.image2}`} />
      <Photo image={`data:image/jpeg;base64,${images.image3}`} />
      <Photo image={`data:image/jpeg;base64,${images.image4}`} />
      <Photo image={`data:image/jpeg;base64,${images.image5}`} />
    </div>
  );
};

export { GalleryGrid };
