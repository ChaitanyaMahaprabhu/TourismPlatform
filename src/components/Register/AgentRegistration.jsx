import styles from "./AgentRegistration.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AgentRegistration = () => {
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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

  const passChangeHandler = (e) => {
    setPass(e.target.value);

    setUppercase(u_pattern.test(e.target.value) ? true : false);
    setLowercase(l_pattern.test(e.target.value) ? true : false);
    setNumber(n_pattern.test(e.target.value) ? true : false);
    setSpecial(s_pattern.test(e.target.value) ? true : false);
  };

  const [agentDetails, setAgentDetails] = useState({
    UserName: "",
    AgentName: "",
    Organization: "",
    City: "",
    IsApproved: "false",
    Email: "",
  });

  const changeHandler = (e) => {
    setAgentDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(agentDetails);
    if (Object.values(agentDetails).includes("")) {
      toast("Enter all the details 😐");
    } else if (!allTrue) {
      toast("Password should follow the constraints 🔑");
    } else if (pattern.test(agentDetails["Email"]) === false) {
      toast("Check your email 👀");
    } else {
      agentDetails.Password = pass;
      console.log(agentDetails);
      toast("Registration Successful! Wait for activation from admin's side. 😄");
    }
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
              - Hello There -
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
                    name="AgentName"
                    required
                    onChange={changeHandler}
                  />
                </div>
                <div class="mb-3">
                  <label for="organization">Organization</label>
                  <input
                    type="text"
                    class="form-control"
                    id="organization"
                    name="Organization"
                    onChange={changeHandler}
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
                    name="Email"
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="city">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    name="City"
                    onChange={changeHandler}
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
                    name="UserName"
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="Password"
                    onChange={passChangeHandler}
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
                type="button"
                class="btn btn-dark"
                style={{ marginTop: "1rem", width: "20rem" }}
                onClick={clickHandler}
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

      <ToastContainer />
    </div>
  );
};

export { AgentRegistration };
