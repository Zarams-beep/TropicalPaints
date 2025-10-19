"use client";

import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsEnvelopeAt } from "react-icons/bs";
import { MdPhonelinkRing } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import "@/styles/header.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Pages", path: "/pages" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Header2() {
  const [isSticky, setSticky] = useState(1);
  const [is992, setIs992] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 100;
      setSticky(Math.max(1 - scrollTop / maxScroll, 0.6));
    };

    const updateWindowWidth = () => {
      setIs992(window.innerWidth <= 992);
    };

    updateWindowWidth();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const toggleSubMenu = () => setIsOpen2((prev) => !prev);

  return (
    <>
      <header className={`secondHeader ${isSticky <= 0.6 ? "stickyIt" : ""}`}>
        <section className="secondSection">
          {/* Mobile Social Icons */}
          {is992 && (
            <div className="socials">
              <button>
                <Link href="/facebook"><FaFacebookF /></Link>
              </button>
              <button>
                <Link href="/whatsapp"><FaWhatsapp /></Link>
              </button>
              <button>
                <Link href="/x"><FaTwitter /></Link>
              </button>
            </div>
          )}

          {/* Desktop Navigation */}
          {!is992 && (
            <div className="navigatePages">
              {/** 🔧 FIX: Hide "Contact" from main nav when screen is small */}
              {navItems
                .filter(item => !(is992 && item.name === "Contact"))
                .map(item => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`nav-link ${pathname === item.path ? "active" : ""}`}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          )}

          {/* Desktop Appointment Button */}
          {!is992 && (
            <div className="appointContainer">
              <button>
                <FaRegCalendarAlt />
                <span>Make An Appointment</span>
              </button>
            </div>
          )}

          {/* Mobile Menu Trigger */}
          {is992 && (
            <div className="flexAppoint">
              <p><FaRegCalendarAlt /></p>
              <div className="menuStyle">
                <IconButton onClick={() => setDrawerOpen(true)}>
                  <IoMdMenu />
                </IconButton>
              </div>
            </div>
          )}
        </section>
      </header>

      {/* Drawer Navigation */}
      {is992 && (
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <div style={{ width: 300, padding: "1.5rem" }}>
            <div className="drawer-header">
              <IconButton onClick={() => setDrawerOpen(false)}>
                <RxCross2 />
              </IconButton>
            </div>

            <div className="navigatePagesMedia">
              {/** Contact excluded because it’s handled below with dropdown */}
              {navItems
                .filter(item => item.name !== "Contact")
                .map(item => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`nav-link ${pathname === item.path ? "active" : ""}`}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>

            {/* Contact SubMenu */}
            <div className="linkContact" onClick={toggleSubMenu}>
              <div className="contact-flex">
                <p>Contact</p>
                <p className="arrowContact">
                  {isOpen2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </p>
              </div>
            </div>

            {isOpen2 && (
              <div className="subMenu">
                <div className="phoneNumber">
                  <MdPhonelinkRing style={iconStyle} />
                  <div className="divNumbers">
                    <p><Link href="tel:+1234567890">+1 (234) 567 890</Link></p>
                    <p><Link href="tel:+1234567890">+1 (234) 567 890</Link></p>
                  </div>
                </div>

                <div className="mail">
                  <BsEnvelopeAt style={iconStyle} />
                  <div className="mailList">
                    <Link href="mailto:youremail@example.com">youremail@example.com</Link>
                    <Link href="mailto:youremail@example.com">youremail@example.com</Link>
                  </div>
                </div>

                <div className="location">
                  <FaMapMarkerAlt style={iconStyle} />
                  <p className="address">
                    3742 Graystone Lakes, <br />
                    Macon GA Georgia, GA 307
                  </p>
                </div>
              </div>
            )}
          </div>
        </Drawer>
      )}
    </>
  );
}

const iconStyle = {
  fontSize: "1.5rem",
  borderRight: "1px solid white",
  paddingRight: "8px",
};
