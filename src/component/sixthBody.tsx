"use client";
import React, { useContext } from "react";
import { FloatContext } from "@/utils/contextProvider";
import Image from "next/image";
import { LiaBrushSolid } from "react-icons/lia";
export default function SixthBody (){
    const context = useContext(FloatContext);

    // Ensure context is available
    if (!context) {
        console.error("FloatContext is not provided.");
        return null;
    }

    const { floatUp } = context;
    return(
        <>
            <section className="sixthPart">
                <div className="testService">
                        <h2 style={{borderBottom:'1px solid darkslategray'}}className={`${floatUp<=0.6?'h2Six':''}`}>Our Testimonial <LiaBrushSolid className="brush"/></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>
                    
                    <div className="testSlidesContainer">
                        {/* test slide 1 */}
                        <div className="testSlide1">
                            <div className="slide-img-cont">
                            <Image src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Racheal Paul" width={1000} height={1000} loading="lazy" />
                            </div>
                            <div className="comment">
                                <h3>Racheal Paul</h3>
                                <h4>CEO</h4>
                                <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                            </div>
                        </div>
                        {/* test slide 2 */}
                        <div className="testSlide2">
                        <div className="slide-img-cont">
                        <Image src="/png/tim-mossholder-bwbauFRbNyo-unsplash.jpg" alt="Alex Mucheal" width={1000} height={1000} loading="lazy" />
                        </div>
                            <div className="comment">
                                <h3>Alex Mucheal</h3>
                                <h4>HR Manager</h4>
                                <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}