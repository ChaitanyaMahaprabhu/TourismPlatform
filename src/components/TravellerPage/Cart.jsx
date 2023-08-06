import styles from "./Cart.module.css";
import { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Contact } from "../Footer/Contact";
import { Feedback } from "../Feedback/Feedback";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [code, setCode] = useState("");
  const changeHandler = (e) => {
    setCode(e.target.value);
  };

  const clickHandler = (e) => {
    toast("Payment Successful!");
    setTimeout(() => {window.location = "/"}, 2000)
  }

  return (
    <div className={styles.billEncompass}>
      <div className={styles.bill}>
        <div className={styles.subtotal}>
          <h1 className={styles.billHeading}>Subtotal</h1>
          <h1 className={styles.billCost}>₹ 123</h1>
        </div>
        <div className={styles.tax}>
          <h1 className={styles.billHeading}>Sales Tax</h1>
          <h1 className={styles.billCost}>₹ 12</h1>
        </div>
        <div className={styles.coupon}>
          <h1 className={styles.billHeading}>Coupon Code</h1>
          <input
            type="text"
            name="code"
            id="code"
            onChange={changeHandler}
            value={code}
            style = {{width: "8rem"}}
          />
        </div>
        <div className={styles.grandtotal}>
          <h1 className={styles.billHeading}>Grand Total</h1>
          <h1
            className={styles.billCost}
            style={{ fontSize: "2rem", color: "green" }}
          >
            ₹ 12
          </h1>
        </div>

        <div className={styles.pay}>
          {" "}
          <button className="btn btn-success" style={{ width: "50%" }} onClick = {clickHandler}>
            Pay
          </button>
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
  
  return (
    <div className={styles.cartEncompass}>
      <CartTitle />
      <CartCard item="Italy" cost="120000" />
      <CartCard item="Greece" cost="140000" />
      <Bill />

      <Feedback />
      <Contact />
      <Footer setTop={setTop} />
      <ToastContainer/>
    </div>
  );
};

export { Cart };
