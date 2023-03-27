import React, { Component } from "react";
import '../styles/components.css';

class Education extends Component {
    constructor () {
        super();
    }

    render() {
        return(
            <div class="component">
                <h2>School</h2>
                <p>City</p>
                <p>Graduation Year</p>
                <p>Degree</p>
                <p>Major</p>
                <p>GPA - optional?</p>
                <p>Relevant coursework</p>
            </div>
        );
    }
}

export default Education;