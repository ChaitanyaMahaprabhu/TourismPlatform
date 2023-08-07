import styles from "./UpdateTour.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { context } from "../../context/SharedData";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const UpdateTour = (props) => {
  const [clicked, setClicked] = useState(false);
  const { name } = useParams();
  const sharedData = useContext(context);
  const [id, setId] = useState();

  useEffect(() => {
    for (let agen of sharedData.agents) {
      if (agen.userName === name) {
        setId(agen.id);
        console.log(agen);
      }
    }
  });

  const [data, setData] = useState({
    title: props.tour.title,
    description: props.tour.description,
    cost: props.tour.cost,
    image: props.tour.image,
    city: props.tour.city,
    organization: props.tour.organization,
    agentId: props.tour.agentId,
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        const fileData = event.target.result;
        const byteArray = new Uint8Array(fileData);
        const base64String = btoa(String.fromCharCode.apply(null, byteArray));
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
      console.log(data);
      updateTourDetails(props.tour.id);
      setClicked(true);
      setTimeout(() => {
        toast(`Tour: ${data.title} - updated! ✨`);
        setClicked(false);
        setTimeout(() => {
          props.setUpdate(false);
          window.location.reload();
        }, 1500);
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

  const updateTourDetails = async (id) => {
    try {
      const response = await fetch(`https://localhost:7064/api/Tours/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Tour data updated successfully");
        toast("Tour data updated successfully!");
        console.log(data);
      } else {
        console.error("Error updating tour data:", response.statusText);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.updateTourEncompass}>
      <div className={styles.what}>
        <h1>Update Tour Plan</h1>
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
          {clicked ? "👍" : "Update"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export {UpdateTour};