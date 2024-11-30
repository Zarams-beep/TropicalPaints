"use client";
import React, { useContext } from "react";
import { FloatContext } from "@/utils/contextProvider";
import { LiaBrushSolid } from "react-icons/lia";
import Link from "next/link";
import { TiSocialFacebookCircular,TiSocialLinkedin,TiSocialGooglePlusCircular,TiSocialTwitter } from "react-icons/ti";
import Image from "next/image";
export default function FourthBody (){
    const context = useContext(FloatContext);

    // Ensure context is available
    if (!context) {
        console.error("FloatContext is not provided.");
        return null;
    }

    const { floatUp } = context;
    return(
        <>
            <section className="fourthPart">
                <div className="TeamService">
                        <h2 style={{borderBottom:'1px solid darkslategray'}}className={`${floatUp<=0.6?'h2Fourth':''}`}>Our Team <LiaBrushSolid className="brush"/></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>
                <div className="teamMembers">

                    {/* Teammate 1 */}
                    <div className={`teammate teammate1 ${floatUp<=0.6?'up':''}`}>
                    <div className="">
                    <Image src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Paulene Andrew" width={1000} height={1000} loading="lazy" />
                    </div>
                        <h4>Paulene Andrew</h4>
                        <h6>Water Color Painter</h6>

                        <div className="floatSocials">
                           <button> <Link href='/' className="linkStyle"><TiSocialFacebookCircular/></Link>
                            </button>
                            <button><Link href='/' className="linkStyle"><TiSocialLinkedin/></Link></button>
                            <button><Link href='/' className="linkStyle"><TiSocialTwitter/></Link></button>
                            <button><Link href='/' className="linkStyle"><TiSocialGooglePlusCircular/></Link></button>
                        </div>
                    </div>

                    {/* Teammate 2 */}
                    <div className={`teammate  teammate2 ${floatUp<=0.6?'up1':''}`}>
                    <div className="">
                    <Image src="/png/luigi-estuye-lucreative-5wKvYUcWPYQ-unsplash.jpg" alt="Paul Isreal" width={1000} height={1000} loading="lazy" />
                    </div>
                        <h4>Paul Isreal</h4>
                        <h6>House Painter</h6>

                        <div className="floatSocials">
                           <button> <Link href='/' className="linkStyle"><TiSocialFacebookCircular/></Link>
                            </button>
                            <button><Link href='/' className="linkStyle"><TiSocialLinkedin/></Link></button>
                            <button><Link href='/' className="linkStyle"><TiSocialTwitter/></Link></button>
                            <button><Link href='/' className="linkStyle"><TiSocialGooglePlusCircular/></Link></button>
                        </div>
                    </div>
                    
                    
                    {/* Teammate 3 */}
                    <div className={`teammate teammate3 ${floatUp<=0.6?'up2':''}`}>
                    <Image src="/png/tim-mossholder-bwbauFRbNyo-unsplash.jpg" alt="Robert Micheal" width={1000} height={1000} loading="lazy" />
                        <h4>Robert Micheal</h4>
                        <h6>Wood Painter</h6>

                        <div className="floatSocials">
                           <button> <Link href='/' className="linkStyle"><TiSocialFacebookCircular/></Link>
                            </button>
                            <button><Link href='/' className="linkStyle"><TiSocialLinkedin/></Link></button>
                            <button><Link href='/' className="linkStyle"><TiSocialTwitter/></Link></button>
                            <button><Link href='/' className="linkStyle"><TiSocialGooglePlusCircular/></Link></button>
                        </div>
                    </div>

                    {/* Teammate 4 */}
                    <div className={`teammate teammate4 ${floatUp<=0.6?'up3':''}`}>
                    <Image src="/png/johan-mouchet-qDLdKMBmC6o-unsplash.jpg" alt="Oliver Josh" width={1000} height={1000} loading="lazy" />
                        <h4>Oliver Josh</h4>
                        <h6>Color Painter</h6>

                        <div className="floatSocials">
                           <button> <Link href='/' className="linkStyle"><TiSocialFacebookCircular/></Link>
                            </button>
                            <button><Link href='/' className="linkStyle"><TiSocialLinkedin/></Link></button>
                            <button><Link href='/' className="linkStyle"><TiSocialTwitter/></Link></button>
                            <button><Link href='/' className="linkStyle"><TiSocialGooglePlusCircular/></Link></button>
                        </div>
                    </div>
                </div>
                </section>
        </>
    )
}