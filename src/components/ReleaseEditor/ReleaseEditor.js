import React, { useState, useRef, useEffect } from "react";
import MetadataEditor from "../MetaDataEditor/MetadataEditor";
import placeHolderCover from "../../assets/img/cd.png";
import TracksView from "../TracksView/TracksView"
import "./ReleaseEditor.scss"
import ReleaseTerritories from "../ReleaseTerritories/ReleaseTerritories";
import ReleaseDeliveries from "../ReleaseDeliveries/ReleaseDeliveries";

const ReleaseEditor = (props) => {

    const {data} = props;
    //console.log("d:", data);
    console.log("data-title:", data.Title);

    const [content, setContent] = useState("Metadata");
    const [productData, setProductData] = useState(data);

    //console.log("productData", productData);

    const handleChange = (e, isDeleting) => {
       if(isDeleting===true){
            console.log("deleting:", e)
            let newData = {...productData}
            newData.Tracks.splice(e);
            console.log(newData);
            setProductData(newData);
        }else{
            console.log("adding:", e);
            //console.log("name: ", e.target.name);
            //console.log("value: ", e.target.value);
            let newData = {...productData, [e.target.name]: e.target.value}
            console.log("newData", productData);

            /* //validation to unhide delivery button
            const checkTracks =() => {
                newData.Tracks.forEach(track => {
                    if( track.Title !== "", track.)
                });
            }
            if(productData.Tracks !== []){

            }*/

            setProductData(newData);
            //console.log("formData:", formData);
        }
        
    }
    
    const handlePage = () => {
        switch (content) {
            case "Metadata": return(
                    <MetadataEditor handleChange={handleChange} data={productData}/>
                )
            case "Tracks": return (
                <TracksView handleChange={handleChange} data={data}/>
            )
            case "Territories": return(
                    <ReleaseTerritories handleChange={handleChange} data={data}/>
                )
            case "Deliveries": return (
                    <ReleaseDeliveries />
                )
            default: return(
                    <MetadataEditor handleChange={handleChange} data={productData}/>
                )
            //break;
        }
    }
    
    const menuClass = `release-editor__editor__menu ${content}`;

    const setLightClass = (status) => {
        if(status === "ready"){
            return "release-editor__product-summary__light-container__light--green"
        } else {
            return "release-editor__product-summary__light-container__light--red"
        }
    }

    return(
        <div className="release-editor">
            <div className="release-editor__message-area"></div>
            <div className="release-editor__product-summary">
                <img className="release-editor__product-summary__img" src={data.CoverImg} alt={placeHolderCover} ></img>
                <div className="release-editor__product-summary__info">
                    <h3 className="release-editor__product-summary__info__header">{data.Title.toString()}</h3>
                    <p className="release-editor__product-summary__info__header">{data.Artists.map((e) => {return(<p>{e.name.toString()}</p>)})}</p>
                    <div className="release-editor__product-summary__info__subheader"><p className="upload-form--step5__label">{data.Format.toString()} .</p><p>{data.Label.toString()} .</p><p>{data.Tracks.length.toString()} Tracks</p></div>
                    
                    <div className="release-editor__product-summary__info__info">Release Date: <p>{data.Title_Version.toString()}</p></div>
                    <div className="release-editor__product-summary__info__info">Smartlink: <p>{data.Label.toString()}</p></div>
                    <div className="release-editor__product-summary__info__info">UPC/EAN: <p>{data["UPC/EAN"]}</p></div>
                    <div className="release-editor__product-summary__info__info">Catalog Number: <p>{data["UPC/EAN"]}</p></div>
                    <div className="release-editor__product-summary__info__info">Genre: <p>{data.Primary_Genre}</p></div>
                </div>
                <span className="release-editor__product-summary__light-container">
                        <p className="release-editor__product-summary__light-container__text">Status: </p><p className="release-editor__product-summary__light-container__text">{data.Published}</p>
                </span>
            </div>
            <div className="release-editor__editor">
                <div className={menuClass}>
                    <button className="release-editor__editor__menu__button" onClick={() => {setContent("Metadata")}}>MetaData</button>
                    <button className="release-editor__editor__menu__button" onClick={() => {setContent("Tracks")}}>Tracks</button>
                    <button className="release-editor__editor__menu__button" onClick={() => {setContent("Territories")}}>Territories</button>
                    <button className="release-editor__editor__menu__button" onClick={() => {setContent("Deliveries")}}>Deliveries</button>
                </div>
                <div className="release-editor__editor__form">
                    {handlePage()}
                </div>
            </div>
        </div>
    )
}

export default ReleaseEditor;

/*
 "Published": false,
        "Format": "",
        "Title": "",
        "Title_Version": "",
        "Label": "",
        "Tracks": {},

        "Primary_Genre": "",
        "Secondary_Genre": "",
        "Advisory": "",
        "Recording_Location": "",
        "MetaData_Language": "",
        "Audio_Language": "",
        "Release_Date": "",
        "Original_Release_Date": "",
        "Pre-Order_Date": "",
        "UPC/EAN": "",
        "ISRC": "",
        "Clip_Start_Time": "",

        "Artists": [{
            "name": "", "role": "Main Artist"
        }],
        "Writers": [],
        "Contributors": [],

        "CoverImg": {}


        //<span className={setLightClass(data.Published)}></span>
*/