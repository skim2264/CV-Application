import React, { Component } from "react";
import '../styles/components.css';

class Experience extends Component {
    constructor () {
        super();
    }

    render() {
        return(
            <div class="component">
                <h2>Company Name</h2>
                <p>City</p>
                <p>Position Name</p>
                <p>Years at company</p>
                <ul>Description of job position - map through</ul>
            </div>
        );
    }
}

export default Experience;