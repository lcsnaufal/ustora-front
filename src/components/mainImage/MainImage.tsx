import React from "react";
import "./MainImage.css";

import iphone from "../../img/iphone.png";
import blueIcon from "../../img/blueIcon.png"

function MainImage(){
    return(
        <div className = "mainDiv">
            <div>
                <img src = {iphone} alt="" className = "iphoneImg"/>
            </div>
            <div className = "text">
                <div className = "iphoneName">
                    Iphone 6 Plus
                </div>
                <div className = "dualSim">
                    Dual Sim
                </div>
                <div className = "buyNowDiv">
                    <img src= {blueIcon} className = "blueIcon"></img>
                    <div className = "buyNowText">Compre Agora</div>
                </div>
            </div>
        </div>
    )
}

export default MainImage;