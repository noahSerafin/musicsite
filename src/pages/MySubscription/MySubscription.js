import React from "react";
import "./MySubscription.scss"
import knAlt2 from "../../assets/img/Asset23n1.jpg";
import { Link } from "react-router-dom";

const MySubscription = (props) => {

    const {setDisplay} = props;
    console.log(props);

    const user = {
        name: "Placeholder",
        isActive: true,
        Sub: "Lite",
        Start: "August 1st 2022",
        Renewal: "August 1st 2023",
        PaymentMethod: 1203,
        BillingAddress: "123 Fake St, Townsford, TW1 1FS",
        profilePic: knAlt2
    };
    const status = (user.isActive ? 'Active' : 'Pending Cancelation');

    return (
        <div className="subscription">
            <h1 className="subscription__header">Hello {user.name}</h1>
            <div className="subscription__user-container">
                <img className="subscription__user-container__img" src={user.profilePic} alt="threetonemusic"></img>
                <div className="subscription__user-container__details">
                    <div className="subscription__user-container__details__detail">
                        <p className="subscription__user-container__details__detail__key">Status:</p>
                        <p className="subscription__user-container__details__detail__value">{status}</p>
                    </div>
                    <div className="subscription__user-container__details__detail">
                        <p className="subscription__user-container__details__detail__key">Subscription Package:</p>
                        <p className="subscription__user-container__details__detail__value">{user.Sub}</p>
                    </div>
                    <div className="subscription__user-container__details__detail">
                        <p className="subscription__user-container__details__detail__key">Start Date:</p>
                        <p className="subscription__user-container__details__detail__value">{user.Start}</p>
                    </div>
                    <div className="subscription__user-container__details__detail">
                        <p className="subscription__user-container__details__detail__key">Payment Renews:</p>
                        <p className="subscription__user-container__details__detail__value">{user.Renewal}</p>
                    </div>
                    <div className="subscription__user-container__details__detail">
                        <p className="subscription__user-container__details__detail__key">Payment Method:</p>
                        <p className="subscription__user-container__details__detail__value">Card ending in {user.PaymentMethod}</p>
                    </div>
                    <div className="subscription__user-container__details__detail">
                        <p className="subscription__user-container__details__detail__key">Billing Address:</p>
                        <p className="subscription__user-container__details__detail__value">{user.BillingAddress}</p>
                    </div>
                    <div className="subscription__user-container__details__buttons">
                        <Link className="subscription__user-container__details__buttons__button" to="settings">Account Settings</Link>
                        <Link className="subscription__user-container__details__buttons__button"  to="/upgrade">Upgrade Account</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MySubscription;

//<button className="subscription__user-container__details__buttons__button" onClick={()=>setDisplay("upgrade")}>Upgrade Account</button>

// <button className="subscription__buttons__button" onClick={() => setDisplay("settings")}>
  //<svg className="subscription__buttons__button__svg" xmlns="http://www.w3.org/2000/svg" width="41.606" height="41.617" viewBox="0 0 41.606 41.617"><path id="Settings" d="M42.671,25.3a5.354,5.354,0,0,1,3.435-4.995,21.222,21.222,0,0,0-2.568-6.187,5.426,5.426,0,0,1-2.178.466,5.342,5.342,0,0,1-4.887-7.519A21.158,21.158,0,0,0,30.3,4.5a5.349,5.349,0,0,1-9.99,0,21.222,21.222,0,0,0-6.187,2.568,5.342,5.342,0,0,1-4.887,7.519,5.249,5.249,0,0,1-2.178-.466,21.691,21.691,0,0,0-2.557,6.2,5.352,5.352,0,0,1,.011,9.99A21.222,21.222,0,0,0,7.079,36.5a5.344,5.344,0,0,1,7.054,7.054,21.346,21.346,0,0,0,6.187,2.568,5.34,5.34,0,0,1,9.968,0,21.222,21.222,0,0,0,6.187-2.568A5.349,5.349,0,0,1,43.527,36.5,21.346,21.346,0,0,0,46.1,30.309,5.379,5.379,0,0,1,42.671,25.3ZM25.4,33.96a8.668,8.668,0,1,1,8.668-8.668A8.666,8.666,0,0,1,25.4,33.96Z" transform="translate(-4.5 -4.5)" fill="#262626"/></svg>
//</button>