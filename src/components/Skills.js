import React, { Component } from "react";
import '../styles/components.css';
import Buttons from "./Buttons";
import uniqid from 'uniqid';
import SkillsForm from "./SkillsForm";

class Skills extends Component {
    constructor () {
        super();
        this.state = {
            skillsList: [{
                skillName: 'skill Name',
                skills: 'list of skills',
                id: uniqid(),
                formtoggle: false
            }],
            skill: {
                skillName: 'skill Name',
                skills: 'list of skills',
                id: '',
                formtoggle: false
            },
            divHovered: false,
            editing: false,
            addNew: false,
            addNewKey: ""
        }
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
        const index = this.state.skillsList.findIndex((item) => item.id === targetId);

        if (this.state.skillsList.length === 1) {
            this.setState({
                skillsList: []
            })
        } else {
            this.setState({
                skillsList: this.state.skillsList.splice(index-1, 1)
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
        const targetId = e.target.parentElement.id;

        this.setState(prevState => ({
            skillsList: prevState.skillsList.map(
                el => el.id === targetId ? {...el, formtoggle: false}: el
            ),
            editing: false
        }))

        if (this.state.addNew) {
            this.setState({addNew: false})
        }
        this.resetSkills();
    }

    editButton = (e) => {
        if (!this.state.editing) {
            const targetId = e.target.parentElement.parentElement.id;
            const index = this.state.skillsList.findIndex((item) => item.id === targetId);

            this.setState(prevState => ({
                skillsList: prevState.skillsList.map(
                    el => el.id === targetId ? {...el, formtoggle: true}: el
                ),
                skill: this.state.skillsList[index],
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
            skill: {
                ...this.state.skill,
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
                skillsList: [...this.state.skillsList, this.state.skill],
                addNew: false
            })
        } else {
            this.setState(prevState => ({
                editing: false,
                skillsList: prevState.skillsList.map(
                    el => el.id === targetId ? this.state.skill : el
                )
            }));
        }
        this.resetSkills();
    }

    resetSkills = () => {
        this.setState({
            skill: {}            
        })
    }

    render() {
        const {skillsList, divHovered, skill, addNew, addNewKey} = this.state;

        return(
            <div className="componentsDiv" onMouseEnter={this.toggleButtons} onMouseLeave={this.toggleButtons}>
                {skillsList.map((item) => {
                    if (item.formtoggle) {
                        return <SkillsForm id={item.id} submitForm={this.submitForm} handleChange={this.handleChange} skill={skill} cancelButton={this.cancelButton} key={item.id}></SkillsForm>
                    } else {
                        return <div className="component" key={item.id} id={item.id}>
                                    <div className="line">
                                        <h3>{item.skillName}:</h3>
                                        <p>{item.skills}</p>
                                    </div>
                                    <Buttons divHovered={divHovered} deleteButton={this.deleteButton} editButton={this.editButton}></Buttons>
                                </div>
                                
                    }
                })}
                {addNew ? <SkillsForm submitForm={this.submitForm} handleChange={this.handleChange} skill={skill} cancelButton={this.cancelButton} key={addNewKey}></SkillsForm>: null}
                <button onClick={this.addButton}>+</button>
            </div>
        );
    }
}

export default Skills;