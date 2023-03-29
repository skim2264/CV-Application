import React from 'react';

const EducationForm = (props) => {
    const { id, submitForm, handleChange, education, cancelButton } = props;

    return (
        <form className="form component" onSubmit={submitForm} id={id}>
            <div className="line">
                <input placeholder="School" name="school" className="h3input" onChange={handleChange} value={education.school}></input>
                <input placeholder="City" name="city" className="h3input" onChange={handleChange} value={education.city}></input>
            </div>
            <div className="line">
                <input placeholder="Degree" name="degree" onChange={handleChange} value={education.degree}></input>
                <input placeholder="Year" name="year" onChange={handleChange} value={education.year}></input>
            </div>
            <div className="line">
                <input placeholder="Major" name="major" onChange={handleChange} value={education.major}></input>
                <input placeholder="GPA" name="gpa" onChange={handleChange} value={education.gpa}></input>
            </div>
            <input placeholder="Courses" name="courses" onChange={handleChange} value={education.courses}></input>
            <div className="buttonsDiv">
                <button type="submit">Save</button>
                <button onClick={cancelButton}>Cancel</button>
            </div>
        </form>
    )
}

export default EducationForm;