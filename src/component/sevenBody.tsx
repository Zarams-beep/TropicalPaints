"use client";
import React, { useContext } from "react";
import { FloatContext } from "@/utils/contextProvider";
import { LiaBrushSolid } from "react-icons/lia";
import Image from "next/image";
export default function SevenBody (){
    const context = useContext(FloatContext);

    // Ensure context is available
    if (!context) {
        console.error("FloatContext is not provided.");
        return null;
    }

    const { floatUp } = context;
    return(
        <>
            <section className="seventhPart">
                    <div className="projectService">
                        <h2 style={{borderBottom:'1px solid darkslategray'}}className={`${floatUp<=0.6?'h2Seven':''}`}>Our Painting Project <LiaBrushSolid className="brush"/></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>

                        <div className="projectShowcase">
                            <div className="project1">
                                <p>
                                <Image src="/png/luigi-estuye-lucreative-5wKvYUcWPYQ-unsplash.jpg" alt="placeholder" width={1000} height={1000} loading="lazy" />
                                </p>
                                <p>
                                <Image src="/png/luigi-estuye-lucreative-5wKvYUcWPYQ-unsplash.jpg" alt="placeholder" width={1000} height={1000} loading="lazy" className="special-img" />
                                  </p>
                            </div>

                            <div className="project2">
                                <p>
                                <Image src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="placeholder" width={1000} height={1000} loading="lazy" />
                                </p>
                                <p><Image src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="placeholder" width={1000} height={1000} loading="lazy" /></p>
                                <p><Image src="/png/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="placeholder" width={1000} height={1000} loading="lazy" /></p>
                            </div>

                            <div className="project1">
                                <p>
                                <Image src="/png/johan-mouchet-qDLdKMBmC6o-unsplash.jpg" alt="placeholder" width={1000} height={1000} loading="lazy" className="special-img"/></p>
                                <p><Image src="/png/johan-mouchet-qDLdKMBmC6o-unsplash.jpg" alt="placeholder" width={1000} height={1000} loading="lazy" /></p>
                            </div>
                        </div>
                </section>
        </>
    )
}