import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import "./TrackInstantGrat.scss";

const TrackInstantGrat = (props) => {

    const {handleTrackChange, track} = props;

    return(
        <div className="instant-grat">
            <div className="instant-grat__info">
                Instant Grat is only available on tracks if the Pre-Order Date is set in the product metadata, and the product Release Date is in the future.
                <br></br>
                You can specify up to 50% of the product’s tracks as instant-gratification tracks.
            </div>
            <div className="instant-grat__dates">
                <label className="instant-grat__dates__label">Stream Date<span className="upload-form__span">*</span><Tooltip text="The date in which the track becomes available for streaming on Amazon Music Unlimited, Apple Music, and YouTube Music. This date must be on or after the Pre-Order Date."/></label>
                <label className="instant-grat__dates__label">Download Date<span className="upload-form__span">*</span><Tooltip text="The date in which the track becomes available for download on Amazon and iTunes. This date must be on or after the Pre-Order Date."/></label>
                <input className="upload-form__input" value={track.Stream_Date} required type="date" id="start" name="Stream_Date" min="1900-01-01" max="" onChange={handleTrackChange}></input>
                <input className="upload-form__input" value={track.Download_Date} required type="date" id="start" name="Download_Date" min="1900-01-01" max="" onChange={handleTrackChange}></input>
            </div>
        </div>
    )
}

export default TrackInstantGrat;