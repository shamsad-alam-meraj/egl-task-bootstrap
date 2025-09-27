"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/images/image1.png", alt: "logo1", width: 200, height: 57 },
  { src: "/assets/images/image2.png", alt: "logo2", width: 200, height: 57 },
  { src: "/assets/images/image3.png", alt: "logo3", width: 200, height: 72 },
  { src: "/assets/images/image4.jpg", alt: "logo4", width: 200, height: 72 },
  { src: "/assets/images/image5.png", alt: "logo5", width: 200, height: 72 },
];

export default function Awards() {
  return (
    <section className="w-100 py-5 py-md-5">
      <div className="container-xl text-center d-flex justify-content-center">
        {/* Wrapper for horizontal scroll on small screens */}
        <motion.div
          className="d-flex gap-5 overflow-auto overflow-md-visible py-5"
          style={{ scrollbarWidth: "thin" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="position-relative flex-shrink-0 opacity-50"
              style={{ width: img.width, height: img.height }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
