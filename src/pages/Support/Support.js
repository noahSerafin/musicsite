import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Support.scss";

const Support = () => {

    //to be replaced with airtable form?

    const [hasSubmitted, setHasSubmitted] = useState(false);
    //const [userEmail setUserEmail] = useState("");
    //useState for other fields
    const supportEmail = "suppport@3tone.co.uk";

    const response = hasSubmitted ? (<p className="support__form__response">Thanks for your message!</p>) : ``;

    const handleSubmit = () => {
        setHasSubmitted(hasSubmitted => true);

        /*var request = new XMLHttpRequest();
        var url = 'https://your_subdomain.zendesk.com/api/v2/tickets/' + ticket_id + '.json';
        request.open('GET', url, true);
        request.setRequestHeader("Authorization", "Bearer " + access_token);
        request.send();*/
    }

    return (
        <div className="support">
            <div className="support__form">
                <h1 className="support__title">Support</h1>
                <label>Email</label><input type="text" defaultValue={"userEmail"} className="support__form__input"></input>
                <label>First name</label><input type="text" className="support__form__input"></input>
                <label>Last name</label><input type="text" className="support__form__input"></input>
                <label>Message Subject</label><input type="text" className="support__form__input"></input>
                <label>Your Message</label><input type="textarea" className="support__form__message"></input>
                <button className="support__form__submit" onClick={()=>handleSubmit()}>Submit</button>
                {response}
            </div>
        </div>
    )
}

export default Support;