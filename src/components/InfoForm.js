import React from 'react';

const InfoForm = (props) => {
    const { submitForm, handleChange, cancelButton } = props;

    return (
        <form className="form infoForm" onSubmit={submitForm}>
            <input placeholder="Name" name="name" id="infoname" onChange={handleChange}></input>
            <div className="informationDivChild">
                <input placeholder="City" name="city" id="infocity" onChange={handleChange}></input>
                <input placeholder="Email" name="email" id="infoemail" onChange={handleChange}></input>
                <input placeholder="Phone Number" name="number" id="infonumber" onChange={handleChange}></input>
                <input placeholder="LinkedIn" name="linkedin" id="infolinkedin" onChange={handleChange}></input>
            </div>
            <div className="informationDivChild">
                <button type="submit">Save</button>
                <button onClick={cancelButton}>Cancel</button>
            </div>
        </form>
    )
}

export default InfoForm;