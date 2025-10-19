"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GiPaintRoller } from "react-icons/gi";
import { motion } from "framer-motion";
import "@/styles/loader.css";

export default function PreLoading() {
  const [textVisible, setTextVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const textTimer = setTimeout(() => setTextVisible(true), 1000);
    const navTimer = setTimeout(() => router.push("/"), 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(navTimer);
    };
  }, [router]);

  return (
    <div className="loader-container">
      <div className="brush-wrapper">
        <GiPaintRoller className="roller-icon" />
      </div>

      {textVisible && (
        <motion.div
          className="loader-text"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="brand-main">Tropical</span>
          <div className="brand-sub-wrapper">
            <span className="brand-sub">Paints</span>
            <span className="dot">.</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
