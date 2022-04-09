import React from "react";
import * as styles from "../styles/Footer.module.css";
import heart from "../assets/footer/heart.png";
import Image from "next/dist/client/image";
import footerLogo from "../assets/footer/love.png";
import Link from "next/link";
import { footerData } from "./data/index";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.row}>
          <div className={styles.footer_first}>
            <div style={{ display: "flex", height: "28px" }}>
              <Image src={heart} width={15} height={5} alt="footer-logo" />
              <Image src={footerLogo} width={150} alt="footer-logo" />
            </div>

            <p>
              “Tell me and I forget. Teach me and I remember. Involve me and I
              learn.”
            </p>
            <p>© 2022 Outschool, Inc.</p>
          </div>
          {footerData?.map((values, index) => {
            return (
              <div className={styles.footerDesc} key={index}>
                <h4>{values.title}</h4>
                {values?.quickLinks.map((links, index) => {
                  return (
                    <Link href="/" key={index}>
                      {links}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
