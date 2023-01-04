import React from "react";
import { Link } from "react-router-dom";
import "./PurchaseSuccess.scss";

const PurchaseSuccess = () => {

    //get stripe error msg

    return(
        <div className="payment-success">
            <h1>Your payment was Successful!</h1>
            <h1>If there’s anything we can do to help, please get in touch. We’re always looking for ways to improve!</h1>
            <Link to="/my-account">Check out your Dashboard</Link>
        </div>
    )
}

export default PurchaseSuccess;
