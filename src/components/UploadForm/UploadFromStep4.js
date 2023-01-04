import React, {useRef, useState} from "react";

const UploadFormStep4 = ({handleChange}) => {

    const [file, setFile] = useState({});

    const imgWrapperRef = useRef(null);

    const onDragEnter = () => imgWrapperRef.current.classList.add('dragover');
    const onDragLeave = () => imgWrapperRef.current.classList.remove('dragover');
    const onDrop = () => imgWrapperRef.current.classList.remove('dragover');
    const onFileDrop = (e) => {
        const newFile = e.target.files;
        setFile(newFile);
        handleChange({"target": {"name": "CoverImg", "value": newFile}});
        console.log(file);
    }

    return(
        <div className="upload-form--step4">
            <div className="upload-form__uploader"
            
            ref={imgWrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}>
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
            <div className="upload-form--step4__right">
                <p className="upload-form--step4__description">Artwork must be submitted as:</p>
                <p>3000 x 3000 pixels</p>
                <p>300 DPI</p>
            </div>
        </div>
    )
}

export default UploadFormStep4;