import React, { useState } from "react";
import "./ArtistsAndContributors.scss";
import Tooltip from "../Tooltip/Tooltip";
import Dragable from "../Dragable/Dragable";

const ArtistsAndContributors = (props) => {

    const {isTrack, handleChange, data, parentData} = props;
    //console.log("data.Artists:", data.Artists);
    const [artists, setArtists] = useState(data.Artists);//check for at least one main artist
    const [writers, setWriters] = useState(data.Writers);//data.Writers)//being reset here???
    const [contributors, setContributors] = useState(data.Contributors);//data.Contributors)

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
        if(type==="Contributors"){
            let newContributors = [...contributors];
            newContributors.splice(index, 1);
            setContributors(newContributors);
            console.log("contributors remaining", contributors);
        } else if(type==="Writers"){
            let newWriters = [...writers];
            newWriters.splice(index, 1);
            setWriters(newWriters);
            console.log("writers remaining", writers);
        } else if(type==="Artists"){
            let newArtists = [...artists];
            newArtists.splice(index, 1)
            setArtists(newArtists);
            console.log("artists remaining:", artists)
        }
    }

    const handleDragableChange = (e, name, index) => {
        //console.log("name:", name, "index:", index, "incoming change:", e)
        //console.log("new contrib:", e);
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
        //console.log("newArr of", name, newArr);
        //let newData = {...formData, [e.target.name]: e.target.value}
        //console.log("new:", newData);
        //setFormData(newData);
        //console.log("formData:", formData.updated);

        handleChange({"target": {"name": name, "value": newArr}});
    }

    const copyFromRelease = () => {
        setArtists(parentData.Artists);
        setWriters(parentData.Writers);
        setContributors(parentData.Contributors);
    }

    const copyHolder = isTrack ? 
                <div className="artists-and-contributors__inheritor">
                <p className="artists-and-contributors__inheritor__description">Copy Artists & Contributors from release data to all tracks.</p>
                <button className="artists-and-contributors__inheritor__button" onClick={()=>copyFromRelease()}>Copy Info</button>
                </div>
                :""

    return(
        <div className="artists-and-contributors">
               <div className="artists-and-contributors__header-container">
                    <p className="artists-and-contributors__header-container__description">
                        Enter credits for all relevant Artists & Contributors at the product level. Artists & Contributors should only be credited here if they contribute to every track within the product. Artists & Contributors can be customized for each track within the Track Editor. Please add at least one "Main Artist".
                    </p>
                    {copyHolder}
                </div>
               <div className="artists-and-contributors__dragable-container">
                    <h3 className="artists-and-contributors__dragable-container__header">Artists<Tooltip text="Each arist must be individually credited with a role assingment. Any Release with 4 or more Main Artists and/or Remixers will be flagged as a 'Various artists' compilation on DSPs."/></h3>
                    <div className="artists-and-contributors__dragable-container__subheaders">
                        <label className="artists-and-contributors__dragable-container__subheaders__label">Name</label>
                        <label className="artists-and-contributors__dragable-container__subheaders__label">Role</label>
                    </div>
                    {artists && artists.map((e, index) => {                        
                            return (                                    
                                <Dragable roleFields={["Main Artist", "Featured Artist", "Remixer"]} handleDragableChange={handleDragableChange} name={"Artists"} index={index} obj={e} removeDragable={removeDragable}/>
                            );
                        })}
                    <button className="artists-and-contributors__dragable-container__button" onClick={() => addDragable(artists)}>Add +</button>
               </div>
               <div className="artists-and-contributors__dragable-container">
                    <h3 className="artists-and-contributors__dragable-container__header">Writers & Publishers<Tooltip text="Enter credits for writers and Publishers here. Do not add them unless they contributed to every track on this release."/></h3>
                    <div className="artists-and-contributors__dragable-container__subheaders">
                        <label className="artists-and-contributors__dragable-container__subheaders__label">Name</label>
                        <label className="artists-and-contributors__dragable-container__subheaders__label">Role</label>
                    </div>
                    {writers && writers.map((e, index) => {                       
                            return (        
                                <Dragable roleFields={["Composer", "Lyricist", "Song Writer", "Publisher"]} handleDragableChange={handleDragableChange} name={"Writers"} index={index} obj={e} removeDragable={removeDragable}/>
                            );
                        })}
                    <button className="artists-and-contributors__dragable-container__button" onClick={() => addDragable(writers)}>Add +</button>
               </div>
               <div className="artists-and-contributors__dragable-container">
                    <h3 className="artists-and-contributors__dragable-container__header">Additional Contributors<Tooltip text="Enter credits for studio presonnel and additional contributors here. Do not add them unless they contributed to every track on this release."/></h3>
                    <div className="artists-and-contributors__dragable-container__subheaders">
                        <label className="artists-and-contributors__dragable-container__subheaders__label">Name</label>
                        <label className="artists-and-contributors__dragable-container__subheaders__label">Role</label>
                    </div>
                        {contributors && contributors.map((e, index) => {                       
                            return (       
                                <Dragable roleFields={["Producer", "Engineer", "Master Engineer", "Mixer", "Arranger", "Vocalist", "Choir", "Conductor", "Orchestra", "Soloist", "Performer", "Ensemble", "Other"]} handleDragableChange={handleDragableChange} name={"Contributors"} index={index} obj={e} removeDragable={removeDragable}/>
                            );
                        })}
                    <button className="artists-and-contributors__dragable-container__button" onClick={() => addDragable(contributors)}>Add +</button>
               </div>
                           
            </div>
    )
}

export default ArtistsAndContributors;

//<h2 className="artists-and-contributors__header-container__header">Artists & Contributors</h2>