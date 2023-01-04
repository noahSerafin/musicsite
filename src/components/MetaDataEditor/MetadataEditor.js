import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import { genres } from "../../assets/mockData/genres";
import { languages } from "../../assets/mockData/international";
import "./MetadataEditor.scss";
import ArtistsAndContributors from "../ArtistsAndContributors/ArtistsAndContributors";

const MetadataEditor = (props) => {

    const {handleChange, data} = props;
    console.log("metadata", data);
    const date = new Date();
    const year = date.getFullYear();

    return(
        <>
            <div className="metadata-editor__basic-info">
                <div className="metadata-editor__basic-info--left">
                    <h3 className="metadata-editor__basic-info--left__header">Basic Info</h3>
                    <p className="metadata-editor__basic-info--left__header">Key characteristics to make the product discoverable on DSPs.</p>
                    <label className="metadata-editor__basic-info--left__label">Title<span className="upload-form__span">*</span></label>
                    <input value={data.Title} type="text" name="Title" className="metadata-editor__basic-info--left__input" onChange={handleChange}></input>
                    <label className="metadata-editor__basic-info--left__label">Title Version<Tooltip text="Eg. 'Live', 'Remastered', 'Remix' etc."/></label>
                    <input value={data.Title_Version} type="text" name="Title_Version" className="metadata-editor__basic-info--left__input" onChange={handleChange}></input>
                    <label className="metadata-editor__basic-info--left__label">Series<span className="upload-form__span">*</span></label>
                    <input value={data.Series} type="text" name="Series" className="metadata-editor__basic-info--left__input" onChange={handleChange}></input>
                </div>
                <div className="metadata-editor__basic-info--right">
                    <label className="metadata-editor__basic-info--right__label">Release Date<span className="upload-form__span">*</span><Tooltip text="The product will go live to DSPs on this date"/></label>
                    <input className="upload-form__input" value={data.Release_Date} required type="date" id="start" name="Release_Date" min="1900-01-01" max="" onChange={handleChange}></input>
                    <label className="metadata-editor__basic-info--right__label">Original Release Date<span className="upload-form__span">*</span><Tooltip text="Used to determine the order of an artist's catalogue, select the same date as the 'Release Date' for a new release."/></label>
                    <input className="upload-form__input" value={data.Original_Release_Date} required type="date" id="start" name="Original_Release_Date" min="1900-01-01" max="" onChange={handleChange}></input>
                    <label className="metadata-editor__basic-info--right__label">Pre-Order Date<Tooltip text="Date the product will be available for pre-order on download stores."/></label>
                    <input className="upload-form__input" value={data["Pre-Order_Date"]} type="date" id="start" name="Pre-Order_Date" min="1900-01-01" max="" onChange={handleChange}></input>
                </div>
                <div className="metadata-editor__basic-info--bottom">
                        <label className="upload-form__label">Primary Genre<span className="upload-form__span">*</span></label>
                        <label className="upload-form__label">Secondary Genre</label>
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
                        <div className="upload-form__input">
                            <select value={data.Secondary_Genre} className="upload-form__input__select" required name="Secondary_Genre" onChange={handleChange}>
                                <option value="" disabled selected>Select...</option>
                                {genres && genres.map((e) => {                       
                                    return (                      
                                        <option value={e} >{e}</option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
            </div>
            <div className="metadata-editor__product-identification">
                <h3 className="metadata-editor__product-identification__header">Product Identification</h3>
                <p className="metadata-editor__product-identification__header">Unique identifiers for royalty reporting and catalog organization.</p>
                <div className="metadata-editor__product-identification__inputs">
                    <label className="upload-form__label">UPC/EAN<span className="upload-form__span">*</span></label>
                    <label className="upload-form__label">Catalog Number</label>
                    <input className="upload-form__input" value={data["UPC/EAN"].toString()} name="UPC/EAN" onChange={handleChange}></input>
                    <input className="upload-form__input" value={data["Catalog Number"].toString()} name="Catalog Number" onChange={handleChange}></input>
                </div>
            </div>
            <div className="metadata-editor__descriptive-metadata">
                <h3 className="metadata-editor__descriptive-metadata__header">Descriptive Metadata</h3>
                <p className="metadata-editor__descriptive-metadata__header">Supporting information to organize the product on DSPs.</p>
                <div className="metadata-editor__descriptive-metadata__inputs">
                    <label className="upload-form__label">Format<span className="upload-form__span">*</span></label>
                    <label className="upload-form__label">Advisory<span className="upload-form__span">*</span><Tooltip text="Select 'Explicit' if there is and explicit language, only select 'Clean' if there is already a corresponding Explicit track"/></label>

                    <div className="upload-form__input">
                        <select value={data.Format} className="upload-form__input__select" name="Format" onChange={handleChange}>
                            <option value="" disabled selected>Select...</option>
                            <option value="Single" >Single</option>
                            <option value="EP" >EP</option>
                            <option value="Album" >Album</option>
                        </select>
                    </div>
                
                    <div className="upload-form__input">
                        <select value={data.Advisory} className="upload-form__input__select" name="Advisory" required onChange={handleChange}>
                            <option value="" disabled selected>Select...</option>
                            <option value="None" >None</option>
                            <option value="Explicit" >Explicit</option>
                            <option value="Clean" >Clean</option>
                        </select>
                    </div>

                    <label className="upload-form__label">MetaData Language<span className="upload-form__span">*</span><Tooltip text="Language used for Product and Track titles"/></label>
                    <label className="upload-form__label">Audio Language<span className="upload-form__span">*</span><Tooltip text="Language of the lyrics. Select '-No Linguistic Content' for instrumental tracks"/></label>

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
            </div>
            <div className="metadata-editor__artists-contributors">
                <h3 className="metadata-editor__artists-contributors__header">Artists & Contributors</h3>
                <ArtistsAndContributors handleChange={handleChange} data={data}/>
            </div>
            <div className="metadata-editor__rights">
                <h3 className="metadata-editor__descriptive-metadata__header">Rights</h3>
                <p className="metadata-editor__descriptive-metadata__header">Enter the sound recording copyright information for this release. This info is publicly presented on the DSPs as the owner of the recordings.</p>
                <div className="metadata-editor__rights__inputs">
                    <label className="upload-form__label">(C) Info<span className="upload-form__span">*</span></label>
                    <label className="upload-form__label">(P) Year<span className="upload-form__span">*</span></label>
                    <input value={data.Label} type="text" name="Label" className="upload-form__input" onChange={handleChange}></input>
                    <input value={year} type="text" name="Year" className="upload-form__input" onChange={handleChange}></input>

                    <label className="upload-form__label">(C) Info<span className="upload-form__span">*</span></label>
                    <label className="upload-form__label">(P) Year<span className="upload-form__span">*</span></label>
                    <input value={data.Label} type="text" name="Label" className="upload-form__input" onChange={handleChange}></input>
                    <input value={year} type="text" name="Year" className="upload-form__input" onChange={handleChange}></input>

                    <label className="upload-form__label">Rights Holder<span className="upload-form__span">*</span></label>
                    <label className="grid-end"></label>
                    <input value="3tone Music Ltd" type="text" name="Rights" className="upload-form__input" onChange={handleChange}></input>
                    <div className="grid-end"></div>
                </div>          
            </div>
        </>
    )
}

export default MetadataEditor;