import React, { useState } from "react";
import { countryList } from "../../assets/mockData/international";
import "./ReleaseTerritories.scss";

const ReleaseTerritories = (props) => {

    const {handleChange, data} = props;
    const [showTerritories, setShowTerritories] = useState(false);
    const [territories, setTerritories] = useState(data.Territories);
    console.log("data.t:", territories)

    const hideListClass = showTerritories ? "no-border" : "";

    const territoriesSelect = (inState) =>{
        console.log(inState)
        if(inState==="hide"){
            console.log("hiding territ");
            setShowTerritories(false);
            setTerritories("None Chosen");
        } else if(inState==="show"){
            setShowTerritories(true);
        }
        console.log(showTerritories, territories);
    }

    const handleTerritoriesChange = (e) => {
        console.log(e.target.checked);
        console.log(e.target.name);
        let newTerritories = territories;
        console.log("before ifs", newTerritories);
        if(territories === "None Chosen" || !Array.isArray(territories)){
            console.log("nothing chosen, add this territ")
            if (!e.target.checked){
                return
            } else if (e.target.checked){
                newTerritories = [e.target.name]
            }
        } else if(e.target.checked === false && newTerritories.length > 0) {
            console.log("removing item...")
            var index = newTerritories.indexOf(e.target.name);
            newTerritories.splice(index, 1);
            console.log(newTerritories)
            if(newTerritories.length === 0){
                newTerritories = "None Chosen";
            }
        } else if (e.target.checked){
            console.log("pushing item...")
            newTerritories.push(e.target.name);
        }       
        console.log("after ifs", newTerritories);
        setTerritories(newTerritories);
        handleChange({"target": {"name": "Territories", "value": territories}})
    }

    const checkCheckboxes = false;

    return(
        <>
            <h4 className="territories__header">Territories</h4>
            <p>Control the territories in which your release is made available. By default, the release is set to deliver to the territories in your label settings. Open the Territory Restrictions editor to block availability in specific territories.</p>
            <fieldset className={`release-territories ${hideListClass}`}>
                <input className="release-territories__input"
                    type="radio"
                    name="selectTerritories"
                    defaultChecked
                    
                    value={!showTerritories}
                    onClick={() => territoriesSelect("hide")}>
                </input>
                <label>Deliver product to label default  (Delivers Worldwide)</label>
                <input className="release-territories__input"
                    type="radio"
                    name="selectTerritories"
                    value={showTerritories}
                    onClick={() => territoriesSelect("show")}>
                </input>
                <label>Block delivery in certain territories  ({ Array.isArray(territories)?[...territories.map((territory) => {return(<p className="p--inline">{territory}, </p>)})]:<p className="p--inline">None Chosen</p>})</label>
            </fieldset>
            <div className="release-territories-select">
                {showTerritories ? 
                <fieldset className="release-territories__territories">
                {countryList && countryList.map((country) => {                       
                    return (
                        <div className="release-territories__territories__territory">          
                            <input type="checkbox" name={country} defaultChecked={false} onChange={(e) => handleTerritoriesChange(e)}></input>
                            <label>{country}</label>
                        </div>
                    );
                })}
                </fieldset>
                : "" }  
            </div>
        </>
    )
}

export default ReleaseTerritories;

//<select value={data.Recording_Location} className="upload-form__input__select" name="RecordingLocation" onChange={handleTerritoriesChange}>
//<option value="" disabled selected>Select...</option>

//</select>