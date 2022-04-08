import React from "react";
import * as styles from "../styles/Feature.module.css";
import Image from "next/image";
function Feature() {
  return (
    <div className={styles.Feature}>
      <div className={styles.Feture_heading}>
        <h3>Learning That’s Tailored to Them</h3>
      </div>
      <div className={styles.featureRow}>
        <div className={styles.Feature_cards}>
          <div className={styles.card_top}>
            <img
              src="https://static.outschool.com/master/public/images/explore-any-interest.f3f6e5e34935ea22159658bd77e0bf76.png"
              alt="card-img"
            />
            <div>
              <h4 className={styles.learning_title}>Any Kid, Any Interest</h4>
              <p className={styles.learning_desc}>
                Outschool engages and inspires learning through a wide variety
                of classes and subjects so learners can dive deeper into their
                favorite interests.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.Feature_cards}>
          <div className={styles.card_top}>
            <img
              src="https://static.outschool.com/master/public/images/learn-with-peers.a1f3d0894b01282c784f8ca998fd5f93.png"
              alt="card-img"
            />
            <div>
              <h4 className={styles.learning_title}>Small & Social</h4>
              <p className={styles.learning_desc}>
              Our live, small-group format encourages social interactions and builds learner friendships.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.Feature_cards}>
          <div className={styles.card_top}>
            <img
              src="https://static.outschool.com/master/public/images/inspiring-teachers.4458a1c753b13da169c397d396dd866e.png"
              alt="card-img"
            />
            <div>
              <h4 className={styles.learning_title}>Educators You Can Trust</h4>
              <p className={styles.learning_desc}>
              We’ve been providing online classes taught by safe, vetted, and experienced teachers since 2015
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
