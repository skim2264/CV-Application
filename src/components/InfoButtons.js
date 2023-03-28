import React from 'react';
import '../styles/components.css';

const InfoButtons = (props) => {
    const { divHovered, editButton } = props;

    if (divHovered) {
        return (
            <div className="buttonsDiv">
                <button onClick={editButton}>Edit</button>
            </div>
        )
    }
};

export default InfoButtons;