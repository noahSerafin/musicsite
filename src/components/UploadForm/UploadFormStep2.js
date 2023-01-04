import React from "react";
import "./UploadForm.scss";
import { languages, countryList } from "../../assets/mockData/international";
import { genres } from "../../assets/mockData/genres";
import Tooltip from "../Tooltip/Tooltip";

const UploadFormStep2 = (props) => {

    const {handleChange, data} = props;

    return(
        <div className="upload-form--step2">
            <div className="upload-form--step2__half-container--left">
                <label className="upload-form__label">Primary Genre<span className="upload-form__span">*</span></label>
                <div className="upload-form__input">
                    <select value={data.Primary_Genre} className="upload-form__input__select" required name="Primary_Genre" onChange={handleChange}>
                        <option value="" disabled selected>Select...</option>
                        {genres && genres.map((e) => {                       
                            return (                      
                                <option value={e} >{e}</option>
                            );
                        })}
                    </select>
                </div>
                <label className="upload-form__label">Secondary Genre</label>
                <div className="upload-form__input">
                    <select value={data.Secondary_Genre} className="upload-form__input__select" name="Secondary_Genre" onChange={handleChange}>
                        <option value="" disabled selected>Select...</option>
                        {genres && genres.map((e) => {                       
                            return (                      
                                <option value={e} >{e}</option>
                            );
                        })}
                    </select>
                </div>
                <label className="upload-form__label">Advisory<span className="upload-form__span">*</span><Tooltip text="Select 'Explicit' if there is and explicit language, only select 'Clean' if there is already a corresponding Explicit track"/></label>
                <div className="upload-form__input">
                    <select value={data.Advisory} className="upload-form__input__select" name="Advisory" required onChange={handleChange}>
                        <option value="" disabled selected>Select...</option>
                        <option value="None" >None</option>
                        <option value="Explicit" >Explicit</option>
                        <option value="Clean" >Clean</option>
                    </select>
                </div>
                <label className="upload-form__label">Recording Location</label>
                <div className="upload-form__input">
                    <select value={data.Recording_Location} className="upload-form__input__select" name="RecordingLocation" onChange={handleChange}>
                        <option value="" disabled selected>Select...</option>
                        {countryList && countryList.map((e) => {                       
                            return (                      
                                <option value={e} >{e}</option>
                            );
                        })}
                    </select>
                </div>
                <label className="upload-form__label">MetaData Language<span className="upload-form__span">*</span><Tooltip text="Language used for Product and Track titles"/></label>
                <div className="upload-form__input">
                    <select value={data.MetaData_Language} className="upload-form__input__select" required name="MetaData_Language" onChange={handleChange}>
                        <option value="" disabled selected>Select...</option>
                        {languages && languages.map((e) => {                       
                            return (                      
                                <option value={e} >{e}</option>
                            );
                        })}
                    </select>
                </div>
                <label className="upload-form__label">Audio Language<span className="upload-form__span">*</span><Tooltip text="Language of the lyrics. Select '-No Linguistic Content' for instrumental tracks"/></label>
                <div className="upload-form__input">
                    <select value={data.Audio_Language} className="upload-form__input__select" required name="Audio_Language" onChange={handleChange}>
                        <option value="" disabled selected>Select...</option>
                        <option value="-No_Linguistic_Content" >-No Linguistic Content</option>
                        {languages && languages.map((e) => {                       
                            return (                      
                                <option value={e} >{e}</option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="upload-form--step2__half-container">
                <label className="upload-form__label">Release Date<span className="upload-form__span">*</span><Tooltip text="The product will go live to DSPs on this date"/></label>
                <input className="upload-form__input" value={data.Release_Date} required type="date" id="start" name="Release_Date" min="1900-01-01" max="" onChange={handleChange}></input>
                <label className="upload-form__label">Original Release Date<span className="upload-form__span">*</span><Tooltip text="Used to determine the order of an artist's catalogue, select the same date as the 'Release Date' for a new release."/></label>
                <input className="upload-form__input" value={data.Original_Release_Date} required type="date" id="start" name="Original_Release_Date" min="1900-01-01" max="" onChange={handleChange}></input>
                <label className="upload-form__label">Pre-Order Date<Tooltip text="Date the product will be available for pre-order on download stores."/></label>
                <input className="upload-form__input" value={data["Pre-Order_Date"]} type="date" id="start" name="Pre-Order_Date" min="1900-01-01" max="" onChange={handleChange}></input>
                <label className="upload-form__label">UPC/EAN<Tooltip text="Leave this field blank and a UPC will be auto-assigned."/></label>
                <input value={data["UPC/EAN"]} type="text" className="upload-form__input" name="UPC/EAN" onChange={handleChange}></input>
                <label className="upload-form__label">ISRC</label>
                <input value={data.isrc} type="text" className="upload-form__input" name="isrc" onChange={handleChange}></input>
                <label className="upload-form__label">Clip Start Time</label>
                <input value={data.Clip_Start_Time} type="text" className="upload-form__input" name="Clip_Start_Time" onChange={handleChange}></input>
            </div>
        </div>
    )
}

export default UploadFormStep2;