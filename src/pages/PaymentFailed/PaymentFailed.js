import React from "react";
import { Link } from "react-router-dom";
import "./PaymentFailed.scss";

const PaymentFailed = () => {

    //get stripe error msg

    return(
        <div className="payment-failed">
            <h1>Your payment was unsuccessful.</h1>
            <h1>If there’s anything we can do to help, please get in touch. We’re always looking for ways to improve!</h1>
            <Link to="/support">Having trouble with your purchase? Let us know.</Link>
            <Link to="/home">Back to Homepage</Link>
        </div>
    )
}

export default PaymentFailed;
