import styles from "./TravellerRegistration.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const TravellerRegistration = () => {
  const [gradient, setGradient] = useState(
    `rgb(${Math.random() * 250 + 1}, ${Math.random() * 250 + 1}, ${
      Math.random() * 250 + 1
    }), rgb(${Math.random() * 250 + 1}, ${Math.random() * 250 + 1}, ${
      Math.random() * 250 + 1
    })`
  );

  const [pass, setPass] = useState("");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);
  let allTrue = false;

  if (
    uppercase == true &&
    lowercase == true &&
    number == true &&
    special == true
  ) {
    allTrue = true;
  }

  const u_pattern = /[A-Z]+/;
  const l_pattern = /[a-z]+/;
  const n_pattern = /[0-9]+/;
  const s_pattern = /[#$%^&@!()_=\-+]+/;

  const changeHandler = (e) => {
    setPass(e.target.value);
    console.log(e.target.value);

    setUppercase(u_pattern.test(e.target.value) ? true : false);
    setLowercase(l_pattern.test(e.target.value) ? true : false);
    setNumber(n_pattern.test(e.target.value) ? true : false);
    setSpecial(s_pattern.test(e.target.value) ? true : false);
  };

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
              - Hello Traveller -
            </h1>
            <p className={styles.subheading}>
              Please enter the details below to get registered
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
                  <label for="age">Age</label>
                  <input
                    type="number"
                    class="form-control"
                    id="age"
                    name="age"
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
                    onChange={changeHandler}
                    style={{
                      color: `${allTrue ? "green" : "red"}`,
                      border: `2px solid ${allTrue ? "green" : "red"}`,
                    }}
                    required
                  />
                  <label for="password" className={styles.pass}>
                    <span
                      style={{ color: `${uppercase ? "green" : "red"}` }}
                      id="uppercase"
                    >
                      A
                    </span>
                    <span
                      style={{ color: `${lowercase ? "green" : "red"}` }}
                      id="lowercase"
                    >
                      a
                    </span>
                    <span
                      style={{ color: `${number ? "green" : "red"}` }}
                      id="number"
                    >
                      0-9
                    </span>
                    <span
                      style={{ color: `${special ? "green" : "red"}` }}
                      id="special"
                    >
                      #
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-dark"
                style={{ marginTop: "1rem", width: "20rem" }}
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
                  <Link to="/Login">
                    <span style={{ color: "white" }}>Login</span>
                  </Link>
                </p>
                <p className={styles.heading} style={{ marginLeft: "1rem" }}>
                  <Link to="/">
                    <span style={{ color: "white" }}>Home</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TravellerRegistration };
