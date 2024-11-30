// "use client";
import { GiPaintRoller } from "react-icons/gi";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer>
        
        <div className="painterContainer">
          <div className="iconsLogo1">
            <GiPaintRoller className="rolling-footer"/>
            <p>Tropical Paints</p>
          </div>
          <div className="notes">
            <p>
              Omnicos directe al desirabilite de un nov lingua franca: On refusa
              continuar payar custosi traductores.
            </p>
          </div>
        </div>

        <div className="recentPost">
          <h2>Recent Post</h2>
          <div className="mainrecentPost">
            <div className="smallGirdPost1">
              <p className="img-p">
                <Image
                  src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg"
                  alt="footer picture"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  quality={75}
                />
              </p>
              <div className="girdNotes">
                <h3>Omnicos directe</h3>
                <p>
                  Omnicos directe al desirabilite de un nov lingua franca: On
                  refusa continuar.
                </p>
              </div>
            </div>
            <div className="smallGirdPost2">
              <p className="img-p">
                <Image
                  src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg"
                  alt="homepage picture"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  quality={75}
                />
              </p>
              <div className="girdNotes">
                <h3>Omnicos directe</h3>
                <p>
                  Omnicos directe al desirabilite de un nov lingua franca: On
                  refusa continuar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="instagramPost">
          <h2>Instagram Post</h2>
          <div className="instagram-gird">
            <Image
              src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg"
              alt="homepage picture"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
            />
            <Image
              src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg"
              alt="homepage picture"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
            />
            <Image
              src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg"
              alt="homepage picture"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
            />
            <Image
              src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg"
              alt="homepage picture"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
            />
            <Image
              src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg"
              alt="homepage picture"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
            />
            <Image
              src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg"
              alt="homepage picture"
              width={1000}
              height={1000}
              loading="lazy"
              quality={75}
            />{" "}
          </div>
        </div>

        <div className="contactInfo">
          <h2>Contact Info</h2>
          <p>
            <FaRegMap className="cp" /> M1304 Minna, Niger State.
          </p>
          <p>
            <MdOutlineEmail className="cp" /> placeholder@check.com
          </p>
          <p>
            <FaSquarePhone className="cp" /> 12004569999
          </p>
        </div>
      </footer>
    </>
  );
}
