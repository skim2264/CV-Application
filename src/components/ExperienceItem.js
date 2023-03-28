import React from "react";
import Buttons from "./Buttons";
//import '../styles/components.css';

const ExperienceItem = (props) => {

    const { item, deleteButton, editButton, divHovered} = props;

    return (
        <div className="component" key={item.id} id={item.id}>
            <div className="line">
                <h3>{item.compName}</h3>
                <h3>{item.city}</h3>
            </div>
            <div className ="line">
                <p>{item.posName}</p>
                <p>{item.years}</p>
            </div>
            <p>{item.descrip}</p>
            <Buttons divHovered={divHovered} deleteButton={deleteButton} editButton={editButton}></Buttons>
        </div>
    );
}

export default ExperienceItem;