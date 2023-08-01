import styles from "./Login.module.css";
import { useEffect, useState } from "react";
const Login = () => {
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
        <div
          className={styles.loginForm}
          //   style={{ background: `linear-gradient(60deg, pink, ${gradient})` }}
        >
          <div>
            <h1 className={styles.heading} style={{ marginTop: "4rem" }}>
              - Welcome Back - 
            </h1>
            <p className={styles.subheading}>
              To log in, please enter your username and password
            </p>
          </div>

          <div className={styles.userInput}>
            <form>
              <div class="mb-3 mt-3">
                <label for="username">Username</label>
                <input
                  type="username"
                  class="form-control"
                  id="username"
                  placeholder="Enter Username"
                  name="username"
                  style={{ width: "30rem" }}
                />
              </div>
              <div class="mb-3">
                <label for="pwd">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pwd"
                />
              </div>
              <label for="type">User Type</label>
              <select class="form-select" id="type" name="type">
                <option disabled selected></option>
                <option>Traveller</option>
                <option>Agent</option>
                <option>Admin</option>
              </select>
              <button
                type="submit"
                class="btn btn-dark"
                style={{ marginTop: "2rem", width: "20rem" }}
              >
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
                  <a href="#" className = {styles.links}>Register</a>
                </p>
                <p className={styles.heading} style={{ marginLeft: "1rem" }}>
                  <a href="#" className = {styles.links}>Home</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
