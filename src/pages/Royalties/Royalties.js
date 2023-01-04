import userEvent from "@testing-library/user-event";
import React from "react";
import "./Royalties.scss";

const Royalties = () => {

    //import totals
    //import user
    const user = {
        Royalties: 2342.12,
        Total_Royalties: 4532.32,
        Royalty_Statements: [
         {
            Date: "13/05/2022",
            out: true, 
            balance: 1093
         },
         {
            Date: "13/05/2022",
            out: true, 
            balance: 1093
         },
         {
            Date: "13/05/2022",
            out: false, 
            balance: 1093
         },
         {
            Date: "13/05/2022",
            out: true, 
            balance: 1093
         },
         {
            Date: "13/05/2022",
            out: true, 
            balance: 1093
         },
         {
            Date: "13/05/2022",
            out: true, 
            balance: 1093
         },
         {
            Date: "13/05/2022",
            out: false, 
            balance: 1093
         },
         {
            Date: "13/05/2022",
            out: true, 
            balance: 1093
         }
        ]
    }
    //check user status
    const sales = user.Royalty_Statements;
    console.log(sales);


    const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return(
        <div className="royalties-container">
            <div className="royalties-container__header-container">
                <h1 className="royalties-container__header-container__header">Royalties</h1>
            </div>
            <div className="royalties-container__totals">
                <div className="royalties-container__totals__table">
                    <div className="royalties-container__totals__table__headers">
                        <h5 className="royalties-container__totals__table__headers__header">Date</h5>
                        <h5 className="royalties-container__totals__table__headers__header">Transaction</h5>
                        <h5 className="royalties-container__totals__table__headers__header">Available Balance</h5>
                    </div>
                    <div className="royalties-container__totals__table__grid">
                        {sales && sales.map((sale) => {
                            return(
                                <div className="royalties-container__totals__table__grid__row">
                                    <p>{sale.Date}</p>
                                    <p>Royalties {sale.out ? "paid out" : "earned"}</p>
                                    <p>£{sale.balance}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="royalties-container__totals__total-container">
                    <div className="royalties-container__totals__total-container__total">
                        <h5 className="royalties-container__totals__total-container__total__header">Royalties Remaining</h5>
                        <p className="royalties-container_totals__total-container__total__value">£{user.Royalties}</p>
                    </div>
                    <div className="royalties-container__total-container">
                        <p className="royalties-container__totals__total-container__text">Royalty payments aren’t done automatically, you’ll need to request royalties first. Payouts are made on a monthly basis.</p>
                        <p className="royalties-container__totals__total-container__text">Please be aware, we only receive reports on royalties from DSP’s approximately two to three months after the streams take place as they require time to correctly process and allocate the amount that you have earned.</p>
                    </div>
                    <div className="royalties-container__totals__total-container__request">
                        <button className="royalties-container__totals__total-container__request__button">Request Royalties</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Royalties;