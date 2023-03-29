import React from 'react';

const ExperienceForm = (props) => {
    const { id, submitForm, handleChange, experience, cancelButton } = props;

    return (
        <form className="form component" onSubmit={submitForm} id={id}>
            <div className="line">
                <input placeholder="Company/Group Name" name="compName" className="h3input" onChange={handleChange} value={experience.compName}></input>
                <input placeholder="City" name="city" className="h3input" onChange={handleChange} value={experience.city}></input>
            </div>    
            <div className="line">
                <input placeholder="Position Name" name="posName" onChange={handleChange} value={experience.posName}></input>
                <input placeholder="Years at the Company" name="years" onChange={handleChange} value={experience.years}></input>
            </div>
            <input placeholder="Description" name="descrip" onChange={handleChange} value={experience.descrip}></input>
            <div className="buttonsDiv">
                <button type="submit">Save</button>
                <button onClick={cancelButton}>Cancel</button>
            </div>
        </form>
    )
}

export default ExperienceForm;