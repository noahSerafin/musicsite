import React, { useState } from "react";
import { languages } from "../../assets/mockData/international";
import "./TrackLyrics.scss";

const TrackLyrics = (props) => {

    const {handleTrackChange, track} = props;

    const [lyrics, setLyrics] = useState(track.Lyrics);
    const [currentIndex, setCurrentIndex] = useState(0);
    if(lyrics.length > 0){console.log("index:", currentIndex, "current lyric:", lyrics[currentIndex].Lyrics)};

    const handleChange = (e) => {
        console.log("e:", e);
        let newLyrics = lyrics;
        newLyrics[currentIndex] = e;
        setLyrics([...newLyrics]);
        //console.log("newLyrics", newLyrics);
        handleTrackChange({"target": {"name": "Lyrics", "value": lyrics}})
    }
    const handleTypeChange = (e) => { //take name as input and make one function
        let newLyric = lyrics[currentIndex];
        newLyric.Type = e.target.value;
        handleChange(newLyric);
        console.log("lyrics", lyrics)
    }
    const handleLanguageChange = (e) => {
        let newLyric = lyrics[currentIndex];
        newLyric.Language = e.target.value;
        handleChange(newLyric);
    }
    const handleLyricChange = (e) => {
        let newLyric = lyrics[currentIndex];
        newLyric.Lyrics = e.target.value;
        console.log("newLyricChange:", e.target.value)
        handleChange(newLyric);
        console.log("lyrics text:", lyrics)
    }

    const removeLyric = (index) => {
        let newLyrics = [...lyrics];
        newLyrics.splice(index, 1);
        if(newLyrics !== undefined){
            setLyrics([...newLyrics])
        } else {
            //setLyrics([])
        }
        setCurrentIndex(0);
       
    }

    const addLyric = () => {
        console.log("adding a lyric");
        let newLyrics = lyrics;
        newLyrics.push({"Type": "Lyrics", "Language": "English", "Lyrics": ""});
        setLyrics([...newLyrics]);
        setCurrentIndex(lyrics.length-1)
        console.log(newLyrics);
    }

    const editLyrics = () => { //check Dragable for an update state method in inputs
        if(lyrics.length > 0){
            return(
                <div className="lyrics-container__editor__text-editor">
                <label className="lyrics-container__editor__text-editor__format-label">Format</label>
                <label className="lyrics-container__editor__text-editor__language-label">Language</label>       
                <div className="upload-form__input">
                    <select value={lyrics[currentIndex].Type} className="upload-form__input__select" name="MetaData_Language" onChange={handleTypeChange}>
                        <option value="" disabled selected>Select...</option>
                        <option value="Lyrics" >Lyrics</option>
                        <option value="Lyrics TTML" >Lyrics TTML</option>
                        <option value="None" >None</option>
                    </select>
                </div>
                <div className="upload-form__input">
                    <select value={lyrics[currentIndex].Language} className="upload-form__input__select" name="MetaData_Language" onChange={handleLanguageChange}>
                        <option value="" disabled selected>Select...</option>
                            {languages && languages.map((e) => {                       
                                return (                      
                                    <option value={e} >{e}</option>
                                );
                            })}
                    </select>
                </div>
                <textarea type="text" className="lyrics-container__editor__text-editor__input" value={lyrics[currentIndex].Lyrics} onChange={handleLyricChange}></textarea>
                </div>
            )
        } else return (
            <div className="lyrics-container__editor__text-editor"></div>
        )
    }

    if(lyrics.length > 0){ 
        return(
        <div className="lyrics-container">
            <p className="lyrics-container__description">Add lyrics to this track for delivery to Apple Music. Lyrics formatting must follow <a className="lyrics-container__description__link" href="https://help.apple.com/itc/musicstyleguide/?lang=en#/itc3ae5d4dea">Apple’s guidelines.</a></p>
            <div className="lyrics-container__editor">
                <div className="lyrics-container__editor__list">
                    <div className="lyrics-container__editor__list__header-container">
                        <h4 className="lyrics-container__editor__list__header-container__header">Format</h4>
                        <h4 className="lyrics-container__editor__list__header-container__header">Language</h4>
                    </div>
                    {lyrics && lyrics.map((e, index) => { 
                        return(
                            <div className="lyrics-container__editor__list__item">
                                <p className="lyrics-container__editor__list__item__field">{e.Type}</p>
                                <p className="lyrics-container__editor__list__item__field">{e.Language}</p>
                                <div className="lyrics-container__editor__list__item__end">
                                    <button className="lyrics-container__editor__list__item__end__button" onClick={()=> setCurrentIndex(index)}>edit</button>
                                    <button className="lyrics-container__editor__list__item__end__button--svg" onClick={()=> removeLyric(index)}><svg viewBox="0 0 900 900" width="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><path d="M640 320L512 192 320 384 128 192 0 320l192 192L0 704l128 128 192-192 192 192 128-128L448 512 640 320z"/></svg></button>
                                </div>
                            </div>
                        )
                    })}
                    <button className="lyrics-container__editor__list__button" onClick={()=> addLyric()}>Add</button>
                </div>
                {editLyrics()}
            </div>
        </div>    
    )} else {
        return(
        <div className="lyrics-container">
            <p className="lyrics-container__description">Add lyrics to this track for delivery to Apple Music.<br></br> Lyrics formatting must follow <a className="lyrics-container__description__link" href="https://help.apple.com/itc/musicstyleguide/?lang=en#/itc3ae5d4dea">Apple’s guidelines.</a></p>
            <div className="lyrics-container__editor">
                <div className="lyrics-container__editor__list">
                    <div className="lyrics-container__editor__list__header-container">
                        <h4 className="lyrics-container__editor__list__header-container__header">Format</h4>
                        <h4 className="lyrics-container__editor__list__header-container__header">Language</h4>
                    </div>
                <button className="lyrics-container__editor__list__button" onClick={()=> addLyric()}>Add</button>
                </div>
              
            </div>
        </div> 
    )}
}

export default TrackLyrics;