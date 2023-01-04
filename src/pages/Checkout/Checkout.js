import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Checkout.scss";

const Checkout = ({product}) => {

    const { isLoading, isAuthenticated, loginWithRedirect, getAccessTokenSilently } = useAuth0();
    //const [userEmail] = props;
    //const response = hasSubmitted ? (<p className="support__form__response">Thanks for your message!</p>) : ``;

    const handleSubmit = () => {
        

    }

    return (
        <div className="checkout">
            <form className="checkout__form">
            <h1 className="checkout__form__header">Checkout</h1>
            <h2 className="checkout__form__subheader">Billing Address</h2>
                <input type="text" placeholder="First Name" className="checkout__form__input"></input>
                <input type="text" placeholder="Last Name" className="checkout__form__input"></input>
                <input type="text" placeholder="Address Line 1" className="checkout__form__input"></input>
                <input type="text" placeholder="Address Line 2" className="checkout__form__input"></input>
                <div className="checkout__form__billing-half">
                    <input type="text" placeholder="City" className="checkout__form__billing-half__input"></input>
                    <input type="text" placeholder="County/State" className="checkout__form__billing-half__input"></input>
                    <input type="text" placeholder="Country" className="checkout__form__billing-half__input"></input>
                    <input type="text" placeholder="Post/Zip Code" className="checkout__form__billing-half__input"></input>
                </div>
                <div className="checkout__form__order">
                    <h2 className="checkout__form__order__header">Order Summary</h2>
                    <label>Product:</label><div className="checkout__form__order__info">{"product.name"}</div>
                    <label>Total:</label><div className="checkout__form__order__info">{"(product.prices[0].unit_amount / 100).toFixed(2)"}</div>

                </div>
                <h3 className="checkout__form__card-header">Card Details</h3>
                <div className="checkout__form__card">
                    <input type="number" placeholder="0000-0000-0000-0000" className="checkout__form__card__number"></input>
                    <input type="date" placeholder="00/00" className="checkout__form__card__expiry"></input>
                    <input type="number" placeholder="000" className="checkout__form__card__CVV"></input>
                </div>
                
                <button onClick={handleSubmit} className="checkout__form__checkout">Checkout</button>
            </form>
        </div>
    )
}

export default Checkout;
