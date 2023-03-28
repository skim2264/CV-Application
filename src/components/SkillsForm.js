import React from 'react';

const SkillsForm = (props) => {
    const { id, submitForm, handleChange, skill, cancelButton } = props;

    return (
        <form className="form" onSubmit={submitForm} id={id}>
            <input placeholder="Skill Name" name="skillName" onChange={handleChange} value={skill.school}></input>
            <input placeholder="Skill" name="skills" onChange={handleChange} value={skill.city}></input>
            <button type="submit">Save</button>
            <button onClick={cancelButton}>Cancel</button>
        </form>
    )
}

export default SkillsForm;