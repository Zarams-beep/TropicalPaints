import "@/styles/firstStyle.css";
import "@/styles/secondStyle.css";
import "@/styles/thirdStyle.css";
import "@/styles/fourthStyle.css";
import "@/styles/fifthStyle.css";
import "@/styles/sixthStyle.css";
import "@/styles/sevenStyle.css";
import "@/styles/eightStyle.css";
import IntroPart from "@/component/firstBody";
import FourthBody from "@/component/fourthBody";
import Header from "@/component/header";
import SecondBody from "@/component/seccondBody";
import ThirdBody from "@/component/thirdBody";
import FifthBody from "@/component/fifthBody";
import SixthBody from "@/component/sixthBody";
import SevenBody from "@/component/sevenBody";
import EightBody from "@/component/eightBody";

export default function HomePage (){
    return(
        <>
        <div className="main-container">
        <Header/>
        <IntroPart/>
        <SecondBody/>
        <ThirdBody/>
        <FourthBody/>
        <FifthBody/>
        <SixthBody/>
        <SevenBody/>
        <EightBody/>
        </div>
        </>
    )
}