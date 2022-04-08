import React from "react";
import * as styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.row}>
          <div className={styles.footer_first}>
            <div style={{display:"flex"}}>
              <img src="https://static.outschool.com/master/public/images/heart-icon.635ab99b80395b2844980945d62e2cea.png" style={{width:"20px" , height:"20px"}} />
              <img src="https://static.outschool.com/master/public/images/love-learning-text.48f9cf99faa1de0996157e2ddba3b9b4.png" />
            </div>

            <p>
              “Tell me and I forget. Teach me and I remember. Involve me and I
              learn.”
            </p>
            <p>© 2022 Outschool, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
