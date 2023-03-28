import React from 'react';

const EducationForm = (props) => {
    const { id, submitForm, handleChange, education, cancelButton } = props;

    return (
        <form className="form" onSubmit={submitForm} id={id}>
            <input placeholder="School" name="school" onChange={handleChange} value={education.school}></input>
            <input placeholder="City" name="city" onChange={handleChange} value={education.city}></input>
            <input placeholder="Degree" name="degree" onChange={handleChange} value={education.degree}></input>
            <input placeholder="Year" name="year" onChange={handleChange} value={education.year}></input>
            <input placeholder="Major" name="major" onChange={handleChange} value={education.major}></input>
            <input placeholder="GPA" name="gpa" onChange={handleChange} value={education.gpa}></input>
            <input placeholder="Courses" name="courses" onChange={handleChange} value={education.courses}></input>
            <button type="submit">Save</button>
            <button onClick={cancelButton}>Cancel</button>
        </form>
    )
}

export default EducationForm;