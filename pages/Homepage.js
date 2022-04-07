import Link from "next/link";
import React from "react";
import * as styles from "../styles/Homepage.module.css";
import Interaction from "../components/Interaction";

function Homepage() {
  return (
    <>
      <div className={`${styles.homeDiv} nunito_font`}>
        {/**NAVBAR */}
        <div className={styles.navbar}>
          <div className={`${styles.leftSide} `}>
            <img
              src="https://static.outschool.com/master/public/images/logo-white-full-text.3336d921624722ee694ef09bce94aab3.png"
              alt="logo"
              className={styles.hover_element}
            />
          </div>
          <div className={`${styles.rightSide}`}>
            <ul className={styles.ul}>
              <li className={styles.hover_element}>
                <Link href="/">Educator Library</Link>
              </li>
              <li className={styles.hover_element}>
                <Link href="/">Teach</Link>
              </li>
              <li className={styles.hover_element}>
                <Link href="/">Help</Link>
              </li>
              <li className={styles.hover_element}>
                <Link href="/">Log In</Link>
              </li>
            </ul>
          </div>
        </div>

        {/*PARA CONTENT */}
        <div className={styles.hero}>
          <div className={styles.hero_child}>
            <h3>Where Kids Love Learning</h3>
            <Link className={styles.exloreLink} href="/">
              Explore Classes
            </Link>
          </div>
        </div>
      </div>
      {/* INTERACTIONS*/}
      <Interaction />
    </>
  );
}

export default Homepage;