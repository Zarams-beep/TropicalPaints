"use client";
import React, { useContext } from "react";
import { FloatContext } from "@/utils/contextProvider";
import { LiaBrushSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
export default function FifthBody (){
    const context = useContext(FloatContext);

    // Ensure context is available
    if (!context) {
        console.error("FloatContext is not provided.");
        return null;
    }

    const { floatUp } = context;
    return(
        <>
            <section className="fifthPart">
                <div className="priceService">
                        <h2 style={{borderBottom:'1px solid darkslategray'}}className={`${floatUp<=0.6?'h2Fifth':''}`}>Our Price <LiaBrushSolid className="brush"/></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>
                        
                        <div className="fifthFlex">

                            {/* single visit */}
                            <div className={`singleVisit ${floatUp<=0.6?'sideleft':''}`}>
                                <div className="singleVisit1">
                                <h2>SINGLE VISIT</h2>
                                <button>$45<br/><span className="it">/Month</span></button>
                                </div>
                                <div className="singleVisit2">
                                    <p><FaCheck style={{color:'darkslategray'}}/>  2 Workers</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/>  15 Days</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/> Extra Feature</p>
                                    <p><MdCancel style={{color:'darkred'}}/> On Demand</p>
                                    <p style={{ color:'gray'}} className="another-p">Extra Charges are based on Extra Work taken.</p>
                                    <button>Buy Service</button>
                                </div>

                            </div>

                            {/* On demand */}
                            <div className={`demand ${floatUp<=0.6?'sideright':''}`}>
                                <div className="demand1">
                                <h2>ON DEMAND</h2>
                                <button>$125<br/><span className="it">/Month</span></button>
                                </div>
                                <div className="demand2">
                                    <p><FaCheck style={{color:'darkslategray'}}/> 5 Workers</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/> 5 Days</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/> Extra Feature</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/> On Demand</p>
                                    <p style={{ color:'gray'}} className="another-p">Extra Charges are based on Extra Work taken.</p>
                                    <button>Buy Service</button>
                                </div>

                            </div>

                            {/* maintain */}
                            <div className={`maintain ${floatUp<=0.6?'sideright':''}`}>
                                <div className="maintain1">
                                <h2>MAINTENANCE</h2>
                                <button>$130<br/><span className="it">/Month</span></button>
                                </div>
                                <div className="maintain2">
                                    <p><FaCheck style={{color:'darkslategray'}}/>  3 Workers</p>
                                    <p><MdCancel style={{color:'darkred'}}/> 15 Days</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/>  Extra Feature</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/>  On Demand</p>
                                    <p style={{ color:'gray'}} className="another-p">Extra Charges are based on Extra Work taken.</p>
                                    <button>Buy Service</button>
                                </div>

                            </div>
                        </div>
                        </section>
        </>
    )
}