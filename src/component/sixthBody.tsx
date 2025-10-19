"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiaBrushSolid } from "react-icons/lia";

export default function SixthBody() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 120], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 120], [1, 0.7]);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <section className="sixthPart">
      {/* Header */}
      <motion.div className="testService" style={{ scale, opacity }}>
        <h2 style={{ borderBottom: "1px solid darkslategray" }}>
          Our Testimonial <LiaBrushSolid className="brush" />
        </h2>
        <p>
          Omnicos directe al desirabilite de un nov lingua franca: On refusa
          continuar payar custosi traductores.
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className="testSlidesContainer">
        {/* Slide 1 */}
        <motion.div className="testSlide1" {...fadeUp}>
          <div className="slide-img-cont">
            <Image
              src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg"
              alt="Racheal Paul"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </div>
          <div className="comment">
            <h3>Racheal Paul</h3>
            <h4>CEO</h4>
            <p>
              Omnicos directe al desirabilite de un nov lingua franca: On refusa
              continuar payar custosi traductores.
            </p>
          </div>
        </motion.div>

        {/* Slide 2 */}
        <motion.div className="testSlide2" {...fadeUp}>
          <div className="slide-img-cont">
            <Image
              src="/png/tim-mossholder-bwbauFRbNyo-unsplash.jpg"
              alt="Alex Mucheal"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </div>
          <div className="comment">
            <h3>Alex Mucheal</h3>
            <h4>HR Manager</h4>
            <p>
              Omnicos directe al desirabilite de un nov lingua franca: On refusa
              continuar payar custosi traductores.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
