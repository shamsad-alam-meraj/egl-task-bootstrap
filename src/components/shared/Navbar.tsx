"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-100 shadow-sm font-inter">
      <div className="container-xl d-flex align-items-center justify-content-between">
        {/* Left Logo */}
        <div>
          <Image
            src="/assets/images/egl_logo.png"
            alt="logo"
            width={249}
            height={72}
          />
        </div>

        {/* Middle Nav */}
        <nav className="d-none d-md-flex align-items-center gap-4 fs-6 ">
          <Link href="/" className="fw-semibold fs-6 text-dark text-decoration-none">
            Home
          </Link>
          <Link href="/services" className="text-dark fs-6 text-decoration-none">
            Services
          </Link>
          <Link href="/blog" className="text-dark fs-6 text-decoration-none">
            Blog
          </Link>
          <Link href="/contact" className="text-dark fs-6 text-decoration-none">
            Contact Us
          </Link>
        </nav>

        {/* Right Button */}
        <div className="d-none d-md-block">
          <button className="px-4 py-2 rounded-pill border border-primary text-dark fw-semibold fs-6 bg-transparent hover-shadow">
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="d-md-none text-dark bg-transparent border-0"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Menu className="fs-4" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* ✅ Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="position-fixed top-0 start-0 w-100 h-100 bg-black z-1"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="position-fixed top-0 end-0 h-100 bg-white shadow-lg z-2 d-flex flex-column"
              style={{ width: "75%", maxWidth: "400px" }}
            >
              {/* Close Button */}
              <div className="d-flex justify-content-end p-3">
                <button
                  onClick={toggleMenu}
                  aria-label="Close Menu"
                  className="btn btn-link p-0 text-dark"
                >
                  <X className="fs-4" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="d-flex flex-column align-items-center gap-3 mt-4 fs-5 fw-medium text-dark">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="text-dark text-decoration-none"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  onClick={toggleMenu}
                  className="text-dark text-decoration-none"
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  onClick={toggleMenu}
                  className="text-dark text-decoration-none"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  onClick={toggleMenu}
                  className="text-dark text-decoration-none"
                >
                  Contact Us
                </Link>
                <button
                  onClick={toggleMenu}
                  className="mt-3 px-4 py-2 rounded-pill border border-success text-dark fw-semibold fs-6 bg-transparent"
                >
                  Login
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
