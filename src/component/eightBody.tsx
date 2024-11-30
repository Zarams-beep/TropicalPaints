"use client";
import React, { useContext } from "react";
import { FloatContext } from "@/utils/contextProvider";
import { LiaBrushSolid } from "react-icons/lia";
import Image from "next/image";
export default function EightBody (){
    const context = useContext(FloatContext);

    // Ensure context is available
    if (!context) {
        console.error("FloatContext is not provided.");
        return null;
    }

    const { floatUp } = context;

    return(
        <>
        <section className="eightPart">
        <div className="blogService">
            <h2 style={{borderBottom:'1px solid darkslategray'}}className={`${floatUp<=0.6?'h2Eight':''}`}>Our Blog <LiaBrushSolid className="brush"/></h2>
            <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>

            <div className="blogSlidesContainer">
            {/* test slide 1 */}
            <div className="blogSlide1">
            <Image src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Racheal's Profile Picture" width={1000} height={1000} loading="lazy" />
                <div className="comment">
                    <h4>May 14, 2024</h4>
                    <h2>A Beautiful Daycare</h2>
                    <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                </div>
            </div>
            {/* test slide 2 */}
            <div className="blogSlide2">
            <Image src="/png/tim-mossholder-bwbauFRbNyo-unsplash.jpg" alt="Alex Profile Picture" width={1000} height={1000} loading="lazy" />
                <div className="comment">
                    <h4>May 14, 2024</h4>
                    <h2>A Beautiful Daycare</h2>
                    <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                </div>
            </div>

            {/* test slide 3 */}
            <div className="blogSlide3">
            <Image src="/png/tim-mossholder-bwbauFRbNyo-unsplash.jpg" alt="Alex Profile Picture" width={1000} height={1000} loading="lazy" />
                <div className="comment">
                    <h4>May 14, 2024</h4>
                    <h2>A Beautiful Daycare</h2>
                    <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}