import React from "react";
import "./TrackMedia.scss";

const TrackMedia = () => {

    //get files from backend

    return(
        <div className="track-media">
            <p>All available audio file formats for the track are listed below. When a user uploads a WAV or FLAC file, the remaining file formats are transcoded. You can click “Refresh Media” to refresh the table and show available file formats.</p>
            <p>Click “Regenerate Media” to re-run the transcode process from the source audio file.</p>
            <div className="track-media__options">
                <button className="track-media__options__button">Refresh Table</button>
                <button className="track-media__options__button">Re-Upload File</button>
                <button className="track-media__options__button">Regenerate Media</button>
            </div>
            <div className="track-media__grid">
                <h4 className="track-media__grid__header">Status</h4>
                <h4 className="track-media__grid__header">Format</h4>
                <h4 className="track-media__grid__header">Length</h4>
                <h4 className="track-media__grid__header">Type</h4>
                <h4 className="track-media__grid__header">Size</h4>
                {/* map files here*/}
            </div>
        </div>
    )
}

export default TrackMedia;