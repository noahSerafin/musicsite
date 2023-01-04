import React from "react";
import { useLocation } from "react-router-dom";
import "./Legal.scss";

const Legal = (props) => {

    const location = useLocation();
    const { state } = location;
    console.log(state.from);

    const pageType = props;

    let contentHeader = "";
    let content = '';
    switch (state.from) {
        case "T&C":
            contentHeader = "terms and conditions"
            break;
        case "Cookies":
            contentHeader = "cookies"
            break;
        case "FAQ":
            contentHeader = "FAQ"
            break;
        case "PrivacyPolicy":
            contentHeader = "Privacy Policy"
            break;
        default:
            break;
    }
    return(
        <div className="legal">
            <div className="legal__header">
                {contentHeader}
            </div>
            <div className="legal__container">
                <div className="legal__container__content">
                    {content}
                </div>               
            </div>
        </div>
    )
}

export default Legal;