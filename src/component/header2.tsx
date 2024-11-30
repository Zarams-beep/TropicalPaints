import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { BsEnvelopeAt } from "react-icons/bs";
import { useEffect, useState } from "react";
import "@/styles/header.css";
import { MdPhonelinkRing } from "react-icons/md";

export default function Header2() {
  const [isSticky, setSticky] = useState(1);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [is992, setIs992] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 100;
      setSticky(Math.max(1 - scrollTop / maxScroll, 0.6));
    };

    const updateWindowWidth = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIs992(width <= 992);
    };

    updateWindowWidth();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSubMenu = () => setIsOpen2((prev) => !prev);

  return (
    <>
      <header className={`secondHeader ${isSticky <= 0.6 ? "stickyIt" : ""}`}>
        <section className="secondSection">
          {/* Social Media Links for Mobile View */}
          {is992 && (
            <div className="socials">
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
          )}

          {/* Main Navigation for Desktop */}
          {!is992 && (
            <div className="navigatePages">
              <p className="linkHome">Home</p>
              <p className="linkAbout">About Us</p>
              <p className="linkPages">Pages</p>
              <p className="linkService">Services</p>
              <p className="linkProject">Projects</p>
              <p className="linkContact">Contact</p>
            </div>
          )}

          {/* Appointment Button for Desktop */}
          {!is992 && (
            <div className="appointContainer">
              <button>
                <FaRegCalendarAlt />
                <span>Make An Appointment</span>
              </button>
            </div>
          )}

          {/* Mobile Menu */}
          {is992 && (
            <div className="flexAppoint">
              <p>
                <FaRegCalendarAlt />
              </p>
              <div className="menuStyle">
                <p className="flexLeft" onClick={toggleMenu}>
                  {isOpen ? <RxCross2 /> : <IoMdMenu />}
                </p>

                {isOpen && (
                  <div className={`navigatePages2 ${isOpen? 'navigateOpen':''}`}>
                    <p className="linkHome">Home</p>
                    <p className="linkAbout">About Us</p>
                    <p className="linkPages">Pages</p>
                    <p className="linkService">Services</p>
                    <p className="linkProject">Projects</p>
                    <div className="linkContact" onClick={toggleSubMenu}>
                      <div className="contact-flex">
                        <p>Contact</p>
                        <p className="arrowContact">{isOpen2 ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
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
                )}
              </div>
            </div>
          )}
        </section>
      </header>
    </>
  );
}

const iconStyle = {
  fontSize: "1.5rem",
  borderRight: "1px solid white",
  paddingRight: "8px",
};
