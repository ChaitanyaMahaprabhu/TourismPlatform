import styles from "./Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clickHandler = (e) => {
    console.log(details);
    setDetails({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.contactEncompass}>
      <div className={styles.heading}>
        <span
          class="material-symbols-outlined"
          style={{ color: "white", fontSize: "20rem" }}
        >
          connect_without_contact
        </span>
      </div>

      <div className={styles.details}>
        <h1 className={styles.mainText}>Contact.</h1>
        <p className={styles.subText}>
          <span
            class="material-symbols-outlined"
            style={{ verticalAlign: "text-bottom" }}
          >
            mail
          </span>{" "}
          <a href="mailto:chaitanya.kanini@gmail.com">
            chaitanya.kanini@gmail.com
          </a>
        </p>
        <p className={styles.subText}>
          <span
            class="material-symbols-outlined"
            style={{ verticalAlign: "text-bottom" }}
          >
            location_on
          </span>{" "}
          Kanini, Chennai
        </p>
        <p className={styles.subText}>
          <span
            className="material-symbols-outlined"
            style={{ verticalAlign: "text-bottom" }}
          >
            call
          </span>{" "}
          <a href="tel:6360010830">6360010830</a>
        </p>
      </div>

      <div className={styles.contact}>
        <h1 className={styles.mainText} style={{ color: "white" }}>
          Electronic Mail.
        </h1>
        <div className={styles.input}>
          <p className={styles.subText} style={{ color: "white" }}>
            Name
          </p>
          <input
            type="text"
            className={styles.textField}
            name="name"
            onChange={changeHandler}
            value={details.name}
          ></input>
        </div>

        <div className={styles.input}>
          <p className={styles.subText} style={{ color: "white" }}>
            Email
          </p>
          <input
            type="email"
            className={styles.textField}
            name="email"
            onChange={changeHandler}
            value={details.email}
          ></input>
        </div>

        <div className={styles.input}>
          <p className={styles.subText} style={{ color: "white" }}>
            Mesg
          </p>
          <textarea
            className={styles.textField}
            name="message"
            onChange={changeHandler}
            value={details.message}
          ></textarea>
        </div>

        <button className={styles.btn} onClick={clickHandler}>
          📧
        </button>
      </div>
    </div>
  );
};

export { Contact };
