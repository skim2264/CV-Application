import React, { Component } from "react";
import '../styles/components.css';
import '../styles/information.css'
import InfoButtons from "./InfoButtons";
import InfoForm from "./InfoForm";

class Information extends Component {
    constructor (props) {
        super(props);
        this.state = {
            divHovered: false,
            editForm: false,
            name: "Name",
            city: "City",
            email: "Email",
            number: "Phone Number",
            linkedin: "LinkedIn",
            prev: {}
            
        }
        this.editButton = this.editButton.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cancelButton = this.cancelButton.bind(this);
    }

    toggleButtons = () => {
        this.setState({
            divHovered: !this.state.divHovered
        })
    }

    cancelButton = (e) => {
        this.setState({
            name: this.state.prev.name,
            city: this.state.prev.city,
            email: this.state.prev.email,
            number: this.state.prev.number,
            linkedin: this.state.prev.linkedin,
            editForm: false
        })
    }

    editButton = () => {
        this.setState({
            editForm: !this.state.editForm,
            prev: {
                name: this.state.name,
                city: this.state.city,
                email: this.state.email,
                number: this.state.number,
                linkedin: this.state.linkedin
            }
        })
    }

    handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({
            editForm: !this.state.editForm
        })
    }

    render() {
        const { divHovered, editForm, name, city, email, number, linkedin } = this.state;
        
        if (editForm) {
            return <InfoForm submitForm={this.submitForm} handleChange={this.handleChange} cancelButton={this.cancelButton}></InfoForm>
        } else {
            return <div className="component informationDiv" onMouseEnter={this.toggleButtons} onMouseLeave={this.toggleButtons}>
                <h1>{name}</h1>
                <div className="informationDivChild">
                    <p>{city}</p>
                    <p>{email}</p>
                    <p>{number}</p>
                    <p>{linkedin}</p>
                </div>
                <InfoButtons divHovered={divHovered} editButton={this.editButton}></InfoButtons>
            </div>
        }
    }
}

export default Information;