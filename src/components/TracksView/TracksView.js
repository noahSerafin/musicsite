import React, { useState } from "react";
import TrackList from "../Tracklist/Tracklist";
import TrackEditor from "../TrackEditor/TrackEditor";

const TracksView = (props) => {

    const {handleChange, data} = props;
    const [showList, setShowList] = useState(true);
    const [track, setTrack] = useState(data.Tracks[0]);
    const [indextoEdit, setIndexToEdit] = useState(0);
    const [tracks, setTracks] = useState(data.Tracks);
    
    const editTrack = (e, index) => {
        setTrack(e);
        setIndexToEdit(index);
        setShowList(false);
    }

    const backToList = () => {
        //setTrack(track)
        console.log("backtolist")
        setShowList(true);
    }

    const handleTracksChange = (newTrack) => {
        let newTracks = tracks;
        newTracks[indextoEdit] = newTrack;
        console.log("newTracks:", newTracks);
        //target "Tracks"
        handleChange({"target": {"name": "Tracks", "value": newTracks}});
    }

    const tracksDisplay = () => {
        if(showList===true){
            return(
                <TrackList handleChange={handleChange} editTrack={editTrack} data={data}/>
            )
        } else {
            return(
                <TrackEditor handleChange={handleTracksChange} track={track} data={data} backToList={backToList}/>//pass down method for trackData to go into "Tracks:" array instead of handleChange
            )
        }
    }
    
    return(
        <div className="tracks">
            {tracksDisplay()}
        </div>
    )
}

export default TracksView;