import React, { useState } from "react";
import TrackInstantGrat from "../TrackInstantGrat/TrackInstantGrat";
import TrackLyrics from "../TrackLyrics/TrackLyrics";
import TrackMedia from "../TrackMedia/TrackMedia";
import TrackMetadata from "../TrackMetadata/TrackMetadata";
import "./TrackEditor.scss";

const TrackEditor = (props) => {

    const {handleChange, track, data, backToList} = props;

    const [menuClassName, setMenuClassName] = useState("track-editor__menu metadata");
    const [newTrack, setNewTrack] = useState(track);

    const handleTrackChange = (e) => {
        console.log("adding: ", e, " to track");
        //console.log("name: ", e.target.name);
        //console.log("value: ", e.target.value);
        let newData = {...newTrack, [e.target.name]: e.target.value}
        console.log("newTrack", newData);
        setNewTrack(newData);
        handleChange(newTrack);
    }
    
    const [display, setDisplay] = useState(<TrackMetadata handleTrackChange={handleTrackChange} track={track} data={data}/>);

    const handleDisplay = (display) => {
        setMenuClassName(`track-editor__menu ${display}`);
        switch (display) {
            case "metadata":
                setDisplay(
                   <TrackMetadata handleTrackChange={handleTrackChange} track={track} data={data}/>
                )
                break;
            case "lyrics":
                setDisplay(
                    <TrackLyrics handleTrackChange={handleTrackChange} track={track}/>
                )
                break;
            case "grat":
                setDisplay(
                    <TrackInstantGrat handleTrackChange={handleTrackChange} track={track}/>
                )
                break;
            case "media":
                setDisplay(
                    <TrackMedia />
                )
                break;
            default:
                break;
        }
    }

    return(
        <div className="track-editor">
            <div className="track-editor__header">
                <h4>{track.Title}</h4>
                <h5>{track.Artist}</h5>
                <button className="track-editor__header__button" onClick={()=> backToList()}>Back to track list</button>
            </div>
            <div className={menuClassName}>
                <button className="track-editor__menu__button" onClick={()=>handleDisplay("metadata")}>Track Metadata</button>
                <button className="track-editor__menu__button" onClick={()=>handleDisplay("lyrics")}>Lyrics</button>
                <button className="track-editor__menu__button" onClick={()=>handleDisplay("grat")}>Instant Grat</button>
                <button className="track-editor__menu__button" onClick={()=>handleDisplay("media")}>Media</button>
            </div>
            {display}
        </div>
    )
}

export default TrackEditor;

//<button className="track-editor__header__button" onClick={()=>editTrack(false)}>Back to List</button>