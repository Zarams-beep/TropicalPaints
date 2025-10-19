"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiaBrushSolid } from "react-icons/lia";
import Image from "next/image";

export default function SevenBody() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 150], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 150], [1, 0.7]);

  const images = {
    luigi: "/png/luigi-estuye-lucreative-5wKvYUcWPYQ-unsplash.jpg",
    muhammad: "/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg",
    johan: "/png/johan-mouchet-qDLdKMBmC6o-unsplash.jpg",
  };

  const fadeInMotion = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <section className="seventhPart">
      {/* Header */}
      <div className="projectService">
        <motion.h2
          style={{ borderBottom: "1px solid darkslategray", scale, opacity }}
        >
          Our Painting Project <LiaBrushSolid className="brush" />
        </motion.h2>
        <p>
          Omnicos directe al desirabilite de un nov lingua franca: On refusa
          continuar payar custosi traductores.
        </p>
      </div>

      {/* Image Showcase */}
      <div className="projectShowcase">
        <div className="project1">
          <motion.p {...fadeInMotion}>
            <Image
              src={images.luigi}
              alt="project image"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </motion.p>
          <motion.p {...fadeInMotion}>
            <Image
              src={images.luigi}
              alt="project image"
              width={1000}
              height={1000}
              loading="lazy"
              className="special-img"
            />
          </motion.p>
        </div>

        <div className="project2">
          {[1, 2, 3].map((_, i) => (
            <motion.p key={i} {...fadeInMotion}>
              <Image
                src={images.muhammad}
                alt="project image"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </motion.p>
          ))}
        </div>

        <div className="project1">
          <motion.p {...fadeInMotion}>
            <Image
              src={images.johan}
              alt="project image"
              width={1000}
              height={1000}
              loading="lazy"
              className="special-img"
            />
          </motion.p>
          <motion.p {...fadeInMotion}>
            <Image
              src={images.johan}
              alt="project image"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </motion.p>
        </div>
      </div>
    </section>
  );
}
