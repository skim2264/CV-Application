import React, { useState } from "react";
import InfoButtons from "./InfoButtons";
import InfoForm from "./InfoForm";

const Information = () => {
    const [divHovered, setDivHovered] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [info, setInfo] = useState({
        name: "Name",
        city: "City",
        email: "Email",
        number: "Phone Number",
        linkedin: "LinkedIn"
    });
    const [prev, setPrev] = useState({});

    const toggleButtons = () => {
        setDivHovered(!divHovered);
    }

    const cancelButton = (e) => {
        setInfo({
            name: prev.name,
            city: prev.city,
            email: prev.city,
            number: prev.number,
            linkedin: prev.linkedin
        });
        setEditForm(false);
    }

    const editButton = () => {
        setEditForm(!editForm);
        setPrev({
            name: info.name,
            city: info.city,
            email: info.email,
            number: info.number,
            linkedin: info.linkedin
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name;
        
        setInfo({
            ...info,
            [name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        setEditForm(!editForm);
    }

    if (editForm) {
        return <InfoForm submitForm={submitForm} handleChange={handleChange} cancelButton={cancelButton}></InfoForm>
    } else {
        return <div className="component informationDiv" onMouseEnter={toggleButtons} onMouseLeave={toggleButtons}>
            <h1>{info.name}</h1>
            <div className="informationDivChild">
                <p>{info.city}</p>
                <p>{info.email}</p>
                <p>{info.number}</p>
                <p>{info.linkedin}</p>
            </div>
            <InfoButtons divHovered={divHovered} editButton={editButton}></InfoButtons>
        </div>
    }
}

export default Information;