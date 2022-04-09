import React from "react";
import * as styles from "../styles/Testimonial.module.css";
import Prof from "../assets/testimonials/profile.png"
 
import Image from "next/dist/client/image";

function Testimonial() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonial__content}>
        <Image
          src={Prof}
          width={150}
          height={140}
          className={styles.testimonial__content_img}
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
