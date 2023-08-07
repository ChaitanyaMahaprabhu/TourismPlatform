import React, { useContext, useEffect } from "react";
import styles from "./AdminPage.module.css";
import { useParams } from "react-router-dom";
import { context } from "../../context/SharedData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Footer } from "../Footer/Footer";

const AdminPage = (props) => {
  const { name } = useParams();
  const sharedData = useContext(context);
  const [agents, setAgents] = useState(sharedData.agents);
  const [top, setTop] = useState(false);
  const [images, setImages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  });

  useEffect(() => {
    if (top === true) {
      window.scrollTo(0, 0);
      setTop(false);
    }
  }, [top]);

  useEffect(() => {
    console.log(agents);
  }, [agents]);

  useEffect(() => {
    setAgents(sharedData.agents);
  });

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        const fileData = event.target.result;
        const byteArray = new Uint8Array(fileData);
        const base64String = btoa(String.fromCharCode.apply(null, byteArray));
        setImages((prev) => ({
          ...prev,
          [e.target.name]: base64String,
        }));
      };

      fileReader.readAsArrayBuffer(file);
    }
  };

  const updateTourDetails = async (id, agent) => {
    try {
      const response = await fetch(`https://localhost:7064/api/Agents/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: agent.id,
          userName: agent.userName,
          name: agent.name,
          organization: agent.organization,
          city: agent.city,
          status: agent.status === "true" ? "false" : "true",
          age: agent.age,
        }),
      });
      if (response.ok) {
        window.location.reload();
        console.log("Agent data updated successfully");
        toast("Agent data updated successfully!");
        console.log(agent);
      } else {
        console.error("Error updating tour data:", response.statusText);
        console.log(agent);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const post = () => {
    fetch("https://localhost:7064/api/Galleries", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(images),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const imageHandler = (e) => {
    post();
    console.log(images);
  };

  return (
    <div className={styles.adminPageEncompass}>
      <div className={styles.title}>
        <h1 className={styles.heading} style={{ textTransform: "capitalize" }}>
          Hello {name}! 👋
        </h1>
        <p className={styles.subheading}>
          You can activate tour agents and add or remove images for the gallery.
        </p>
      </div>

      <div>
        <h1
          className={styles.heading}
          style={{
            textAlign: "center",
            padding: "1rem",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Activate Travel Agents
        </h1>
      </div>
      <div className={styles.agents}>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Organization</th>
              <th>Username</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent.id}>
                <td>{agent.id}</td>
                <td>{agent.name}</td>
                <td>{agent.age}</td>
                <td>{agent.city}</td>
                <td>{agent.organization}</td>
                <td>{agent.userName}</td>
                <td
                  style={{
                    backgroundColor: `${
                      agent.status === "true" ? "green" : "yellow"
                    }`,
                    fontSize: "1.5rem",
                  }}
                >
                  {agent.status === "true" ? "👍" : "❗"}
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      updateTourDetails(agent.id, agent);
                    }}
                  >
                    Toggle Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h1
          className={styles.heading}
          style={{
            textAlign: "center",
            padding: "1rem",
            backgroundColor: "black",
            color: "white",
            marginTop: "0.5rem",
          }}
        >
          Add Gallery Images
        </h1>
      </div>
      <div className={styles.images}>
        <div className={styles.image}>
          <input
            type="file"
            accept="image/*"
            name="image1"
            onChange={changeHandler}
          ></input>
        </div>
        <div className={styles.image}>
          <input
            type="file"
            accept="image/*"
            name="image2"
            onChange={changeHandler}
          ></input>
        </div>
        <div className={styles.image}>
          <input
            type="file"
            accept="image/*"
            name="image3"
            onChange={changeHandler}
          ></input>
        </div>
        <div className={styles.image}>
          <input
            type="file"
            accept="image/*"
            name="image4"
            onChange={changeHandler}
          ></input>
        </div>
        <div className={styles.image}>
          <input
            type="file"
            accept="image/*"
            name="image5"
            onChange={changeHandler}
          ></input>
        </div>

        <button className="btn btn-success" onClick={imageHandler}>
          Update
        </button>
      </div>
      <Footer setTop={setTop} />
      <ToastContainer />
    </div>
  );
};

export { AdminPage };
