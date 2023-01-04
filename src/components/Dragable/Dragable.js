import React, {useState} from "react";
import "./Dragable.scss";

const Dragable = (props) => {

    const {roleFields, handleDragableChange, name, index, obj, removeDragable} = props;
    const [newObj, setNewObj] = useState(obj);
    //console.log("dragable in obj:", obj);
    //console.log("dragable content:", newObj);

    const handleNameChange = (e) =>{
        let tempObj = {...newObj};
        tempObj.name = e.target.value;
        setNewObj(tempObj)
        handleDragableChange(newObj, name, index);
    }
    const handleRoleChange = (e) =>{
        let tempObj = {...newObj};
        tempObj.role = e.target.value;
        setNewObj(tempObj)
        handleDragableChange(newObj, name, index);
    }

    return(
        <div className="dragable-container__dragable" >  
            <input value={newObj.name} type="text" className="dragable-container__dragable__input" name={name} onChange={handleNameChange}></input>
            <div className="dragable-container__dragable__input">
                <select value={newObj.role} className="dragable-container__dragable__input__select" name={name} onChange={handleRoleChange}>
                    <option value="" disabled selected>Select...</option>
                    {roleFields && roleFields.map((e) => {                       
                        return (                      
                            <option value={e} >{e}</option>
                        );
                    })}
                </select>
            </div>
            <button className="dragable-container__dragable__button" onClick={() => removeDragable(name, index)}><svg viewBox="0 0 1000 1000" width="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><path d="M640 320L512 192 320 384 128 192 0 320l192 192L0 704l128 128 192-192 192 192 128-128L448 512 640 320z"/></svg></button>
        </div>
    )
}

export default Dragable;
//onChange={(e) => {handleChange("name", e)}}
//<span className="dragable-container__dragable__handle"></span>
//height="1024" width="640"