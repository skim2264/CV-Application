import React, { useState } from "react";
import ExperienceItem from "./ExperienceItem";
import ExperienceForm from "./ExperienceForm";
import uniqid from "uniqid";

const Experience = () => {
    const [experienceList, setExperienceList] = useState([{
        compName: 'company/group name',
                city: 'city',
                posName: 'position name',
                years: 'Years in position',
                descrip: 'Description of position',
                id: uniqid(),
                formtoggle: false
    }])
    const [experience, setExperience] = useState({
        compName: '',
                city: '',
                posName: '',
                years: '',
                descrip: '',
                id: '',
                formtoggle: false
    })
    const [divHovered, setDivHovered] = useState(false);
    const [editing, setEditing] = useState(false);
    const [addNew, setAddNew] = useState(false);
    const [addNewKey, setAddNewKey] = useState("");

    const toggleButtons = (e) => {
        if (!editing && !addNew) {
            setDivHovered(!divHovered);
        }
      }

    const deleteButton = (e) => {
        const targetId = e.target.parentElement.parentElement.id;
        const index = experienceList.findIndex((item) => item.id === targetId);

        if (experienceList.length === 1) {
            setExperienceList([]);
        } else {
            setExperienceList(experienceList.splice(index-1, 1))
        };
    }

    const addButton = (e) => {
        setAddNew(true);
        setAddNewKey(uniqid());
    }

    const cancelButton = (e) => {
        const targetId = e.target.parentElement.parentElement.id;

        setExperienceList(experienceList.map(
            el => el.id === targetId ? {...el, formtoggle: false}: el
        ));
        setEditing(false);

        if (addNew) {
            setAddNew(false);
        }
        resetExperience();
    }

    const editButton = (e) => {
        if (!editing) {
            const targetId = e.target.parentElement.parentElement.id;
            const index = experienceList.findIndex((item) => item.id === targetId);

            setExperienceList(experienceList.map(
                el => el.id === targetId ? {...el, formtoggle: true}: el
            ));
            setExperience(experienceList[index]);
            setEditing(true);
        } else {
            alert("Only edit one section at a time.");
        }
        
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setExperience({
            ...experience,
            [name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        const targetId = e.target.id;
        if (addNew) {
            setEditing(false);
            setExperienceList([...experienceList, experience]);
            setAddNew(false);
        } else {
            setEditing(false);
            setExperienceList(experienceList.map(
                el => el.id === targetId ? experience : el
            ))
        }
        resetExperience();
    }

    const resetExperience = () => {
        setExperience({
            compName: '',
            city: '',
            posName: '',
            years: '',
            descrip: '',
            id: '',
            formtoggle: false
        })
    }

    return(
        <div className="componentsDiv" onMouseEnter={toggleButtons} onMouseLeave={toggleButtons}>
            {experienceList.map((item) => {
                if (item.formtoggle) {
                    return <ExperienceForm id={item.id} submitForm={submitForm} handleChange={handleChange} experience={experience} cancelButton={cancelButton} key={item.id}></ExperienceForm>
                } else {
                    return <ExperienceItem item={item} deleteButton={deleteButton} editButton={editButton} toggleButtons={toggleButtons} divHovered={divHovered} key={item.id}></ExperienceItem>
                }
            })}
            {addNew ? <ExperienceForm submitForm={submitForm} handleChange={handleChange} experience={experience} cancelButton={cancelButton} key={addNewKey}></ExperienceForm>: null}
    
            <button onClick={addButton}>+</button>
        </div>
    );
}

export default Experience;