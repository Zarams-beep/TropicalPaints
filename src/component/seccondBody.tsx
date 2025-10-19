"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiaBrushSolid } from "react-icons/lia";
import { LuPaintbrush } from "react-icons/lu";
import { RiPaintBrushFill } from "react-icons/ri";
import { GiSpray, GiDrippingKnife, GiPaintBucket } from "react-icons/gi";
import { SiCanvas } from "react-icons/si";

export default function SecondBody() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 150], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 150], [1, 0.7]);

  const features = [
    {
      title: "Window Washing",
      Icon: LuPaintbrush,
    },
    {
      title: "Color Proof",
      Icon: GiSpray,
    },
    {
      title: "Mildew Removal",
      Icon: GiDrippingKnife,
    },
    {
      title: "Faux Finishes",
      Icon: RiPaintBrushFill,
    },
    {
      title: "Water Proofing",
      Icon: GiPaintBucket,
    },
    {
      title: "Pre-Point Demo",
      Icon: SiCanvas,
    },
  ];

  return (
    <section className="secondPart">
      {/* Title */}
      <div className="chooseUs">
        <motion.h2 style={{ scale, opacity }}>
          W
          <span style={{ borderBottom: "1px solid darkslategray" }}>
            hy Choose Us
          </span>
          <LiaBrushSolid className="brush" />
        </motion.h2>
        <p>
          Omnicos directe al desirabilite de un nov lingua franca: On refusa
          continuar payar custosi traductores.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="gridchooseUs">
        {features.map(({ title, Icon }, index) => (
          <motion.div
            key={title}
            className={`smallcontainer${index + 1}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Icon className="icons" />
            <h2>{title}</h2>
            <p>
              Li lingues differe solmen in grammatica <br />
              pronunciation commun vocabules.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
