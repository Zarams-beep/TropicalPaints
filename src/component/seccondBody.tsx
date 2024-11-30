"use client";
import React, { useContext } from "react";
import { FloatContext } from "@/utils/contextProvider";
import { LiaBrushSolid } from "react-icons/lia";
import { LuPaintbrush } from "react-icons/lu";
import { RiPaintBrushFill } from "react-icons/ri";
import { GiSpray, GiDrippingKnife, GiPaintBucket } from "react-icons/gi";
import { SiCanvas } from "react-icons/si";

export default function SecondBody() {
    // Consume the FloatContext
    const context = useContext(FloatContext);

    // Ensure context is available
    if (!context) {
        console.error("FloatContext is not provided.");
        return null;
    }

    const { floatUp } = context;

    return (
        <>
            <div className="">
                <section className="secondPart">
                    <div className="chooseUs">
                        <h2 className={`${floatUp <= 0.6 ? "increase" : ""}`}>
                            W
                            <span style={{ borderBottom: "1px solid darkslategray" }}>
                                hy Choose Us 
                            </span>
                            <LiaBrushSolid className="brush" />
                        </h2>
                        <p>
                            Omnicos directe al desirabilite de un nov lingua franca: On refusa
                            continuar payar custosi traductores.
                        </p>
                    </div>

                    <div className="gridchooseUs">
                        {/* Small Container 1 */}
                        <div className={`smallcontainer1 ${floatUp <= 0.6 ? "up" : ""}`}>
                            <LuPaintbrush className="icons" />
                            <h2>Window Washing</h2>
                            <p>
                                Li lingues differe solmen in grammatica <br />
                                pronunciation commun vocabules.
                            </p>
                        </div>

                        {/* Small Container 2 */}
                        <div className={`smallcontainer2 ${floatUp <= 0.6 ? "up1" : ""}`}>
                            <GiSpray className="icons" />
                            <h2>Color Proof</h2>
                            <p>
                                Li lingues differe solmen in grammatica pronunciation commun
                                vocabules.
                            </p>
                        </div>

                        {/* Small Container 3 */}
                        <div className={`smallcontainer3 ${floatUp <= 0.6 ? "up2" : ""}`}>
                            <GiDrippingKnife className="icons" />
                            <h2>Mildew Removal</h2>
                            <p>
                                Li lingues differe solmen in grammatica pronunciation commun
                                vocabules.
                            </p>
                        </div>

                        {/* Small Container 4 */}
                        <div className={`smallcontainer4 ${floatUp <= 0.6 ? "up3" : ""}`}>
                            <RiPaintBrushFill className="icons" />
                            <h2>Faux Finishes</h2>
                            <p>
                                Li lingues differe solmen in grammatica pronunciation commun
                                vocabules.
                            </p>
                        </div>

                        {/* Small Container 5 */}
                        <div className={`smallcontainer5 ${floatUp <= 0.6 ? "up4" : ""}`}>
                            <GiPaintBucket className="icons" />
                            <h2>Water Proofing</h2>
                            <p>
                                Li lingues differe solmen in grammatica pronunciation commun
                                vocabules.
                            </p>
                        </div>

                        {/* Small Container 6 */}
                        <div className={`smallcontainer6 ${floatUp <= 0.6 ? "up5" : ""}`}>
                            <SiCanvas className="icons" />
                            <h2>Pre-Point Demo</h2>
                            <p>
                                Li lingues differe solmen in grammatica pronunciation commun
                                vocabules.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
