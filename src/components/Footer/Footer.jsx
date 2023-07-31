import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerEncompass}>
      <div className={styles.brandInfo}>
        <h1 className={styles.brand}>Make My Trip.</h1>
        <h6 className={styles.desc}>
          Thank you for visiting us. This is a passionate creation of Kanini
          Software Solutions, headed by Chaitanya Mahaprabhu. Feel free to
          contact us for a chat or to share some feedback.
        </h6>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.company}>
          <h1 className={styles.heading}>Organization</h1>
          <br />
          <h2 className={styles.navs}><a href = "https://kanini.com/about-us/">About Us</a></h2>
          <h2 className={styles.navs}><a href = "https://kanini.com/careers/">Join Us</a></h2>
          <h2 className={styles.navs}><a href = "https://kanini.com/team/">Team</a></h2>
          <h2 className={styles.navs}><a href = "https://kanini.com/blog/">Blog</a></h2>
        </div>
        <div className={styles.products}>
          <h1 className={styles.heading}>Products</h1>
          <br />
          <h2 className={styles.navs}>Make My Trip</h2>
          <h2 className={styles.navs}><a href = "https://play.google.com/store/apps/details?id=com.fielda.android&hl=en&gl=US">Fielda</a></h2>
        </div>
        <div className={styles.address}>
          <h1 className={styles.heading}>Address</h1>
          <address className={styles.navs} style = {{marginTop: "1rem"}}>
            Kanini Software Solutions Chennai
          </address>
        </div>
      </div>
    </div>
  );
};

export { Footer };
