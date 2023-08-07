import React, { useContext, useEffect } from "react";
import styles from "./AdminPage.module.css";
import { useParams } from "react-router-dom";
import { context } from "../../context/SharedData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const AdminPage = (props) => {
  const { name } = useParams();
  const sharedData = useContext(context);
  const [agents, setAgents] = useState(sharedData.agents);

  useEffect(() => {
    console.log(agents);
  }, [agents]);

  useEffect(() => {
    setAgents(sharedData.agents);
  })

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

  return (
    <div className={styles.adminPageEncompass}>
      <div className={styles.title}>
        <h1 className={styles.heading}>Hello {name}! 👋</h1>
        <p className={styles.subheading}>
          You can activate tour agents and add or remove images for the gallery.
        </p>
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
                    fontSize: "1.5rem"
                  }}
                >
                  {agent.status === "true" ? "👍" : "❗"}
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {updateTourDetails(agent.id, agent)}}
                  >
                    Toggle Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer/>
    </div>
  );
};

export { AdminPage };
