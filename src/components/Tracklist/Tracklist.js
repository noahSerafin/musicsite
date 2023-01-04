import React, { useState, useEffect } from "react";
import Tooltip from "../Tooltip/Tooltip";
import "./Tracklist.scss";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const TrackList = (props) => {

    const {handleChange, data, editTrack} = props;
    const [tracks, setTracks] = useState(data.Tracks);
    const starterBankClasses = () => {
        let buttonBankClassesArr = [];
        tracks.forEach((track, index) => {
            buttonBankClassesArr[index] = "--hidden" 
        })
        console.log(buttonBankClassesArr)
        return buttonBankClassesArr;
    }
    const [buttonBankClasses, setButtonBankClasses] = useState(starterBankClasses);
    
    const showBank = (className, i) => {
        //console.log(className, i)
        let newclassArr = buttonBankClasses;
        if (className === "--hidden"){
            console.log("showing")
            newclassArr[i] = "";
            setButtonBankClasses(newclassArr);
        } else {
            console.log("hiding")
            newclassArr[i] = "--hidden";
            setButtonBankClasses(newclassArr);
        }
        console.log(buttonBankClasses[i])
        setTracks(tracks);
    }
    const handleDelete = (i, bool) =>{
        let newTracks = tracks;
        newTracks.splice(i, 1);
        console.log("newTracks", newTracks);
        setTracks(newTracks);

        handleChange(i, bool);
    }

    //useEffect( () => {//refresh button visibilty
      //  console.log("button refresh");
    //}, [buttonBankClasses] );

    return(
        <div className="tracklist">
            <div className="tracklist__header">
                <p>In order to create additional tracks, audio files must be uploaded in one of the supported formats.<Tooltip text="-HD WAV 24-bit @ 44.1, 48, 88.2, 96, 0r 192kHz <br> -HD FLAC 24-bit @ 44.1, 48, 88.2, 96, 0r 192kHz <br> -WAV (16bit @ 44.1kHz) <br> -FLAC (16bit @ 44.1kHz)"/></p>
            </div>
            
            <div className="tracklist__top">
                <h3 className="tracklist__top__header">#</h3>
                <h3 className="tracklist__top__header">Track Title</h3>
                <h3 className="tracklist__top__header">Flags</h3>
                <h3 className="tracklist__top__header">Display Artist</h3>
                <h3 className="tracklist__top__header">ISRC</h3>
                <h3 className="tracklist__top__header">Length</h3>
                <h3 className="tracklist__top__header">Media</h3>
                <h3 className="tracklist__top__header--end"></h3>
            </div>
            <div className="tracklist__tracklist">
                {tracks && tracks.map((track, index) => {
                    return(
                        <div className="tracklist__tracklist__track">
                            <p>{index + 1}</p>
                            <p>{track.Title}</p>
                            <p>{track.Flags}</p>
                            <p>{track.Artist}</p>
                            <p>{track["ISRC"]}</p>
                            <p>{track.Length}</p>
                            <p>{track.Track}</p>
                            <button className="tracklist__tracklist__track__button" >
                                <div className={`tracklist__tracklist__track__button__button-bank${buttonBankClasses[index]}`}>
                                    <button className="tracklist__tracklist__track__button__button-bank__button" onClick={()=> editTrack(track, index)}>Edit</button>
                                    <AudioPlayer audio={track.audio} />
                                    <button className="tracklist__tracklist__track__button__button-bank__button" onClick={()=> handleDelete(index, true)}>Delete</button>
                                </div>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default TrackList;
//onClick={()=> showBank(buttonBankClasses[index], index)}
//<svg className="tracklist__tracklist__track__button__icon" xmlns="http://www.w3.org/2000/svg" width="41.606" height="41.617" viewBox="0 0 41.606 41.617"><path id="Settings" d="M42.671,25.3a5.354,5.354,0,0,1,3.435-4.995,21.222,21.222,0,0,0-2.568-6.187,5.426,5.426,0,0,1-2.178.466,5.342,5.342,0,0,1-4.887-7.519A21.158,21.158,0,0,0,30.3,4.5a5.349,5.349,0,0,1-9.99,0,21.222,21.222,0,0,0-6.187,2.568,5.342,5.342,0,0,1-4.887,7.519,5.249,5.249,0,0,1-2.178-.466,21.691,21.691,0,0,0-2.557,6.2,5.352,5.352,0,0,1,.011,9.99A21.222,21.222,0,0,0,7.079,36.5a5.344,5.344,0,0,1,7.054,7.054,21.346,21.346,0,0,0,6.187,2.568,5.34,5.34,0,0,1,9.968,0,21.222,21.222,0,0,0,6.187-2.568A5.349,5.349,0,0,1,43.527,36.5,21.346,21.346,0,0,0,46.1,30.309,5.379,5.379,0,0,1,42.671,25.3ZM25.4,33.96a8.668,8.668,0,1,1,8.668-8.668A8.666,8.666,0,0,1,25.4,33.96Z" transform="translate(-4.5 -4.5)" fill="#393939"/></svg>