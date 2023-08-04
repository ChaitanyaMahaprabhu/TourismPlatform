import styles from "./CreateTour.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CreateTour = () => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    cost: 0,
    image: "",
  });

  const clickHandler = (e) => {
    setClicked(true);
    console.log(data);

    setTimeout(() => {
      alert(`Tour: ${data.title} - created!`);

      setClicked(false);

      setData({
        title: "",
        description: "",
        cost: 0,
        image: "",
      });
    }, 1000);
  };

  const changeHandler = (e) => {
    if (e.target.name === "cost") {
      setData((prev) => ({
        ...prev,
        [e.target.name]: parseInt(e.target.value, 10),
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <div className={styles.createTourEncompass}>
      <div className={styles.titleInput}>
        <input
          type="text"
          name="title"
          placeholder="Enter Tour Title"
          className={styles.title}
          onChange={changeHandler}
          value={data.title}
        ></input>
      </div>

      <div className={styles.imageInput}>
        <input
          type="file"
          accept="images/*"
          name="image"
          onChange={changeHandler}
          value={data.image}
        ></input>
      </div>

      <div className={styles.inputSection}>
        <textarea
          name="description"
          placeholder="Enter Tour Description"
          className={styles.description}
          onChange={changeHandler}
          value={data.description}
        ></textarea>

        <div className={styles.money}>
          <input
            type="number"
            className={styles.cost}
            style={{ color: "green", fontSize: "2rem" }}
            name="cost"
            onChange={changeHandler}
            value={data.cost}
          ></input>
          <h1 className={styles.dollar}>💰</h1>
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.submit}
          onClick={clickHandler}
          style={{
            borderRadius: `${clicked ? "5rem" : "1rem"}`,
            height: `${clicked ? "5rem" : "3rem"}`,
            width: `${clicked ? "5rem" : "15rem"}`,
            backgroundColor: `${clicked ? "green" : "white"}`,
            fontSize: `${clicked ? "2rem" : "1.5rem"}`,
          }}
        >
          {clicked ? "👍" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export { CreateTour };
