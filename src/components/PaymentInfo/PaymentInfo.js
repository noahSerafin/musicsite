import React, { useState } from "react";
import "./PaymentInfo.scss";

const PaymentInfo = ({userCard, close}) => {

    const [cardInfo, setCardInfo] = useState(userCard)
    const saveNewPaymentDetails = () => {
        //stripe update
    }

    return (
        <div className="payment-info-popup-container">
            <div className="payment-info-popup-container__popup">
                <div className="payment-info-popup-container__popup__info">
                    <h4 className="payment-info-popup-container__popup__info__header">Subscription payment info</h4>
                    <label className="payment-info-popup-container__popup__info__label">Card Number</label>
                    <input className="payment-info-popup-container__popup__info__input" value={`xxxx-xxxx-xxxx-${cardInfo.number}`} onChange={(e) => setCardInfo(cardInfo.number = e)}></input>
                    <div className="payment-info-popup-container__popup__info__half-container">
                        <div className="payment-info-popup-container__popup__info__half-container__half">
                            <label className="payment-info-popup-container__popup__info__label">Expiry date</label>
                            <div className="payment-info-popup-container__popup__info__half-container__half__expiry">
                                <input className="payment-info-popup-container__popup__info__half-container__half__expiry__input" onChange={(e) => setCardInfo(cardInfo.expiry.month = e)}></input>
                                <p>/</p>
                                <input className="payment-info-popup-container__popup__info__half-container__half__expiry__input" onChange={(e) => setCardInfo(cardInfo.expiry.year = e)}></input>
                            </div>
                        </div>
                        <div className="payment-info-popup-container__popup__info__half-container__half">
                            <label className="payment-info-popup-container__popup__info__label">Postcode</label>
                            <input className="payment-info-popup-container__popup__info__input" value={cardInfo.postcode}></input>
                        </div>
                    </div>
                    <label className="payment-info-popup-container__popup__info__label">Name on card</label>
                    <input className="payment-info-popup-container__popup__info__input" value={cardInfo.name} onChange={(e) => setCardInfo(cardInfo.name = e)}></input>
                    <div className="payment-info-popup-container__popup__info__third-container">
                        <div className="payment-info-popup-container__popup__info__third-container__third">
                            <div className="payment-info-popup-container__popup__info__third-container__third__security">
                                <label className="payment-info-popup-container__popup__info__label">Security Code</label>
                                <p className="payment-info-popup-container__popup__info__third-container__third__security__ccv-desc">Last 3 digits on the back of the card</p>
                                <input className="payment-info-popup-container__popup__info__input" value={cardInfo.ccv} onChange={(e) => setCardInfo(cardInfo.ccv = e)}></input>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"></path><path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"></path></g></svg>
                            </div>
                        </div>
                        
                        <button className="payment-info-popup-container__popup__info__third-container__third__button" onClick={()=>saveNewPaymentDetails(cardInfo)}>UPDATE</button>
                    </div>
                </div>
                <button className="payment-info-popup-container__popup__close" onClick={()=>close("")}>
                    <svg width="1em" height="1em" viewBox="0 0 64 64"><path fill="currentColor" d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default PaymentInfo;