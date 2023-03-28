import React from 'react';

const ExperienceForm = (props) => {
    const { id, submitForm, handleChange, experience, cancelButton } = props;

    return (
        <form className="form" onSubmit={submitForm} id={id}>
            <input placeholder="Company/Group Name" name="compname" onChange={handleChange} value={experience.school}></input>
            <input placeholder="City" name="city" onChange={handleChange} value={experience.city}></input>
            <input placeholder="Position Name" name="posName" onChange={handleChange} value={experience.degree}></input>
            <input placeholder="Years at the Company" name="years" onChange={handleChange} value={experience.year}></input>
            <input placeholder="Description" name="descrip" onChange={handleChange} value={experience.courses}></input>
            <button type="submit">Save</button>
            <button onClick={cancelButton}>Cancel</button>
        </form>
    )
}

export default ExperienceForm;