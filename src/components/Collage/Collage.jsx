import React from "react";
import "./Collage.scss"

const Collage = (props) => {

    const { img1, img2, img3, img4, img5 } = props;

    return (
        <div className="collage">
            <img className="collage__img" id="collage-img1" src={img1} alt="3tone Music"></img>
            <img className="collage__img" id="collage-img2" src={img2} alt="3tone Music"></img>
            <img className="collage__img" id="collage-img3" src={img3} alt="3tone Music"></img>
            <img className="collage__img" id="collage-img4" src={img4} alt="3tone Music"></img>
            <img className="collage__img" id="collage-img5" src={img5} alt="3tone Music"></img>
        </div>
    )
}

export default Collage;