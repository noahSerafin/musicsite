//import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState, useRef, useEffect } from "react";
import "./UploadForm.scss";
import UploadFormStep1 from "./UploadFormStep1";
import UploadFormStep2 from "./UploadFormStep2";
import UploadFormStep3 from "./UploadFormStep3";
import UploadFormStep4 from "./UploadFromStep4";
import UploadFormReview from "./UploadFormReview";
import ArtistsAndContributors from "../ArtistsAndContributors/ArtistsAndContributors";

const UploadForm = (props) => {

    const {editProduct} = props;

    const dummyUser =    {"labels" : ["3tone", "label2", "3Soul"]}
    const labels = dummyUser.labels;

    const [formState, setFormState] = useState(1);
    //const [headerText, setHeaderText] = useState("General");
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        "Published": "incomplete",
        "Format": "",
        "Title": "",
        "Title_Version": "",
        "Label": "",
        "Tracks": [],

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
        "isrc": "",
        "Clip_Start_Time": "",
        "Catalog Number": "",

        "Artists": [{
            "name": "", "role": "Main Artist"
        }],
        "Writers": [],
        "Contributors": [],

        "CoverImg": {},
    })

    const checkForMainArtist = () => {
        let bool = false;
        formData.Artists.forEach(artist => {
            if(artist.role === "Main Artist" && artist.name !== ""){
                console.log("role:",artist.role)
                console.log("name", artist.name)
                bool = true;
            } 
        });
        return bool;
    }

    const next = () => {
        console.log("next")
        if(formState === 1){
            if(formData.Format !== "" && formData.Title !== "" && formData.Label !== "" && formData.Track !== {}){
                setFormState(2);
                setError(false);
            } else{setError(true)}
        } else if (formState === 2){
            if (formData.Primary_Genre !== "" && formData.Advisory !== "" && formData.MetaData_Language !== "" && formData.Audio_Language !== "" && formData.Release_Date !== "" && formData.Original_Release_Date !== ""){
                setFormState(3);
                setError(false);
            } else{setError(true)}
        } else if (formState === 3){
            if(checkForMainArtist() === true){
                //console.log(checkForMainArtist(formData.Artists));
                setFormState(4);
                console.log(formState);
                setError(false);
            } else{setError(true)}
        } else if (formState === 4){
            if(formData.CoverImg !== {}){
                setFormState(5);
                setError(false);
            } else{setError(true)}
        }
    }
    const back = () => {
        if(formState >= 2){
            setFormState(formState-1);
            setError(false);
        }
        console.log("state:", formState);
    }

    const handlePage = () => {
        switch (formState) {
            case 1: return(
                    <UploadFormStep1 handleChange={handleChange} data={formData}/>
                )
            case 2: return (
                    <UploadFormStep2 handleChange={handleChange} data={formData}/>
            )
            case 3: return(
                    <ArtistsAndContributors isTrack={false} handleChange={handleChange} data={formData}/>
                )
            case 4: return (
                    <UploadFormStep4 handleChange={handleChange} data={formData}/>
                )
            case 5: return (
                    <UploadFormReview data={formData}/>
                )
            default: return(
                    <UploadFormStep1 handleChange={handleChange} data={formData}/>
                )
            //break;
        }
    }
    const errorText = () => {
        if (!error) {
            return (<span></span>); 
        } else if(formState===3 && error){
            return(<span>Releases need at least one Main Artist</span>)
        }else {
            return(<span>Please fill out the required<span className="upload-form__span">*</span> fields</span>)
        } 
    }
    const hideSubmit = `${(5===formState)?"upload-form__submit":"upload-form__submit--hidden"}`;
    const hideBack = `${(1===formState)?"upload-form__bottom__back--hidden":"upload-form__bottom__back"}`;
    const hideNext = `${(5===formState)?"upload-form__bottom__next--hidden":"upload-form__bottom__next"}`;
    const handleHeader = () => {
        switch (formState) {
        case 1:
            return "General"
        case 2:
            return "Recording Information"
        case 3:
            return "Artists & Contributors"
        case 4:
            return "Upload Artwork"
        case 5:
            return "Review"
        default:
            break;
    }}

    const handleChange = (e) => {
        console.log("adding:", e);
        //console.log("name: ", e.target.name);
        //console.log("value: ", e.target.value);
        let newData = {...formData, [e.target.name]: e.target.value}
       
        setFormData(newData);
        console.log("newData:", newData);
    }

    const handleSubmit = (event) => {
        //save data to backend
        console.log('handlesubmit ran');
        //load track editor

        //const value = data.get('');
        const value = formData;
        console.log(value);
    }

    useEffect( () => {//for testing purposes
        console.log("newFormData:", formData);
    }, [formData] );
    
    return(
        <>
        <div className="upload-form" onSubmit={handleSubmit}>
            <div className="upload-form__header">
                <h2 className="upload-form__header__header">{handleHeader()}</h2>
                <div className={`upload-form__header__progress${formState}`}><p>1</p><p>2</p><p>3</p><p>4</p></div>
            </div>
            {handlePage()}
            <div className="upload-form__bottom">
            <button className={hideBack} onClick={() => back()}>Prev</button>
            <div className="upload-form__error-text">{errorText()}</div>
            <button className={hideNext}  onClick={() => next()}>Next</button>
            </div>
            
            <button className={hideSubmit} onClick={()=>editProduct(formData)}>Edit Tracks</button>
        </div>
        
        </>
    )
}

export default UploadForm;

/*

<label className="upload-form__label">Format<span className="upload-form__span">*</span></label>
            <div className="upload-form__input">
                <select className="upload-form__input__select" name="Format" onChange={handleChange}>
                    <option value="" disabled selected>Select...</option>
                    <option value="Single" >Single</option>
                    <option value="EP" >EP</option>
                    <option value="Album" >Album</option>
                </select>
            </div>
            <label className="upload-form__label">Title<span className="upload-form__span">*</span></label>
            <input type="text" name="Title" className="upload-form__input" onChange={handleChange}></input>
            <label className="upload-form__label">Title Version<span className="upload-form__tooltip">i</span></label>
            <input type="text" name="Title_Version" className="upload-form__input" onChange={handleChange}></input>
            <label className="upload-form__label">Label<span className="upload-form__span">*</span></label>
            <div className="upload-form__input">
                <select className="upload-form__input__select" name="label" onChange={handleChange}>
                    <option value="" disabled selected>Select...</option>
                    {labels && labels.map((e) => {                      
                        return (                      
                            <option value={e} >{e}</option>
                        );
                    })}
                </select>
            </div>
            
            <div className="upload-form__uploader"
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}>
                <svg className="upload-form__uploader__drop-zone__svg" aria-hidden="true" role="img" id="footer-sample-full" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M15.213 6.639c-.276 0-.546.025-.809.068C13.748 4.562 11.716 3 9.309 3c-2.939 0-5.32 2.328-5.32 5.199c0 .256.02.508.057.756a3.567 3.567 0 0 0-.429-.027C1.619 8.928 0 10.51 0 12.463S1.619 16 3.617 16H8v-4H5.5L10 7l4.5 5H12v4h3.213C17.856 16 20 13.904 20 11.32c0-2.586-2.144-4.681-4.787-4.681z"></path></svg>
                <div className="upload-form__uploader__drop-zone__text">Drag and Drop files to upload</div>
                <input className="upload-form__uploader__drop-zone__input"
                
                accept=".wav,.flac"
                multiple type="file"
                autoComplete="off"
                tabIndex="-1"
                onChange={onFileDrop}
                ></input>
            </div>

            */