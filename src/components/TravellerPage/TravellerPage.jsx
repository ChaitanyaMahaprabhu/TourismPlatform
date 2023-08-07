import styles from "./TravellerPage.module.css";
import { useEffect, useState } from "react";
import { AYS } from "../AreYouSure/AYS";
import { ToastContainer, toast } from "react-toastify";
import { Contact } from "../Footer/Contact";
import { Footer } from "../Footer/Footer";
import { ViewTours } from "../AgentPage/ViewTours";
import { Cart } from "./Cart";
import { useParams } from "react-router-dom";
import {TravellerTitle} from './TravellerTitle';
import { Filter } from "./Filter";

const TravellerPage = () => {
  const {name} = useParams();

  const [view, setView] = useState(false);
  const [out, setOut] = useState(false);
  const [top, setTop] = useState(false);

  const [render, setRender] = useState();
  const [active, setActive] = useState({
    filterTours: true,
    cart: false,
  });

  useEffect(() => {
    if (top === true) {
      window.scrollTo(0, 0);
      setTop(false);
    }
  }, [top]);

  useEffect(() => {
    if (out === true) {
      window.location = "/";
    }
  }, [out]);

  useEffect(() => {
    if (active.filterTours) setRender(<Filter />);
    else if (active.cart) setRender(<Cart />);
  }, [active]);

  return (
    <div className={styles.travellerPageEncompass}>
      {view && <AYS message="Log Out?" setCommand={setOut} setView={setView} />}
      <div className={styles.travellerNav}>
        <div className={styles.mainOptions}>
          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
              onClick={() => {
                setActive((prev) => ({
                  filterTours: true,
                  cart: false,
                }));
              }}
            >
              filter_alt
            </span>
          </h4>

          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
              onClick={() => {
                setActive((prev) => ({
                  filterTours: false,
                  cart: true,
                }));
              }}
            >
              shopping_cart
            </span>
          </h4>
        </div>

        <div className={styles.subOptions}>
          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
              onClick={() => {
                setView(true);
              }}
            >
              logout
            </span>
          </h4>

          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
              onClick={() => {
                window.location = "/Helpline";
              }}
            >
              contact_support
            </span>
          </h4>
        </div>
      </div>

      <div className={styles.travellerWorking}>
        <div className={styles.top} style={{ backgroundColor: "black" }}></div>

        <div className={styles.tab}>
          <TravellerTitle name={name}/>
          {render}
          <Contact />
          <Footer setTop={setTop} />
        </div>
      </div>
    </div>
  );
};

export { TravellerPage };
