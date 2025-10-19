"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiaBrushSolid } from "react-icons/lia";
import Image from "next/image";

export default function EightBody() {
  // Scroll-based animation
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);

  return (
    <section className="eightPart">
      <div className="blogService">
        <motion.h2
          className="animatedBlogHeader"
          style={{
            borderBottom: "1px solid darkslategray",
            scale,
            opacity,
          }}
        >
          Our Blog <LiaBrushSolid className="brush" />
        </motion.h2>
        <p>
          Omnicos directe al desirabilite de un nov lingua franca: On refusa
          continuar payar custosi traductores.
        </p>
      </div>

      <div className="blogSlidesContainer">
        {/* Slide 1 */}
        <div className="blogSlide1">
          <Image
            src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg"
            alt="Racheal's Profile Picture"
            width={1000}
            height={1000}
            loading="lazy"
          />
          <div className="comment">
            <h4>May 14, 2024</h4>
            <h2>A Beautiful Daycare</h2>
            <p>
              Omnicos directe al desirabilite de un nov lingua franca: On refusa
              continuar payar custosi traductores.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="blogSlide2">
          <Image
            src="/png/tim-mossholder-bwbauFRbNyo-unsplash.jpg"
            alt="Alex Profile Picture"
            width={1000}
            height={1000}
            loading="lazy"
          />
          <div className="comment">
            <h4>May 14, 2024</h4>
            <h2>A Beautiful Daycare</h2>
            <p>
              Omnicos directe al desirabilite de un nov lingua franca: On refusa
              continuar payar custosi traductores.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="blogSlide3">
          <Image
            src="/png/tim-mossholder-bwbauFRbNyo-unsplash.jpg"
            alt="Alex Profile Picture"
            width={1000}
            height={1000}
            loading="lazy"
          />
          <div className="comment">
            <h4>May 14, 2024</h4>
            <h2>A Beautiful Daycare</h2>
            <p>
              Omnicos directe al desirabilite de un nov lingua franca: On refusa
              continuar payar custosi traductores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
