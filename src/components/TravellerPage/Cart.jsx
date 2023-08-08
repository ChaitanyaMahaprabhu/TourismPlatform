import styles from "./Cart.module.css";
import { useState, useEffect, useRef } from "react";
import { Footer } from "../Footer/Footer";
import { Contact } from "../Footer/Contact";
import { Feedback } from "../Feedback/Feedback";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactToPrint from "react-to-print";

const CartTitle = () => {
  return (
    <div className={styles.cartTitle}>
      <h1 className={styles.heading}>Your Cart.</h1>
      <p className={styles.subheading}>
        Look through the selected tours and click on pay when ready.
      </p>
    </div>
  );
};

const CartCard = (props) => {
  return (
    <div className={styles.cartCard}>
      <h1 className={styles.cardHeading}>{props.item}</h1>
      <h1 className={styles.cardCost}>₹ {props.cost}</h1>
    </div>
  );
};

const Bill = (props) => {
  const reference = useRef();
  const [code, setCode] = useState("");
  const changeHandler = (e) => {
    setCode(e.target.value);
  };

  const clickHandler = (e) => {
    toast("Payment Successful!");
    // setTimeout(() => {window.location = "/"}, 2000)
  };

  return (
    <div ref={reference}>
      <div className={styles.billEncompass}>
        <div className={styles.bill}>
          <div className={styles.subtotal}>
            <h1 className={styles.billHeading}>Subtotal</h1>
            <h1 className={styles.billCost}>₹ {props.total}</h1>
          </div>
          <div className={styles.tax}>
            <h1 className={styles.billHeading}>Sales Tax</h1>
            <h1 className={styles.billCost}>₹ {(4 * props.total) / 100}</h1>
          </div>
          <div className={styles.coupon}>
            <h1 className={styles.billHeading}>Coupon Code</h1>
            <input
              type="text"
              name="code"
              id="code"
              onChange={changeHandler}
              value={code}
              style={{ width: "8rem" }}
            />
          </div>
          <div className={styles.grandtotal}>
            <h1 className={styles.billHeading}>Grand Total</h1>
            <h1
              className={styles.billCost}
              style={{ fontSize: "2rem", color: "green" }}
            >
              ₹{" "}
              {code === "chaitanya" ? 0 : props.total + (4 * props.total) / 100}
            </h1>
          </div>

          <div className={styles.pay}>
            {" "}
            <button
              className="btn btn-success"
              style={{ width: "50%" }}
              onClick={clickHandler}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const [top, setTop] = useState(false);
  useEffect(() => {
    if (top == true) {
      window.scrollTo(0, 0);
      setTop(false);
    }
  }, [top]);

  const [all, setAll] = useState([]);
  const [total, setTotal] = useState(0);
  function getAllDataFromLocalStorage() {
    let total = 0;
    const allData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      total += parseInt(value, 10);
      allData[key] = value;
    }
    setAll(Object.keys(allData));
    setTotal(total);
  }

  useEffect(() => {
    getAllDataFromLocalStorage();
  });

  const reference = useRef();

  return (
    <div className={styles.cartEncompass}>
      <CartTitle />
      <div ref = {reference}>
      {all.map((d) => (
        <CartCard item={d} cost={localStorage.getItem(d)} onClick = {() => {localStorage.removeItem(d)}} className = {styles.del}/>
      ))}
      <Bill total={total} />
      <ReactToPrint
              trigger={() => (
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  Print
                </button>
              )}

              content = {() => reference.current}
            />
      </div>

      <Feedback />
      <ToastContainer />
    </div>
  );
};

export { Cart };
