import React, { Component } from "react";
import '../styles/components.css';
import ExperienceItem from "./ExperienceItem";
import ExperienceForm from "./ExperienceForm";
import uniqid from "uniqid";

class Experience extends Component {
    constructor () {
        super();
        this.state = {
            experienceList: [{
                compName: 'company/group name',
                city: 'city',
                posName: 'position name',
                years: 'Years in position',
                descrip: 'Description of position',
                id: uniqid(),
                formtoggle: false
            }],
            experience: {
                compName: '',
                city: '',
                posName: '',
                years: '',
                descrip: '',
                id: '',
                formtoggle: false
            },
            divHovered: false,
            editing: false,
            addNew: false,
            addNewKey: ""
        }
        this.deleteButton = this.deleteButton.bind(this);
        this.editButton = this.editButton.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this); 
        this.cancelButton = this.cancelButton.bind(this);
    }

    toggleButtons = (e) => {
        if (!this.state.editing && !this.state.addNew) {
            this.setState({
                divHovered: !this.state.divHovered
            })
        }
      }

    deleteButton = (e) => {
        const targetId = e.target.parentElement.parentElement.id;
        const index = this.state.experienceList.findIndex((item) => item.id === targetId);

        if (this.state.experienceList.length === 1) {
            this.setState({
                experienceList: []
            })
        } else {
            this.setState({
                experienceList: this.state.experienceList.splice(index-1, 1)
            })
        };
    }

    addButton = (e) => {
        this.setState({
            addNew: true,
            addNewKey: uniqid()
        })
    }

    cancelButton = (e) => {
        const targetId = e.target.parentElement.parentElement.id;

        this.setState(prevState => ({
            experienceList: prevState.experienceList.map(
                el => el.id === targetId ? {...el, formtoggle: false}: el
            ),
            editing: false
        }))

        if (this.state.addNew) {
            this.setState({addNew: false})
        }
        this.resetExperience();
    }

    editButton = (e) => {
        if (!this.state.editing) {
            const targetId = e.target.parentElement.parentElement.id;
            const index = this.state.experienceList.findIndex((item) => item.id === targetId);

            this.setState(prevState => ({
                experienceList: prevState.experienceList.map(
                    el => el.id === targetId ? {...el, formtoggle: true}: el
                ),
                experience: this.state.experienceList[index],
                editing: true
            }))
        } else {
            alert("Only edit one section at a time.");
        }
        
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            experience: {
                ...this.state.experience,
                [name]: value
            }
        }); 
    }

    submitForm = (e) => {
        e.preventDefault();
        const targetId = e.target.id;
        if (this.state.addNew) {
            this.setState({
                editing: false,
                experienceList: [...this.state.experienceList, this.state.experience],
                addNew: false
            })
        } else {
            this.setState(prevState => ({
                editing: false,
                experienceList: prevState.experienceList.map(
                    el => el.id === targetId ? this.state.experience : el
                )
            }));
        }
        this.resetExperience();
    }

    resetExperience = () => {
        this.setState({
            experience: {
                compName: '',
                city: '',
                posName: '',
                years: '',
                descrip: '',
                id: '',
                formtoggle: false
            }            
        })
    }

    render() {
        const {experienceList, divHovered, experience, addNew, addNewKey} = this.state;
        return(
            <div className="componentsDiv" onMouseEnter={this.toggleButtons} onMouseLeave={this.toggleButtons}>
                {experienceList.map((item) => {
                    if (item.formtoggle) {
                        return <ExperienceForm id={item.id} submitForm={this.submitForm} handleChange={this.handleChange} experience={experience} cancelButton={this.cancelButton} key={item.id}></ExperienceForm>
                    } else {
                        return <ExperienceItem item={item} deleteButton={this.deleteButton} editButton={this.editButton} toggleButtons={this.toggleButtons} divHovered={divHovered} key={item.id}></ExperienceItem>
                    }
                })}
                {addNew ? <ExperienceForm submitForm={this.submitForm} handleChange={this.handleChange} experience={experience} cancelButton={this.cancelButton} key={addNewKey}></ExperienceForm>: null}
        
                <button onClick={this.addButton}>+</button>
            </div>
        );
    }
}

export default Experience;