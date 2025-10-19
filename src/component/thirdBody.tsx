"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { LiaBrushSolid } from "react-icons/lia";
import { LuPaintbrush2 } from "react-icons/lu";
import { GiSpray, GiPaintBucket, GiPencilBrush, GiTheaterCurtains } from "react-icons/gi";
import { SiCanvas } from "react-icons/si";

export default function ThirdBody() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  const services = [
    { icon: <LuPaintbrush2 style={{ transform: "rotate(50deg)" }} />, title: "Regular Painting" },
    { icon: <GiPencilBrush />, title: "Residential Interior" },
    { icon: <GiSpray />, title: "Eco Xpress Painting" },
    { icon: <SiCanvas />, title: "Water Proof Solution" },
    { icon: <GiPaintBucket />, title: "Water Solutions" },
    { icon: <GiTheaterCurtains />, title: "House Painting" },
  ];

  return (
    <section className="thirdPart">
      <motion.div
        className="paintService"
        style={{ scale, opacity }}
      >
        <h2>
          Our Pain<span style={{ borderBottom: "1px solid darkslategray" }}>
            ting Services
          </span>
          <LiaBrushSolid className="brush" />
        </h2>
        <p>
          Omnicos directe al desirabilite de un nov lingua franca: On refusa
          continuar payar custosi traductores.
        </p>
      </motion.div>

      <div className="paintServiceGird">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className="paintContainer1"
            {...fadeUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="btnMsg">{item.icon}</div>
            <div className="secondPaintContainer">
              <h2>{item.title}</h2>
              <p>
                Li lingues differe solmen in grammatica
                <br /> pronunciation commun vocabules.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
