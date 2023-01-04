import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AccountCancelled.scss";
import Popup from "../../components/Popup/Popup";

const AccountCancelled = () => {

    return(
        <div className="account-cancelled">
            <h1>We’ll Be Sad To See You Go</h1>
            <h1>If there’s anything we can do to help, please get in touch. We’re always looking for ways to improve!</h1>
            <Link to="/support">Tell us why you left</Link>
            <Link to="/home">Back to Homepage</Link>
        </div>
    )
}

export default AccountCancelled;
