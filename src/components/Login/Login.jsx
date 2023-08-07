import styles from "./Login.module.css";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { context } from "../../context/SharedData";

const Login = () => {
  const sharedData = useContext(context);
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const [gradient, setGradient] = useState(
    `rgb(${Math.random() * 250 + 1}, ${Math.random() * 250 + 1}, ${
      Math.random() * 250 + 1
    }), rgb(${Math.random() * 250 + 1}, ${Math.random() * 250 + 1}, ${
      Math.random() * 250 + 1
    })`
  );

  const redirect = () => {
    window.location = `/${login.Role}Page/${login.UserName}`;
  };

  const [login, setLogin] = useState({
    UserName: "",
    Password: "",
    Role: "",
    UserEmail: "",
  });

  const clickHandler = (e) => {
    if (Object.values(login).includes("")) {
      toast("Enter all details 😐");
    } else if (pattern.test(login["UserEmail"]) === false) {
      toast("Check your email 👀");
    } else {
      console.log(login);
      post();
    }
  };

  const changeHandler = (e) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const post = () => {
    fetch("https://localhost:7064/api/Token1", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(login),
    })
      .then((res) => {
        return res;
      })
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          if (login.Role === "Agent") {
            let agent = sharedData.agents.filter(
              (d) => d.userName === login.UserName
            );

            if (agent[0].status === "true") {
              console.log(resp.status);
              alert("Logged in successfully!");
              redirect();
            } else {
              toast("Wait for the admin to authorize you");
            }
          } else {
            console.log(resp.status);
            alert("Logged in successfully!");
            redirect();
          }
        } else {
          toast("Wrong credentials entered! 😶");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
                  name="UserName"
                  style={{ width: "30rem" }}
                  onChange={changeHandler}
                />
              </div>
              <div class="mb-3">
                <label for="UserEmail">Email ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="UserEmail"
                  placeholder="Enter email ID"
                  name="UserEmail"
                  onChange={changeHandler}
                />
              </div>
              <div class="mb-3">
                <label for="pwd">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="Password"
                  onChange={changeHandler}
                />
              </div>
              <label for="type">User Type</label>
              <select
                class="form-select"
                id="type"
                name="Role"
                onChange={changeHandler}
              >
                <option disabled selected></option>
                <option value="Traveller">Traveller</option>
                <option value="Agent">Agent</option>
                <option value="Admin">Admin</option>
              </select>
              <button
                type="button"
                class="btn btn-dark"
                style={{ marginTop: "2rem", width: "20rem" }}
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
                  <Link to="/Choice" style={{ color: "white" }}>
                    Register
                  </Link>
                </p>
                <p className={styles.heading} style={{ marginLeft: "1rem" }}>
                  <Link to="/" style={{ color: "white" }}>
                    Home
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

export { Login };
