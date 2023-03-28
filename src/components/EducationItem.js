import React from "react";
import Buttons from "./Buttons";
//import '../styles/components.css';

const EducationItem = (props) => {

    const { item, deleteButton, editButton, divHovered} = props;

    return (
        <div className="component" key={item.id} id={item.id}>
            <div className="line">
                <h3>{item.school}</h3>
                <h3>{item.city}</h3>
            </div>
            <div className ="line">
                <p>{item.degree}</p>
                <p>{item.year}</p>
            </div>
            <div className="line">
                <p>{item.major}</p>
                <p>{item.gpa}</p>
            </div>
            <p>{item.courses}</p>
            <Buttons divHovered={divHovered} deleteButton={deleteButton} editButton={editButton}></Buttons>
        </div>
    );
}

export default EducationItem;