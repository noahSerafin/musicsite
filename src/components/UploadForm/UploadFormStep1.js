import React, { useState, useRef } from "react";
import "./UploadForm.scss";
import Tooltip from "../Tooltip/Tooltip";

const UploadFormStep1 = (props) => {

    const {handleChange, data} = props;
    const dummyUser =    {"labels" : ["3tone", "label2", "3Soul"]}
    
    const labels = dummyUser.labels;
    

    const [fileList, setFileList] = useState([]);
    const [trackInfoList, setTrackInfoList] = useState([]);
    const [trackIndex, setTrackIndex] = useState(0);

    const wrapperRef = useRef(null);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');
    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        //newFile.isUploading = true;
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            console.log("files:", fileList);
            //upload to backend
            const data = new FormData();
            data.append(
                newFile.name,
                newFile,
                newFile.name
            )
            //axios??

            //handleChange({"target": {"name": "Tracks", "value": fileList}});

            let trackList = [... trackInfoList];
            trackList[trackIndex].Title = newFile.name;
            setTrackInfoList(trackList);
            handleChange({"target": {"name": "Tracks", "value": trackInfoList}});
        }
    }

    return(
        <div className="upload-form--step1">
            <div className="upload-form--step1__left">
                <label className="upload-form__label">Format<span className="upload-form__span">*</span></label>
                <div className="upload-form__input">
                    <select value={data.Format} className="upload-form__input__select" name="Format" onChange={handleChange}>
                        <option value="" disabled selected>Select...</option>
                        <option value="Single" >Single</option>
                        <option value="EP" >EP</option>
                        <option value="Album" >Album</option>
                    </select>
                </div>
                <label className="upload-form__label">Title<span className="upload-form__span">*</span></label>
                <input value={data.Title} type="text" name="Title" className="upload-form__input" onChange={handleChange}></input>
                <label className="upload-form__label">Title Version<Tooltip text="Eg. 'Live', 'Remastered', 'Remix' etc."/></label>
                <input value={data.Title_Version} type="text" name="Title_Version" className="upload-form__input" onChange={handleChange}></input>
                <label className="upload-form__label">Label<span className="upload-form__span">*</span></label>
                <div className="upload-form__input">
                    <select value={data.Label} className="upload-form__input__select" name="Label" onChange={handleChange}>
                        <option value="" disabled selected>Select...</option>
                        {labels && labels.map((e) => {                      
                            return (                      
                                <option value={e} >{e}</option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="upload-form--step1__right">
                <div className="upload-form__uploader"
            
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}>
                    <h3 className="upload-form__label">Upload Audio Files</h3>
                    <svg className="upload-form__uploader__drop-zone__svg" aria-hidden="true" role="img" id="footer-sample-full" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M15.213 6.639c-.276 0-.546.025-.809.068C13.748 4.562 11.716 3 9.309 3c-2.939 0-5.32 2.328-5.32 5.199c0 .256.02.508.057.756a3.567 3.567 0 0 0-.429-.027C1.619 8.928 0 10.51 0 12.463S1.619 16 3.617 16H8v-4H5.5L10 7l4.5 5H12v4h3.213C17.856 16 20 13.904 20 11.32c0-2.586-2.144-4.681-4.787-4.681z"></path></svg>
                    <div className="upload-form__uploader__drop-zone__text">Drag and Drop files to upload or</div>
                    <div className="upload-form__uploader__input-container">
                        <input className="upload-form__uploader__input-container__input"
                        
                        accept="file_extension|.wav|.flac"
                        multiple type="file"
                        autoComplete="off"
                        tabIndex="-1"
                        onChange={onFileDrop}
                        ></input>
                        <button className="upload-form__uploader__input-container__button">
                            <svg className="upload-form__uploader__nput-container__button__svg" role="img" id="footer-sample-full" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"></path><path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z"></path></svg>
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadFormStep1;

//<h2 className="upload-form__header">General</h2>
//onChange={onFileDrop}