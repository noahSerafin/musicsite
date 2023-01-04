import React, { useState } from "react";

const ButtonBank = (props) => {

    const {buttons, functions, className, hide} = props;
    //const [isHidden, setIsHidden] = useState(true);
    
    return(
        <div className="button-bank">
        {buttons.map((button, index) => {
            return(
                <button className={className} onClick={()=>{functions[index]}}>{button}</button>
            )
        })}
        </div>
    )
}

export default ButtonBank;