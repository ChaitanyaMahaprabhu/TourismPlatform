import styles from "./AgentRegistration.module.css";
import { useState } from "react";

const AgentRegistration = () => {
  const [gradient, setGradient] = useState(
    `rgb(${Math.random() * 250 + 1}, ${Math.random() * 250 + 1}, ${
      Math.random() * 250 + 1
    }), rgb(${Math.random() * 250 + 1}, ${Math.random() * 250 + 1}, ${
      Math.random() * 250 + 1
    })`
  );

  return (
    <div className={styles.loginEncompass}>
      <div
        className={styles.decor}
        style={{ background: `linear-gradient(60deg, ${gradient})` }}
      >
        <img
          src={require("../../assets/images/mountain.png")}
          className={styles.mountain}
        />
        <img
          src={require("../../assets/images/forest.png")}
          className={styles.forest}
        />
      </div>

      <div className={styles.form}>
        <div className={styles.loginForm}>
          <div>
            <h1 className={styles.heading} style={{ marginTop: "4rem" }}>
              - Hello There -
            </h1>
            <p className={styles.subheading}>
              Please enter the details below to get started
            </p>
          </div>

          <div className={styles.userInput}>
            <form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "30rem",
                }}
              >
                <div>
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="organization">Organization</label>
                  <input
                    type="text"
                    class="form-control"
                    id="organization"
                    name="organization"
                    required
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "30rem",
                }}
              >
                <div>
                  <label for="email">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="city">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    name="city"
                    required
                  />
                </div>
              </div>
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "30rem",
                }}
              >
                <div>
                  <label for="username">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    name="username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
              </div>

              <button type="submit" class="btn btn-dark" style = {{marginTop: "1rem", width: "20rem"}}>
                Submit
              </button>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: "1rem",
                }}
              >
                <p className={styles.heading} style={{ marginRight: "1rem" }}>
                  <a href="#" className={styles.links}>
                    Login
                  </a>
                </p>
                <p className={styles.heading} style={{ marginLeft: "1rem" }}>
                  <a href="#" className={styles.links}>
                    Home
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AgentRegistration };
