import React, {useEffect, useState} from "react";
import "./ProductTape.scss";
//import BuyNowButton from "../BuyNowButton/BuyNowButton";

const ProductTape = (props) => {
   
    const {product, id, name, frontImg, backImg, isFlipped, Centered} = props;
    const [showBack, setShowBack] = useState(false);
    //setShowBack(false);

    const handleFlip = () => {
        setShowBack(!showBack);
    };

    const frontClassName = `${
        showBack ? "--hidden" : "--visible"
    }`

    const backClassName = `${
        showBack ? "--visible" : "--hidden"
    }`
   
    const tapeClassName = `tape-product${showBack ? "--back" : "--front"}`;

    const centeredClassName = `${Centered ? "--centered" : ""}`;

    return (
        <li className={tapeClassName+centeredClassName} key={id}>
            <img className={"product-front" + frontClassName} id = {name + "-front"} src={frontImg} alt="3toneMusic"></img>
            <button className="flip-button" id={tapeClassName+centeredClassName} onClick={handleFlip}>
                <h2 className="flip-button__text">What's Included?</h2>
            </button>
            <img className={"product-back" + backClassName} id={name + "-back"} src={backImg} alt="3toneMusic"></img>                                   
        </li>
    );
}

export default ProductTape;