//Depreceated, now using ArtistsAndContributors Component//////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import "./UploadForm.scss";
import Dragable from "./Dragable";
import Tooltip from "../Tooltip/Tooltip";

const UploadFormStep3 = (props) => {

    const {handleChange, data} = props;

    const [artists, setArtists] = useState([{name: "", role: "Main Artist"}]);//check for at least one main artist
    const [writers, setWriters] = useState([]);//data.Writers)//being reset here???
    const [contributors, setContributors] = useState([]);//data.Contributors)

    const addDragable = (type) => {
        //console.log("adding a dragable")
        if(type===contributors){
            setContributors([...contributors, {name: "", role: ""}]);
        } else if(type===writers){
            setWriters([...writers, {name: "", role: ""}]);
        } else if(type===artists){
            setArtists([...artists, {name: "", role: ""}])
        }
    }

    const removeDragable = (type, index) => {
        console.log(type, "index: ", index);
        if(type===contributors){
            let newContributors = [...contributors];
            setContributors((newContributors.splice(index, 1)));
            console.log("contributors", contributors)
        } else if(type===writers){
            //let newWriters = writers
            setWriters(writers.splice(index, 1));//possibly optimal
            console.log("writers", writers);
        } else if(type===artists){
            let newArtists = artists;
            setArtists([...(newArtists.splice(index, 1))]);
            console.log(artists)//array is fine, render is limited?
        }
    }

    const handleDragableChange = (e, name, index) => {
        console.log("name:", name)
        console.log("new contrib:", e);
        let newArr;
        if(name ==='Artists'){
            newArr = artists;
        } else if(name === 'Writers'){
            newArr = writers;
        } else if(name ==='Contributors'){
            newArr = contributors;
        }
        
        newArr[index]=e;
        //setArtists(...artists, artists[index]=e);
        console.log("newArr: ", newArr);
        //let newData = {...formData, [e.target.name]: e.target.value}
        //console.log("new:", newData);
        //setFormData(newData);
        //console.log("formData:", formData.updated);
        handleChange({"target": {"name": name, "value": newArr}});
    }

    return(
           <div className="upload-form--step3">
               <div className="upload-form--step3__header-container">
                    <h2 className="upload-form--step3__header-container__header">Artists & Contributors</h2>
                    <p className="upload-form--step3__header-container__description">
                        Enter credits for all relevant Artists & Contributors at the product level. Artists & Contributors should only be credited here if they contribute to every track within the product. Artists & Contributors can be customized for each track within the Track Editor. Please add at least one "Main Artist".
                    </p>
                </div>
               <div className="upload-form--step3__dragable-container">
                    <h3 className="upload-form--step3__dragable-container__header">Artists<Tooltip text="Each arist must be individually credited with a role assingment. Any Release with 4 or more Main Artists and/or Remixers will be flagged as a 'Various artists' compilation on DSPs."/></h3>
                    <div className="upload-form--step3__dragable-container__subheaders">
                        <label className="upload-form--step3__dragable-container__subheaders__label">Name</label>
                        <label className="upload-form--step3__dragable-container__subheaders__label">Role</label>
                    </div>
                    {artists && artists.map((e, index) => {                       
                            return (
                                <div className="upload-form--step3__dragable-container__dragable" >                    
                                    <Dragable roleFields={["Main Artist", "Featured Artist", "Remixer"]} handleChange={handleDragableChange} name={"Artists"} index={index} obj={e}/>
                                    <button className="upload-form--step3__dragable-container__dragable__button" onClick={() => removeDragable(artists, index)}>x</button>
                                </div>
                            );
                        })}
                    <button className="upload-form--step3__dragable-container__button" onClick={() => addDragable(artists)}>Add</button>
               </div>
               <div className="upload-form--step3__dragable-container">
                    <h3 className="upload-form--step3__dragable-container__header">Writers & Publishers<Tooltip text="Enter credits for writers and Publishers here. Do not add them unless they contributed to every track on this release."/></h3>
                    <div className="upload-form--step3__dragable-container__subheaders">
                        <label className="upload-form--step3__dragable-container__subheaders__label">Name</label>
                        <label className="upload-form--step3__dragable-container__subheaders__label">Role</label>
                    </div>
                    <div className="upload-form--step3__dragable-container">
                    {writers && writers.map((e, index) => {                       
                            return (        
                                <div className="upload-form--step3__dragable-container__dragable" >              
                                    <Dragable roleFields={["Composer", "Lyricist", "Song Writer", "Publisher"]} handleChange={handleDragableChange} name={"Writers"} index={index} obj={e}/>
                                    <button className="upload-form--step3__dragable-container__dragable__button" onClick={() => removeDragable(writers, index)}>x</button>
                                </div>
                            );
                        })}
                        <button className="upload-form--step3__dragable-container__button" onClick={() => addDragable(writers)}>Add</button>
                    </div>
               </div>
               <div className="upload-form--step3__dragable-container">
                    <h3 className="upload-form--step3__dragable-container__header">Additional Contributors<Tooltip text="Enter credits for studio presonnel and additional contributors here. Do not add them unless they contributed to every track on this release."/></h3>
                    <div className="upload-form--step3__dragable-container__subheaders">
                        <label className="upload-form--step3__dragable-container__subheaders__label">Name</label>
                        <label className="upload-form--step3__dragable-container__subheaders__label">Role</label>
                    </div>
                    <div className="upload-form--step3__dragable-container">
                        {contributors && contributors.map((e, index) => {                       
                            return (       
                                <div className="upload-form--step3__dragable-container__dragable" >               
                                    <Dragable roleFields={["Producer", "Engineer", "Master Engineer", "Mixer", "Arranger", "Vocalist", "Choir", "Conductor", "Orchestra", "Soloist", "Performer", "Ensemble", "Other"]} handleChange={handleDragableChange} name={"Contributors"} index={index} obj={e}/>
                                    <button className="upload-form--step3__dragable-container__dragable__button" onClick={() => removeDragable(contributors, index)}>x</button>
                                </div>
                            );
                        })}
                        <button className="upload-form--step3__dragable-container__button" onClick={() => addDragable(contributors)}>Add</button>
                    </div>
               </div>
                           
            </div>
    )
}

export default UploadFormStep3;

/*
 <button onClick={handleBack}>Back</button>               
<button onClick={handleNext}>Next</button>  
*/