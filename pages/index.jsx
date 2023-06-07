import React from "react";
import Image from "next/image";

import { Layout } from "components/layout";

import styles from "styles/Home.module.scss";
import banner from "assets/images/hero_banner.png";
import doctor from "assets/images/doctor.png";
import arrow from "assets/images/arrow.png";
import gif1 from "assets/images/box_gif_1.gif";
import gif2 from "assets/images/box_gif_2.gif";
import iphone from "assets/images/iphone.png";
import app_store from "assets/images/app_store.png";
import google_play from "assets/images/google_play.png";

export default function index() {
  return (
    <main>
      <Layout>
        <div className={styles.banner_color}>
          <div className="container-fluid main_container py-5">
            <div className="row">
              <div className="col-lg-8">
                <div className={`${styles.banner_top_section}`}>
                  <h1>Need Pet Parenting Made Easy?</h1>
                  <p>
                    Are you finding it challenging to keep track of your pet's
                    timeline? With our user-friendly platform, you can
                    effortlessly centralize your pet's timeline, ensuring you
                    never miss a vaccination, grooming session, or important
                    supply replenishment.
                  </p>
                </div>
                <div className={styles.banner_bottom_images}>
                  <Image
                    src={doctor}
                    alt="doctor-image"
                    loading="lazy"
                    className="img-fluid"
                  />
                  <Image
                    src={arrow}
                    alt="arrow-image"
                    loading="lazy"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <Image
                  src={banner}
                  alt="mobile-image"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page_head}>
          <h1>Experience our</h1>
          <h1>
            Super App - <span>SuPaw!</span>
          </h1>
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className={styles.vector1}></div>
            <div
              className={styles.layout_box}
              style={{ backgroundColor: "#e89f23" }}
            >
              <Image src={gif1} alt="gif-2" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className={styles.vector1}></div>
            <div
              className={styles.layout_box}
              style={{ backgroundColor: "#E75C25" }}
            >
              <Image src={gif2} alt="gif-2" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className={styles.vector1}></div>
            <div
              className={styles.layout_box3}
              style={{ backgroundColor: "#7F3FA6" }}
            >
              <Image src={iphone} alt="iphone" />
            </div>
          </div>
        </div>
        <div className={styles.bottom_head}>
          <h2>Our one-stop-shop platform for all your Petcare needs.</h2>
          <div className={styles.bottom_img}>
            <Image src={app_store} className="app-store" />
            <Image src={google_play} className="google-play" />
          </div>
        </div>
        <div className={styles.banner_color}>
          <div className="container-fluid main_container py-5">
            <div className={styles.bottom_section}>
              <div
                className={styles.box}
                style={{ backgroundColor: "#E75C25" }}
              >
                <p>You run a Vet practice?</p>
                <button>Register now!</button>
              </div>
              <div
                className={styles.box}
                style={{ backgroundColor: "#E89F23" }}
              >
                <p>Do you run a Pet Store?</p>
                <button>Register now!</button>
              </div>
              <div
                className={styles.box}
                style={{ backgroundColor: "#7F3FA6" }}
              >
                <p>Do you offer Pet Services?</p>
                <button>Register now!</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
