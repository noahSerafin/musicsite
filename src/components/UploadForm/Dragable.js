import React, {useState} from "react";

const Dragable = (props) => {

    const {roleFields, handleChange, name, index, obj} = props;
    const [newObj, setNewObj] = useState(obj);

    const handleNameChange = (e) =>{
        setNewObj({...newObj, "name": e.target.value})
        handleChange(newObj, name, index);
    }
    const handleRoleChange = (e) =>{
        console.log("e:", e)
        setNewObj({...newObj, "role": e.target.value})
        handleChange(newObj, name, index);
    }

    return(
        <>
            <span className="upload-form--step3__dragable-container__dragable__handle"></span>
            <input value={obj.name} type="text" className="upload-form--step3__dragable-container__dragable__input" name={name} onChange={handleNameChange}></input>
            <div className="upload-form--step3__dragable-container__dragable__input">
                <select value={obj.role} className="upload-form--step3__dragable-container__dragable__input__select" name={name} onChange={handleRoleChange}>
                    <option value="" disabled selected>Select...</option>
                    {roleFields && roleFields.map((e) => {                       
                        return (                      
                            <option value={e} >{e}</option>
                        );
                    })}
                </select>
            </div>
        </>
    )
}

export default Dragable;
//onChange={(e) => {handleChange("name", e)}}