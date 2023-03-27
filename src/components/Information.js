import React, { Component } from "react";
import '../styles/components.css';

class Information extends Component {
    constructor () {
        super();
    }

    render() {
        return(
            <div class="component">
                <h1>Name</h1>
                <p>City</p>
                <p>Email</p>
                <p>Phone Number</p>
                <p>LinkedInLink</p>
            </div>
        );
    }
}

export default Information;