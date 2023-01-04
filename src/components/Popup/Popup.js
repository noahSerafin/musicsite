import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Popup.scss";

const Popup = (props) => {

    const {header, text, link, linkText, buttonText, buttonFunction, userType, userTypeReq, isClosable} = props;
    
   // const containerClass = hidePopup ? "" : "";
    //console.log(hidePopup, containerClass)

    const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const checkUser = () =>{
        if(!userTypeReq){
            return true;
        } else if(userType === userTypeReq){
            return true;
        } else {
            return false;
        }
    }

    const closeButton = isClosable ? (
        <button className="popup-container__popup__close" onClick={()=>props.setTrigger("")}>
            <svg width="1em" height="1em" viewBox="0 0 64 64"><path fill="currentColor" d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"></path></svg>
        </button>
    ) : ("")
   
    const conditionalLink = checkUser() ? <a className="popup-container__popup__link" href={link}>{linkText}</a> : <p className="popup-container__popup__text--upgrade">{`You must have a ${userTypeReq} Account to use this feature. Please upgrade `}<a className="popup-container__popup__link--upgrade" href="#/upgrade">here</a>.</p>

    return ( 
        <div className={`popup-container`}>
            <div className="popup-container__popup">
                <h4 className="popup-container__popup__header">{header}</h4>
                <p className="popup-container__popup__text">{text}</p>
                {conditionalLink}
                {closeButton}
                <button className="popup-container__popup__button" onClick={buttonFunction}>{buttonText}</button>
            </div>
        </div>
    )
}

export default Popup;

//<a className="popup-container__popup__link" href={link}>{linkText}</a>
//<Link to={link}>{linkText}</Link>