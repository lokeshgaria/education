import React from "react";
import * as styles from "../styles/Interaction.module.css";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import Pencil from "../assets/interaction/pencil.jpg";
import user from "../assets/interaction/user.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Interaction() {
  return (
    <div className={styles.interactions}>
      <div className={styles.childContainer}>
        <h2>Over 140,000 Interactive Online Classes</h2>
        <p>
          Keep kids ages 3-18 engaged with thousands of classes and camps on the
          topics they&apos;re most passionate about!
        </p>
      </div>
      {/*CARDS COMPONENT*/}
      <div className={styles.card_container}>
        <div className={styles.classCard}>
          <div className={styles.card_media}>
            <Image   src={Pencil} width={500} height={300} alt="card-img" />
          </div>

          <div className={styles.card_Content}>
            <div className="card_content">
              <div className={styles.card_top}>
                <div className={styles.rating}>
                  <AiFillStar />{" "}
                  <b>
                    4.93 <span>(98)</span>
                  </b>
                </div>
                <div className={styles.favorite}>
                  <AiOutlineHeart />
                </div>
              </div>
              <div className={styles.card_bottom}>
                <p>
                  College Preparation Writing for High School--Semester I:
                  Research and Writing Basics
                </p>
                <div className={styles.userSection}>
                  <Image   className={styles.profileImg} src={user} alt="avatar" />
                  <p className={styles.userName}>Molly McGill, M.A.</p>
                </div>
              </div>
            </div>
            <div className={styles.card_footer}>
              <div className={styles.desc}>
                <h4>14-18</h4>
                <span>Ages</span>
              </div>
              <div className={styles.desc}>
                <h4>50 mins</h4>
                <span>Ages</span>
              </div>
              <div className={styles.desc}>
                <h4>14-18</h4>
                <span>Ages</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.classCard}>
          <div className={styles.card_media}>
            <Image   src={Pencil} width={500} height={300} alt="card-img" />
          </div>

          <div className={styles.card_Content}>
            <div className="card_content">
              <div className={styles.card_top}>
                <div className={styles.rating}>
                  <AiFillStar />{" "}
                  <b>
                    4.93 <span>(98)</span>
                  </b>
                </div>
                <div className={styles.favorite}>
                  <AiOutlineHeart />
                </div>
              </div>
              <div className={styles.card_bottom}>
                <p>
                  College Preparation Writing for High School--Semester I:
                  Research and Writing Basics
                </p>
                <div className={styles.userSection}>
                  <Image   className={styles.profileImg} src={user} alt="avatar" />
                  <p className={styles.userName}>Molly McGill, M.A.</p>
                </div>
              </div>
            </div>
            <div className={styles.card_footer}>
              <div className={styles.desc}>
                <h4>14-18</h4>
                <span>Ages</span>
              </div>
              <div className={styles.desc}>
                <h4>50 mins</h4>
                <span>Ages</span>
              </div>
              <div className={styles.desc}>
                <h4>14-18</h4>
                <span>Ages</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.classCard}>
          <div className={styles.card_media}>
            <Image   src={Pencil} width={500} height={300} alt="card-img" />
          </div>

          <div className={styles.card_Content}>
            <div className="card_content">
              <div className={styles.card_top}>
                <div className={styles.rating}>
                  <AiFillStar />{" "}
                  <b>
                    4.93 <span>(98)</span>
                  </b>
                </div>
                <div className={styles.favorite}>
                  <AiOutlineHeart />
                </div>
              </div>
              <div className={styles.card_bottom}>
                <p>
                  College Preparation Writing for High School--Semester I:
                  Research and Writing Basics
                </p>
                <div className={styles.userSection}>
                  <Image   className={styles.profileImg} src={user} alt="avatar" />
                  <p className={styles.userName}>Molly McGill, M.A.</p>
                </div>
              </div>
            </div>
            <div className={styles.card_footer}>
              <div className={styles.desc}>
                <h4>14-18</h4>
                <span>Ages</span>
              </div>
              <div className={styles.desc}>
                <h4>50 mins</h4>
                <span>Ages</span>
              </div>
              <div className={styles.desc}>
                <h4>14-18</h4>
                <span>Ages</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.classCard}>
          <div className={styles.card_media}>
            <Image   src={Pencil} width={500} height={300} alt="card-img" />
          </div>

          <div className={styles.card_Content}>
            <div className="card_content">
              <div className={styles.card_top}>
                <div className={styles.rating}>
                  <AiFillStar />{" "}
                  <b>
                    4.93 <span>(98)</span>
                  </b>
                </div>
                <div className={styles.favorite}>
                  <AiOutlineHeart />
                </div>
              </div>
              <div className={styles.card_bottom}>
                <p>
                  College Preparation Writing for High School--Semester I:
                  Research and Writing Basics
                </p>
                <div className={styles.userSection}>
                  <Image   className={styles.profileImg} src={user} alt="avatar" />
                  <p className={styles.userName}>Molly McGill, M.A.</p>
                </div>
              </div>
            </div>
            <div className={styles.card_footer}>
              <div className={styles.desc}>
                <h4>14-18</h4>
                <span>Ages</span>
              </div>
              <div className={styles.desc}>
                <h4>50 mins</h4>
                <span>Ages</span>
              </div>
              <div className={styles.desc}>
                <h4>14-18</h4>
                <span>Ages</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.classCard}>
          <div className={styles.card_media}>
            <Image   src={Pencil} width={500} height={300} alt="card-img" />
          </div>

          <div className={styles.card_Content}>
            <div className="card_content">
              <div className={styles.card_top}>
                <div className={styles.rating}>
                  <AiFillStar />{" "}
                  <b>
                    4.93 <span>(98)</span>
                  </b>
                </div>
                <div className={styles.favorite}>
                  <AiOutlineHeart />
                </div>
              </div>
              <div className={styles.card_bottom}>
                <p>
                  College Preparation Writing for High School--Semester I:
                  Research and Writing Basics
                </p>
                <div className={styles.userSection}>
                  <Image  className={styles.profileImg} src={user} alt="avatar" />
                  <p className={styles.userName}>Molly McGill, M.A.</p>
                </div>
              </div>
            </div>
            <div className={styles.card_footer}>
              <div className={styles.desc}>
                <h4>14-18</h4>
                <span>Ages</span>
              </div>
              <div className={styles.desc}>
                <h4>50 mins</h4>
                <span>Ages</span>
              </div>
              <div className={styles.desc}>
                <h4>14-18</h4>
                <span>Ages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interaction;
