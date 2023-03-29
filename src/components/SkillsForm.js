import React from 'react';

const SkillsForm = (props) => {
    const { id, submitForm, handleChange, skill, cancelButton } = props;

    return (
        <form className="form" onSubmit={submitForm} id={id}>
            <div className="line">
                <input placeholder="Skill Name" name="skillName" className="h3input" onChange={handleChange} value={skill.skillName}></input>
                <input placeholder="List of skills:" name="skills" onChange={handleChange} value={skill.skills}></input>
            </div>    
             <div className="buttonsDiv">
                <button type="submit">Save</button>
                <button onClick={cancelButton}>Cancel</button>
            </div>
        </form>
    )
}

export default SkillsForm;