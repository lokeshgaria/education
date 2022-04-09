import Link from "next/link";
import React from "react";
import * as styles from "../styles/Homepage.module.css";
import Interaction from "../components/Interaction";
import SlickBanner from "../components/SlickBanner";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Image from "next/dist/client/image";
import whiteLogo from "../assets/logoWhite.png"
function Homepage() {
  return (
    <>
      <div className={`${styles.homeDiv} nunito_font`}>
        {/**NAVBAR */}
        <div className={styles.navbar}>
          <div className={`${styles.leftSide} `}>
            <Image
              src={whiteLogo}
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
      
      {/**MINI-BANNER */}
      <SlickBanner />
      {/*INTERACT CARDS*/}
      <Feature />
      {/**TESTIMONIAL */}
      <Testimonial />
      {/**FOOTER */}
      <Footer />
    </>
  );
}

export default Homepage;
