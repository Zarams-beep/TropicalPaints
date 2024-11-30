"use client";
import "@/styles/loader.css";
import { GiPaintRoller } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PreLoading() {
  const [troVisible, setTroVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Trigger text appearance after 1.5s delay
    const textTimer = setTimeout(() => {
      setTroVisible(true);
    }, 1500);

    // Navigate to home after 2.5s
    const navigationTimer = setTimeout(() => {
      router.push("/home");
    }, 2500); // Adjusted time to reduce delay

    return () => {
      clearTimeout(textTimer);
      clearTimeout(navigationTimer);
    };
  }, [router]);

  return (
    <div className="container-loader">
      <section className="logoWrapper">
        <GiPaintRoller className="logoWrapper-icon" />
      </section>
      <section className={`textLogoWrapper ${troVisible ? "show-loader-text" : ""}`}>
        <span className="Tropical">Tropical</span>
        <div className="">
        <span className="Paints">Paints</span>
        <span className="dot">.</span></div>
      </section>
    </div>
  );
}
