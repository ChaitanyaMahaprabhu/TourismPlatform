import styles from "./CreateTour.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTour = (props) => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    cost: 0,
    image: "",
    city: "",
    organization: props.org,
    agentId: props.id,
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        const fileData = event.target.result;
        const byteArray = new Uint8Array(fileData);
        const base64String = btoa(
          String.fromCharCode.apply(null, byteArray)
        );
        setData((prev) => ({
          ...prev,
          image: base64String,
        }));
      };

      fileReader.readAsArrayBuffer(file);
    }
  };

  const clickHandler = (e) => {
    if (Object.values(data).some((value) => value === "")) {
      console.log(data);
      toast("Fill in all the fields.");
    } else {
      post();
      setClicked(true);
      setTimeout(() => {
        toast(`Tour: ${data.title} - created! ✨`);
        setClicked(false);
        setData({
          title: "",
          description: "",
          cost: 0,
          image: "",
          city: "",
          organization: props.org,
          agentId: props.id,
        });
      }, 1000);
    }
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

  const post = () => {
    fetch("https://localhost:7064/api/Tours", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.createTourEncompass}>
      <div className={styles.what}>
        <h1>New Tour Plan</h1>
      </div>
      <div className={styles.titleInput}>
        <input
          type="text"
          name="title"
          placeholder="Enter Tour Title"
          className={styles.title}
          onChange={changeHandler}
          value={data.title}
        />
      </div>

      <div className={styles.titleInput}>
        <input
          type="text"
          name="city"
          placeholder="Enter Name Of City"
          className={styles.title}
          onChange={changeHandler}
          value={data.city}
          style={{ width: "22rem" }}
        />
      </div>

      <div className={styles.imageInput}>
        <input
          type="file"
          accept="images/*"
          name="image"
          onChange={handleImageChange}
        />
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
          />
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
      <ToastContainer />
    </div>
  );
};

export { CreateTour };
