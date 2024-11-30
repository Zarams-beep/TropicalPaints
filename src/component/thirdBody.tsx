"use client";
import React, { useContext } from "react";
import { FloatContext } from "@/utils/contextProvider";
import { LiaBrushSolid } from "react-icons/lia";
import { LuPaintbrush2 } from "react-icons/lu";
import { GiSpray, GiPaintBucket, GiPencilBrush, GiTheaterCurtains } from "react-icons/gi";
import { SiCanvas } from "react-icons/si";

export default function ThirdBody (){
    const context = useContext(FloatContext);

    // Ensure context is available
    if (!context) {
        console.error("FloatContext is not provided.");
        return null;
    }

    const { floatUp } = context;

    return(
        <>
            <section className="thirdPart">
                    <div className="paintService">
                        <h2 className={`${floatUp<=0.6?'h2Third':''}`}>Our Pain<span style={{borderBottom:'1px solid darkslategray'}}>ting Services </span>
                        <LiaBrushSolid className="brush"/></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>
                    
                    <div className="paintServiceGird">
                        {/* first part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart':''}`}>
                            <div className="btnMsg">
                                <LuPaintbrush2 style={{transform:'rotate(50deg)'}} className="icon"/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>Regular Painting</h2>
                                <p>Li lingues differe solmen in grammatica <br/>pronunciation commun vocabules.</p>
                            </div>
                        </div>

                        {/* second part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart1':''}`}>
                            <div className="btnMsg">
                                <GiPencilBrush/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>Residential Interior</h2>
                                <p>Li lingues differe solmen in grammatica<br/> pronunciation commun vocabules.</p>
                            </div>
                        </div>

                        {/* third part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart2':''}`}>
                            <div className="btnMsg">
                                <GiSpray/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>Regular Eco Xpress Painting</h2>
                                <p>Li lingues differe solmen in grammatica<br/> pronunciation commun vocabules.</p>
                            </div>
                        </div>

                        {/* fourth part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart3':''}`}>
                        <div className="btnMsg">
                                <SiCanvas/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>Water Proof Solution</h2>
                                <p>Li lingues differe solmen in grammatica<br/> pronunciation commun vocabules.</p>
                            </div>
                        </div>

                        {/* fifth part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart4':''}`}>
                            <div className="btnMsg">
                                <GiPaintBucket/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>Water Solutions</h2>
                                <p>Li lingues differe solmen in grammatica<br/> pronunciation commun vocabules.</p>
                            </div>
                        </div>

                        {/* sixth part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart5':''}`}>
                            <div className="btnMsg">
                                <GiTheaterCurtains/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>House Painting</h2>
                                <p>Li lingues differe solmen in grammatica<br/> pronunciation commun vocabules.</p>
                            </div>
                        </div>
                    </div>
                    
                </section>
        </>
    )
}