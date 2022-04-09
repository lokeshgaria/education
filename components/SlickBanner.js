import React from "react";
import * as styles from "../styles/SlickBanner.module.css";
import Image from "next/image";
import slick from "../assets/slick.png";

function SlickBanner() {
  return (
    <div className={styles.parentSlick}>
      <div className={styles.slickBanner}>
        <div className={styles.img_div}>
          <Image
            src={slick}
            height={140}
            className={styles.bannerSlickImg}
            alt="bannerLogo"
            placeholder="blur"
          />
        </div>

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
