import React, { useState } from "react";
import uniqid from "uniqid";
import EducationForm from "./EducationForm";
import EducationItem from "./EducationItem";

const Education = () => {
    const [educationList, setEducationList] = useState([
        {school: 'school',
                    city: 'city',
                    degree: 'degree',
                    year: 'year',
                    major: 'major',
                    gpa: 'gpa',
                    courses: 'courses',
                    id:uniqid(),
                    formtoggle: false}
    ])
    const [education, setEducation] = useState(
        {
            school: '',
            city: '',
            degree: '',
            year: '',
            major: '',
            gpa: '',
            courses: '',
            id:'',
            formtoggle: false
        }
    )
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
        const index = educationList.findIndex((item) => item.id === targetId);

        if (educationList.length === 1) {
            setEducationList([]);
        } else {
            setEducationList(educationList.splice(index-1,1))
        };
    }

    const addButton = (e) => {
        setAddNew(true);
        setAddNewKey(uniqid());
    }

    const cancelButton = (e) => {
        const targetId = e.target.parentElement.parentElement.id;

        setEducationList(educationList.map(
            el => el.id === targetId ? {...el, formtoggle: false}: el
        ))
        setEditing(false);

        if (addNew) {
            setAddNew(false);
        }
        resetEducation();
    }

    const editButton = (e) => {
        if (!editing) {
            const targetId = e.target.parentElement.parentElement.id;
            const index = educationList.findIndex((item) => item.id === targetId);

            setEducationList(educationList.map(
                el => el.id === targetId ? {...el, formtoggle: true}: el
            ))
            setEducation(educationList[index]);
            setEditing(true);
        } else {
            alert("Only edit one section at a time.");
        }
        
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setEducation({
            ...education, 
            [name]: value}
        );
    }

    const submitForm = (e) => {
        e.preventDefault();
        const targetId = e.target.id;
        if (addNew) {
            setEditing(false);
            setEducationList([...educationList, education]);
            setAddNew(false);
        } else {
            setEditing(false);
            setEducationList(educationList.map(
                el => el.id === targetId ? education : el
            ));
        }
        resetEducation();
    }

    const resetEducation = () => {
        setEducation({
            school: '',
                city: '',
                degree: '',
                year: '',
                major: '',
                gpa: '',
                courses: '',
                id:'',
                formtoggle: false
        })
    }

    return(
        <div className="componentsDiv" onMouseEnter={toggleButtons} onMouseLeave={toggleButtons}>
            {educationList.map((item) => {
                if (item.formtoggle) {
                    return <EducationForm id={item.id} submitForm={submitForm} handleChange={handleChange} education={education} cancelButton={cancelButton} key={item.id}></EducationForm>
                } else {
                    return <EducationItem item={item} deleteButton={deleteButton} editButton={editButton} toggleButtons={toggleButtons} divHovered={divHovered} key={item.id}></EducationItem>
                }
            })}
            {addNew ? <EducationForm submitForm={submitForm} handleChange={handleChange} education={education} cancelButton={cancelButton} key={addNewKey}></EducationForm>: null}
            
            <button onClick={addButton}>+</button>
        </div>
    );
}

export default Education;