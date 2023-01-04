import React from "react";
import "./TrackMetadata.scss";
import { genres } from "../../assets/mockData/genres";
import { languages } from "../../assets/mockData/international";
import Tooltip from "../Tooltip/Tooltip";
import ArtistsAndContributors from "../ArtistsAndContributors/ArtistsAndContributors";

const TrackMetadata = (props) => {

    const {handleTrackChange, track, data} = props;
    
    return(
        <div className="track-editor__display">
            <h3 className="track-editor__display__header">Track Info</h3>
            <div className="track-editor__display__grid">
                <label className="upload-form__label">Title<span className="upload-form__span">*</span></label>
                <label className="upload-form__label">Title Version<Tooltip text="Eg. 'Live', 'Remastered', 'Remix' etc."/></label>
                <input value={track.Title} type="text" name="Title" className="upload-form__input" onChange={handleTrackChange}></input>
                <input value={track.Title_Version} type="text" name="Title_Version" className="upload-form__input" onChange={handleTrackChange}></input>

                <label className="upload-form__label">Primary Genre<span className="upload-form__span">*</span></label>
                <label className="upload-form__label">Secondary Genre</label>
                <div className="upload-form__input">
                    <select value={track.Primary_Genre} className="upload-form__input__select" required name="Primary_Genre" onChange={handleTrackChange}>
                    <option value="" disabled selected>Select...</option>
                    {genres && genres.map((e) => {                       
                        return (                      
                            <option value={e} >{e}</option>
                        );
                    })}
                    </select>
                </div>
                <div className="upload-form__input">
                    <select value={track.Secondary_Genre} className="upload-form__input__select" name="Secondary_Genre" onChange={handleTrackChange}>
                    <option value="" disabled selected>Select...</option>
                    {genres && genres.map((e) => {                       
                        return (                      
                            <option value={e} >{e}</option>
                        );
                    })}
                    </select>
                </div>
            </div>
            <div className="track-editor__display__quad">
                <label className="upload-form__label">ISRC</label>
                <label className="upload-form__label">Audio Language<span className="upload-form__span">*</span><Tooltip text="Language of the lyrics. Select '-No Linguistic Content' for instrumental tracks"/></label>
                <label className="upload-form__label">Advisory<span className="upload-form__span">*</span><Tooltip text="Select 'Explicit' if there is and explicit language, only select 'Clean' if there is already a corresponding Explicit track"/></label>
                <label className="upload-form__label">Clip Start Time</label>
                <input value={track["ISRC"]} type="text" className="upload-form__input" name="IRSC" onChange={handleTrackChange}></input>
                <div className="upload-form__input">
                    <select value={track.Audio_Language} className="upload-form__input__select" required name="Audio_Language" onChange={handleTrackChange}>
                        <option value="" disabled selected>Select...</option>
                        <option value="-No_Linguistic_Content" >-No Linguistic Content</option>
                        {languages && languages.map((e) => {                       
                            return (                      
                                <option value={e} >{e}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="upload-form__input">
                    <select value={track.Advisory} className="upload-form__input__select" name="Advisory" required onChange={handleTrackChange}>
                        <option value="" disabled selected>Select...</option>
                        <option value="None" >None</option>
                        <option value="Explicit" >Explicit</option>
                        <option value="Clean" >Clean</option>
                    </select>
                </div>
                <input value={track.Clip_Start_Time} type="text" className="upload-form__input" name="Clip_Start_Time" onChange={handleTrackChange}></input>
            </div>
            <h3 className="track-editor__display__header">Artists & Contributors</h3>
            <ArtistsAndContributors isTrack={true} handleChange={handleTrackChange} data={track} parentData={data}/>
        </div>
    )
}

export default TrackMetadata;