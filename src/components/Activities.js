import React, { Component } from "react";
import '../styles/components.css';

class Activities extends Component {
    constructor () {
        super();
    }

    render() {
        return(
            <div class="component">
                <h2>Group Name</h2>
                <h2>City</h2>
                <p>Position Name</p>
                <p>Years</p>
                <ul>Description - map through</ul>
            </div>
        );
    }
}

export default Activities;