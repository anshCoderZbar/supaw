import React from "react";
import Image from "next/image";

import styles from "styles/Footer.module.scss";

import footerLogo from "assets/images/footer.png";

export const Footer = () => {
  return (
    <div className="bg-dark p-5">
      <div className="container-fluid">
        <div className={styles.footer_layout}>
          <Image src={footerLogo} alt="footerLogo" loading="lazy" />
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 text-white">
              <h4 className="fw-bold fs-3">About Supaw</h4>
              <ul className="list-unstyled mt-4">
                <li className="mt-3 fw-semibold fs-6">Who we are</li>
                <li className="mt-3 fw-semibold fs-6">Blog</li>
                <li className="mt-3 fw-semibold fs-6">FAQ</li>
                <li className="mt-3 fw-semibold fs-6">Membership</li>
                <li className="mt-3 fw-semibold fs-6">Contact Us</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12 text-white">
              <h4 className="fw-bold fs-2">Company</h4>
              <ul className="list-unstyled mt-4 ">
                <li className="mt-3 fw-semibold fs-6">Link 1</li>
                <li className="mt-3 fw-semibold fs-6">Link 2</li>
                <li className="mt-3 fw-semibold fs-6">Link 3</li>
                <li className="mt-3 fw-semibold fs-6">Link 4</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12 text-white">
              <h4 className="fw-bold fs-2">Social</h4>
              <div className="d-flex gap-3">
                <div className="w-25 bg-white bg-opacity-10 text-center p-3 rounded-5">
                  <i className="bi bi-facebook"></i>
                </div>
                <div className="w-25 bg-white bg-opacity-10 text-center p-3 rounded-5">
                  <i className="bi bi-twitter"></i>
                </div>
                <div className="w-25 bg-white bg-opacity-10 text-center p-3 rounded-5">
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
