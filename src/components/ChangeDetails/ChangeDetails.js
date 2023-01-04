import React, { useState } from "react";
import "./ChangeDetails.scss"

const ChangeDetails = () => {

    const user = {
        name: "Placeholder",
        isActive: true,
        Sub: "Lite",
        Start: "August 1st 2022",
        Renewal: "August 1st 2023",
        PaymentMethod: 1203,
        BillingAddress: "123 Fake St, Townsford, TW1 1FS"
    };

    const handleSubmit = () =>{
        return null;
    }

    const changeInfo =
        <form className="change-details__container">
            <h1>Change your Details:</h1>
            <label>Username</label><input type="text" defaultValue={user.name} className="change-details__container__input"></input>
            <label>First name</label><input type="text" className="change-details__container__input"></input>
            <label>Last name</label><input type="text" className="change-details__container__input"></input>
            <button onClick={handleSubmit} className="change-details__container__input">Submit</button>
        </form>

    const [content, setContent] = useState(changeInfo);
    const [headerClassName, setHeaderClassName] = useState("change-details__header info");

    const changePassword =
        <form className="change-details__container">
            <h1>Change your Password:</h1>
            <label>Current password</label><input type="text" defaultValue="" className="change-details__container__input"></input>
            <label>New password</label><input type="text" className="change-details__container__input"></input>
            <label>Confirm new password</label><input type="text" className="change-details__container__input"></input>
            <button onClick={handleSubmit} className="change-details__container__input">Submit</button>
        </form>
    
    const changeBilling =
        <form className="change-details__container">
            <h1>Change your payment method:</h1>
            <label>Card Number</label><input type="number" className="change-details__container__input"></input>
            <label>expiry</label><input type="date" className="change-details__container__input"></input>
            <label>CCV</label><input type="number" className="change-details__container__input"></input>
            <button onClick={handleSubmit} className="change-details__container__input">Submit</button>
        </form>
        


    const setContainer = (e) => {
        setHeaderClassName(headerClassName => `change-details__header ${e}`);
        switch (e) {
            case "info":
                setContent(content => changeInfo);
                break;
            case "password":
                setContent(content => changePassword);
                break;
            case "billing":
                setContent(content => changeBilling);
                break;
            default:
                setContent(content => changeInfo);
        }
    }

   

    return (
        <div className="change-details">
            <div className={headerClassName}>
                <button className="change-details__header__nav" onClick={() => setContainer("info")}>Info</button>
                <button className="change-details__header__nav" onClick={() => setContainer("password")}>Password</button>
                <button className="change-details__header__nav end" onClick={() => setContainer("billing")}>Billing</button>  
            </div>
            {content}
        </div>
    )
}

export default ChangeDetails;