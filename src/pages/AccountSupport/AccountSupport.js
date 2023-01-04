import React from "react";
import "./AccountSupport.scss";

const AccountSupport = () => {

    const sendSupportMsg = () => {

    }

    return(
        <div className="account-support">
            <h1 className="account-support__header">Support</h1>
            <div className="account-support__halver">
                <div className="account-support__halver__left">
                    <input className="account-support__halver__left__email"></input>
                    <input type="textarea" className="account-support__halver__left__msg">
                        
                    </input>
                    <button className="account-support__halver__left__button" onClick={()=>sendSupportMsg()}>Send</button>
                </div>
                <div className="account-support__halver__right">
                    <p>lorem ipsum ashfa fsaifn askfba oabsfjs fksf, efnjn aoieu knfd jjjueh asfsa niwe. asdl asjd asj afow falk dwk akf wfka lwf  falawejf  wj fqwfq wfljq wfalkf alskfs g rkja s fdbk akl adkfb kals dfjv akj dklv alkdsj kvaj fbka DSLKBJ skdbvSD, Fj rv sJV OSR VSie bVS. F JASEFJBSABD FAKJS </p>
                </div>
            </div>
        </div>
    )
}

export default AccountSupport;