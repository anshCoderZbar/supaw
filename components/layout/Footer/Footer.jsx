import React from "react";
import Image from "next/image";

import styles from "styles/Footer.module.scss";
import footerLogo from "assets/images/footer.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-dark py-4">
      <div className="container-fluid main_container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-6 col-12">
            <Link href="/">
              <Image src={footerLogo} alt="footerLogo" loading="lazy" />
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-6 col-12 text-white">
                <h4 className="fw-bold fs-5 fs-lg-3">About Supaw</h4>
                <ul className="list-unstyled mt-4">
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Who we are</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Blog</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">FAQ</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Membership</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Contact</Link> Us
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-12 text-white">
                <h4 className="fw-bold fs-5 fs-lg-3">Company</h4>
                <ul className="list-unstyled mt-4">
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Link 1</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Link 2</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Link 3</Link>
                  </li>
                  <li className="mt-3 fw-semibold fs-6">
                    <Link href="/">Link 4</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-12 text-white">
                <h4 className="fw-bold fs-5 fs-lg-3">Social</h4>
                <div className="d-flex gap-3 mt-4 mt-lg-0">
                  <div className=" fs-3 text-center  rounded-5">
                    <Link href="/">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </div>
                  <div className="fs-3  text-center  rounded-5">
                    <Link href="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </div>
                  <div className=" fs-3 text-center  rounded-5">
                    <Link href="/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
