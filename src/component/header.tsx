"use client";
import { GiPaintRoller } from "react-icons/gi";
import { BsEnvelopeAt } from "react-icons/bs";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdPhonelinkRing } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import "@/styles/header.css";
import Header2 from "./header2";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [is992, setIs992] = useState(false);
  const [is580, setIs580] = useState(false);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.6]);

  useEffect(() => {
    const updateWindowWidth = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIs992(width <= 992);
      setIs580(width <= 580);
    };

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <>
      <motion.header
        className="header-1"
        style={{ opacity }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <section className="section-header">
          <div className="header-logo-container">
            <GiPaintRoller className="roller-header" />
            <h1>Tropical Paints</h1>
          </div>

          {windowWidth !== null && (
            <div className={`allContacts ${is580 ? "contactInvisible" : ""}`}>
              <div className="phoneNumber">
                <MdPhonelinkRing
                  style={{
                    fontSize: "1.5rem",
                    borderRight: "1px solid white",
                    paddingRight: "8px",
                  }}
                />
                <div className="divNumbers">
                  <p>
                    <Link href="tel:+1234567890">+1 (234) 567 890</Link>
                  </p>
                  <p>
                    <Link href="tel:+1234567890">+1 (234) 567 890</Link>
                  </p>
                </div>
              </div>

              <div className="mail">
                <BsEnvelopeAt
                  style={{
                    fontSize: "1.5rem",
                    borderRight: "1px solid white",
                    paddingRight: "8px",
                  }}
                />
                <div className="mailList">
                  <Link href="mailto:youremail@example.com">
                    youremail@example.com
                  </Link>
                  <Link href="mailto:youremail@example.com">
                    youremail@example.com
                  </Link>
                </div>
              </div>

              <div className="location">
                <FaMapMarkerAlt
                  style={{
                    fontSize: "1.5rem",
                    borderRight: "1px solid white",
                    paddingRight: "8px",
                  }}
                />
                <p className="address">
                  3742 Graystone Lakes, <br />
                  Macon GA Georgia, GA 307
                </p>
              </div>

              <div className={`socials ${is992 ? "invisibleSocials" : ""}`}>
                <button className="facebook">
                  <Link href="/facebook">
                    <FaFacebookF />
                  </Link>
                </button>
                <button className="whatsapp">
                  <Link href="/whatsapp">
                    <FaWhatsapp />
                  </Link>
                </button>
                <button className="twitter">
                  <Link href="/x">
                    <FaTwitter />
                  </Link>
                </button>
              </div>
            </div>
          )}
        </section>
      </motion.header>
      <Header2 />
    </>
  );
}
