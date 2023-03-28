import React, { Component } from "react";

class Header extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <div className="header">
                <h2>{this.props.name}</h2>
                <hr></hr>
            </div>
        );
    }
}

export default Header;