import React, { useState } from "react";
import "./AccountSettings.scss";
import Popup from "../../components/Popup/Popup";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";

const AccountSettings = () => {

    const user = {
        name: "Placeholder",
        lastName: "Smith",
        email: "something@gmail.com",
        phoneNumber: "07865372635",
        password: "a string needs hiding",
        isActive: true,
        Sub: "Lite",
        Start: "August 1st 2022",
        Renewal: "August 1st 2023",
        PaymentMethod: {
            number: 1203,
            expiry: {
                month: "",
                year: ""
            },
            postcode: "",
            name: "",
            ccv: ""
        },
        BillingAddress: "123 Fake St, Townsford, TW1 1FS"
    };
    const status = (user.isActive ? 'Active' : 'Pending Cancelation');

    const [accountInfo, setAccountInfo] = useState(user);
    const [password, setPassword] = useState();
    const [popup, setPopup] = useState("");

    const checkPassword = (e) => {
        //check e value is over 8 characters long
        //add to user obj
    }

    const showPaymentDetails = () => {
        //popup
    }

    const changePassword = () => {
        //api call
    }

    const updateDetails = () => {
        //api call
    }

    const cancelSubscription = () => {
        //api
    }

    const handlePopup = (popup) => {
        switch (popup) {
            case "":
                return;
            case "cancelation":
                return <Popup header="Cancel Subscription" text="Are you sure you want to cancel your subscription? Your releases will remain up, but you will not be able to ake any changes to your catalog, or view any analytics or reporting." link="#/cancelled" linkText="I understand, cancel my subscription" setTrigger={setPopup} buttonText="" buttonFunction={cancelSubscription(user)} isClosable={true}/>
            case "changepayment":
                return <PaymentInfo userCard={user.PaymentMethod} close={(setPopup)} />
            default:
                break;
        }
    }

    const cancelationButton = user.isActive ? <button className="account-settings__body__input-container__button--cancel" onClick={()=>setPopup("cancelation")}>Cancel subscription</button> : "";

    return (
        <>
        <div className="account-settings">
            <h1 className="account-settings__header">Account Settings</h1>
            <div className="account-settings__body">
                <div className="account-settings__body__input-container">
                    <p className="account-settings__body__input-container__header">Account Info</p>
                    <input className="account-settings__body__input-container__input" value={accountInfo.email}></input>
                    <input className="account-settings__body__input-container__input" value={accountInfo.password}></input>
                    <input className="account-settings__body__input-container__input" value={accountInfo.name}></input>
                    <input className="account-settings__body__input-container__input" value={accountInfo.lastName}></input>
                    <p className="account-settings__body__input-container__header">Phone Number</p>
                    <input className="account-settings__body__input-container__input"value={accountInfo.phoneNumber}></input>
                    <button className="account-settings__body__input-container__button"  onClick={()=>updateDetails()}>Update my details</button>
                </div>
                <div className="account-settings__body__input-container">
                    <p className="account-settings__body__input-container__header">Change Password</p>
                    <input className="account-settings__body__input-container__input" defaultValue="Current password"></input>
                    <input className="account-settings__body__input-container__input" defaultValue="New password (minimum 8 characters)" onChange={()=>checkPassword()}></input>
                    <input className="account-settings__body__input-container__input" defaultValue="Confirm new password"></input>
                    <button className="account-settings__body__input-container__button" onClick={()=>changePassword()}>Change my Password</button>
                    <button className="account-settings__body__input-container__button" onClick={()=>setPopup("changepayment")}>Payment Information</button>
                    <p></p>
                    {cancelationButton}
                </div>
                
            </div>
            <div className="account-settings__payment-info">
                
            </div>
        </div>
         {handlePopup(popup)}
         </>
    )
}

export default AccountSettings;

//<p className="account-settings__body__input-container__header">Stay in touch</p>