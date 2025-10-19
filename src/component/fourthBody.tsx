"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiaBrushSolid } from "react-icons/lia";
import Link from "next/link";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedin,
  TiSocialGooglePlusCircular,
  TiSocialTwitter,
} from "react-icons/ti";
import Image from "next/image";

export default function FourthBody() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);

  const teamData = [
    {
      name: "Paulene Andrew",
      title: "Water Color Painter",
      img: "/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg",
    },
    {
      name: "Paul Isreal",
      title: "House Painter",
      img: "/png/luigi-estuye-lucreative-5wKvYUcWPYQ-unsplash.jpg",
    },
    {
      name: "Robert Micheal",
      title: "Wood Painter",
      img: "/png/tim-mossholder-bwbauFRbNyo-unsplash.jpg",
    },
    {
      name: "Oliver Josh",
      title: "Color Painter",
      img: "/png/johan-mouchet-qDLdKMBmC6o-unsplash.jpg",
    },
  ];

  return (
    <section className="fourthPart">
      {/* Title */}
      <div className="TeamService">
        <motion.h2
          className="animatedTeamHeader"
          style={{
            borderBottom: "1px solid darkslategray",
            scale,
            opacity,
          }}
        >
          Our Team <LiaBrushSolid className="brush" />
        </motion.h2>
        <p>
          Omnicos directe al desirabilite de un nov lingua franca: On refusa
          continuar payar custosi traductores.
        </p>
      </div>

      {/* Team Members */}
      <div className="teamMembers">
        {teamData.map((member, index) => (
          <motion.div
            key={member.name}
            className={`teammate teammate${index + 1}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
//             whileHover={{ scale: 1.03 }}
// whileTap={{ scale: 0.97 }}

          >
            <div>
              <Image
                src={member.img}
                alt={member.name}
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
            <h4>{member.name}</h4>
            <h6>{member.title}</h6>

            <div className="floatSocials">
              <button>
                <Link href="/" className="linkStyle">
                  <TiSocialFacebookCircular />
                </Link>
              </button>
              <button>
                <Link href="/" className="linkStyle">
                  <TiSocialLinkedin />
                </Link>
              </button>
              <button>
                <Link href="/" className="linkStyle">
                  <TiSocialTwitter />
                </Link>
              </button>
              <button>
                <Link href="/" className="linkStyle">
                  <TiSocialGooglePlusCircular />
                </Link>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
