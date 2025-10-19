"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiaBrushSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function FifthBody() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);

  return (
    <section className="fifthPart">
      {/* Title */}
      <div className="priceService">
        <motion.h2
          className="animatedPriceHeader"
          style={{
            borderBottom: "1px solid darkslategray",
            scale,
            opacity,
          }}
        >
          Our Price <LiaBrushSolid className="brush" />
        </motion.h2>
        <p>
          Omnicos directe al desirabilite de un nov lingua franca: On refusa
          continuar payar custosi traductores.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="fifthFlex">
        {/* Single Visit */}
        <motion.div
          className="singleVisit"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="singleVisit1">
            <h2>SINGLE VISIT</h2>
            <button>
              $45
              <br />
              <span className="it">/Month</span>
            </button>
          </div>
          <div className="singleVisit2">
            <p>
              <FaCheck style={{ color: "darkslategray" }} /> 2 Workers
            </p>
            <p>
              <FaCheck style={{ color: "darkslategray" }} /> 15 Days
            </p>
            <p>
              <FaCheck style={{ color: "darkslategray" }} /> Extra Feature
            </p>
            <p>
              <MdCancel style={{ color: "darkred" }} /> On Demand
            </p>
            <p className="another-p" style={{ color: "gray" }}>
              Extra Charges are based on Extra Work taken.
            </p>
            <button>Buy Service</button>
          </div>
        </motion.div>

        {/* On Demand */}
        <motion.div
          className="demand"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="demand1">
            <h2>ON DEMAND</h2>
            <button>
              $125
              <br />
              <span className="it">/Month</span>
            </button>
          </div>
          <div className="demand2">
            <p>
              <FaCheck style={{ color: "darkslategray" }} /> 5 Workers
            </p>
            <p>
              <FaCheck style={{ color: "darkslategray" }} /> 5 Days
            </p>
            <p>
              <FaCheck style={{ color: "darkslategray" }} /> Extra Feature
            </p>
            <p>
              <FaCheck style={{ color: "darkslategray" }} /> On Demand
            </p>
            <p className="another-p" style={{ color: "gray" }}>
              Extra Charges are based on Extra Work taken.
            </p>
            <button>Buy Service</button>
          </div>
        </motion.div>

        {/* Maintenance */}
        <motion.div
          className="maintain"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="maintain1">
            <h2>MAINTENANCE</h2>
            <button>
              $130
              <br />
              <span className="it">/Month</span>
            </button>
          </div>
          <div className="maintain2">
            <p>
              <FaCheck style={{ color: "darkslategray" }} /> 3 Workers
            </p>
            <p>
              <MdCancel style={{ color: "darkred" }} /> 15 Days
            </p>
            <p>
              <FaCheck style={{ color: "darkslategray" }} /> Extra Feature
            </p>
            <p>
              <FaCheck style={{ color: "darkslategray" }} /> On Demand
            </p>
            <p className="another-p" style={{ color: "gray" }}>
              Extra Charges are based on Extra Work taken.
            </p>
            <button>Buy Service</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
