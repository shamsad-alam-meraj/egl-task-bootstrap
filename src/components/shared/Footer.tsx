"use client";

import { Youtube, Linkedin, Github, BookOpen } from "lucide-react";
import Image from "next/image";
import styles from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={`shadow-sm ${styles.footerShadow}`}>
      <div className="container py-5">
        {/* Top */}
        <div className="row border-bottom pb-5 mb-4">
          {/* Logo + description */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <Image
              src="/assets/images/egl_logo.png"
              alt="logo"
              width={123}
              height={36}
            />
            <div className={`col-12 col-md-9 font-inter ${styles.description}`}>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex.
              </p>
            </div>
          </div>

          {/* Right side: Solutions, Company, Community */}
          <div className="col-12 col-md-6">
            <div className="row">
              {/* Solutions */}
              <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                <h5 className={`font-bold font-manrope ${styles.heading}`}>
                  Solutions
                </h5>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <a className="text-decoration-none font-inter" href="#">
                      Web Tool
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a className="text-decoration-none font-inter" href="#">
                      Consulting
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a className="text-decoration-none font-inter" href="#">
                      Research
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                <h5 className={`font-bold font-manrope ${styles.heading}`}>
                  Company
                </h5>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <a className="text-decoration-none font-inter" href="#">
                      About
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a className="text-decoration-none font-inter" href="#">
                      Methodology
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a className="text-decoration-none font-inter" href="#">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>

              {/* Community */}
              <div className="col-12 col-sm-4">
                <h5 className={`font-bold font-manrope ${styles.heading}`}>
                  Community
                </h5>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <a className="text-decoration-none font-inter" href="#">
                      Blog
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a className="text-decoration-none font-inter" href="#">
                      Events
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a className="text-decoration-none font-inter" href="#">
                      Open-Source Data
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{ paddingTop: "30px" }}
          className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3"
        >
          <p className={`mb-2 mb-md-0 font-inter ${styles.copyright}`}>
            Copyright © 2025 everythinggreen. All Rights Reserved
          </p>

          {/* Social icons */}
          <div className="d-flex gap-5">
            <a href="#" aria-label="YouTube">
              <Youtube className={styles.icon} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className={styles.icon} />
            </a>
            <a href="#" aria-label="GitHub">
              <Github className={styles.icon} />
            </a>
            <a href="#" aria-label="Docs">
              <BookOpen className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
