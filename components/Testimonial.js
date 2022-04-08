import React from "react";
import * as styles from "../styles/Testimonial.module.css";

function Testimonial() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonial__content}>
        <img
          src="https://static.outschool.com/master/public/images/parent-krystal.6bc9abcc12290648b506f29c00f883a5.png"
          alt="user-profile"
        />

        <div className={styles.testimonial_message}>
          <p>
            “I now feel empowered when it comes to her education. With
            Outschool, you have the power to choose. I have been able to watch
            her grow over the past several months.”
          </p>
          <span>- Krystal B</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
