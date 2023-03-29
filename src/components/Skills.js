import React, { useState } from "react";
import Buttons from "./Buttons";
import uniqid from 'uniqid';
import SkillsForm from "./SkillsForm";

const Skills = () => {
    const [skillsList, setSkillsList] = useState([{
        skillName: 'skill Name',
        skills: 'list of skills',
        id: uniqid(),
        formtoggle: false
    }]);
    const [skill, setSkill] = useState({
        skillName: 'skill Name',
        skills: 'list of skills',
        id: '',
        formtoggle: false
    });
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
        const index = skillsList.findIndex((item) => item.id === targetId);

        if (skillsList.length === 1) {
            setSkillsList([]);
        } else {
            setSkillsList(skillsList.splice(index-1, 1));
        };
    }

    const addButton = (e) => {
        setAddNew(true);
        setAddNewKey(uniqid());
    }

    const cancelButton = (e) => {
        const targetId = e.target.parentElement.parentElement.id;

        setSkillsList(skillsList.map(
            el => el.id === targetId ? {...el, formtoggle: false}: el
        ));
        setEditing(false);

        if (addNew) {
            setAddNew(false);
        }
        resetSkills();
    }

    const editButton = (e) => {
        if (!editing) {
            const targetId = e.target.parentElement.parentElement.id;
            const index = skillsList.findIndex((item) => item.id === targetId);

            setSkillsList(skillsList.map(
                el => el.id === targetId ? {...el, formtoggle: true}: el
            ));
            setSkill(skillsList[index]);
            setEditing(true);
        } else {
            alert("Only edit one section at a time.");
        }
        
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setSkill({
            ...skill,
                [name]: value
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        const targetId = e.target.id;
        if (addNew) {
            setEditing(false);
            setSkillsList([...skillsList, skill]);
            setAddNew(false);
        } else {
            setEditing(false);
            setSkillsList(skillsList.map(
                el => el.id === targetId ? skill : el
            ))
        }
        resetSkills();
    }

    const resetSkills = () => {
        setSkill({});
    }

    return(
        <div className="componentsDiv" onMouseEnter={toggleButtons} onMouseLeave={toggleButtons}>
            {skillsList.map((item) => {
                if (item.formtoggle) {
                    return <SkillsForm id={item.id} submitForm={submitForm} handleChange={handleChange} skill={skill} cancelButton={cancelButton} key={item.id}></SkillsForm>
                } else {
                    return <div className="component" key={item.id} id={item.id}>
                                <div className="line">
                                    <h3>{item.skillName}:</h3>
                                    <p>{item.skills}</p>
                                </div>
                                <Buttons divHovered={divHovered} deleteButton={deleteButton} editButton={editButton}></Buttons>
                            </div>
                            
                }
            })}
            {addNew ? <SkillsForm submitForm={submitForm} handleChange={handleChange} skill={skill} cancelButton={cancelButton} key={addNewKey}></SkillsForm>: null}
            <button onClick={addButton}>+</button>
        </div>
    );
}

export default Skills;