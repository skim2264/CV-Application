import React from 'react';
import '../styles/components.css';

const Buttons = (props) => {
    const { divHovered, deleteButton, editButton } = props;

    if (divHovered) {
        return (
            <div className="buttonsDiv">
                <button onClick={editButton}>Edit</button>
                <button onClick={deleteButton}>Delete</button>
            </div>
        )
    }
};

export default Buttons;