import React from "react";

const UploadFormReview = (props) => {
    const {data} = props;
    console.log(data);
    console.log(data.CoverImg);
    console.log(data.Artists);
    /*data = {
        "Format": "",
        "Title": "",
        "Title_Version": "",
        "Label": "",
        "s": {},

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
        "IRSC": "",
        "Clip_Start_Time": "",

        "Artists": {
            "name": "", "role": "Main Artist"
        },
        "Writers": {},
        "Contributors": {},

        "CoverImg": {}
    }*/

    return(
        <div className="upload-form--step5">
            <p>Your product is set up. You now need to edit track specific metadata to get the release ready for delivery to the DSPs.</p>
            <br></br>
            <div className="upload-form--step5__label">Format: <p>{data.Format.toString()}</p></div>
            <div className="upload-form--step5__label">Title: <p>{data.Title.toString()}</p></div>
            <div className="upload-form--step5__label">Title Version: <p>{data.Title_Version.toString()}</p></div>
            <div className="upload-form--step5__label">Label: <p>{data.Label.toString()}</p></div>
            <div className="upload-form--step5__label">Track: <p>{data.Tracks.toString()}</p></div>
            <br></br>
            <div className="upload-form--step5__label">Primary Genre: <p>{data.Primary_Genre.toString()}</p></div>
            <div className="upload-form--step5__label">Secondary Genre: <p>{data.Secondary_Genre.toString()}</p></div>
            <div className="upload-form--step5__label">Advisory: <p>{data.Advisory.toString()}</p></div>
            <div className="upload-form--step5__label">Recording Location: <p>{data.Recording_Location.toString()}</p></div>
            <div className="upload-form--step5__label">MetaData Language: <p>{data.MetaData_Language.toString()}</p></div>
            <div className="upload-form--step5__label">Audio Language: <p>{data.Audio_Language.toString()}</p></div>
            <div className="upload-form--step5__label">Release Date: <p>{data.Release_Date.toString()}</p></div>
            <div className="upload-form--step5__label">Original Release Date: <p>{data.Original_Release_Date.toString()}</p></div>
            <div className="upload-form--step5__label">Pre-Order Date: <p>{data["Pre-Order_Date"].toString()}</p></div>
            <div className="upload-form--step5__label">UPC/EAN: <p>{data["UPC/EAN"].toString()}</p></div>
            <div className="upload-form--step5__label">IRSC: <p>{data.isrc.toString()}</p></div>
            <div className="upload-form--step5__label">Clip Start Time: <p>{data.Clip_Start_Time.toString()}</p></div>
            <br></br>
            <div className="upload-form--step5__label">Artists: {data.Artists.map((e) => {return(<p>{e.role.toString()}: {e.name.toString()}</p>)})}</div>
            <div className="upload-form--step5__label">Writers: {data.Writers.map((e) => {return(<p>{e.role.toString()}: {e.name.toString()}</p>)})}</div>
            <div className="upload-form--step5__label">Contributors: {data.Contributors.map((e) => {return(<p>{e.role.toString()}: {e.name.toString()}</p>)})}</div>
            <img className="upload-form--step5__img" src={data.CoverImg.toString()} alt="3toneMusic"></img>
        </div>
    )
}

export default UploadFormReview;

/*



*/