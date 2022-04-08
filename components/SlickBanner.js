import React from "react";
import * as styles from "../styles/SlickBanner.module.css";

function SlickBanner() {
  return (
    <div  className={styles.parentSlick}>
      <div className={styles.slickBanner}>
        <img
          src="https://static.outschool.com/master/public/images/Books.d6b318117f37c39783271723eb0ee7dc.png"
          alt="bannerLogo"
        />
        <div className={styles.slikContent}>
          <h3 className={styles.Slic_heading}>Try One-on-One Learning</h3>
          <p className={styles.slick_para}>
            Get personalized instruction and tutoring on any subject
          </p>
          <button className={styles.browseBtn}>Browse Classes</button>
        </div>
      </div>
    </div>
  );
}

export default SlickBanner;
