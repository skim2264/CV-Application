import React, { Component } from "react";
//import '../styles/components.css';
import uniqid from "uniqid";
import EducationForm from "./EducationForm";
import EducationItem from "./EducationItem";

class Education extends Component {
    constructor () {
        super();
        this.state = {
            educationList: [
                {school: 'school',
                    city: 'city',
                    degree: 'degree',
                    year: 'year',
                    major: 'major',
                    gpa: 'gpa',
                    courses: 'courses',
                    id:uniqid(),
                    formtoggle: false}, 
                ],
            education: {
                school: '',
                city: '',
                degree: '',
                year: '',
                major: '',
                gpa: '',
                courses: '',
                id:'',
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
        const index = this.state.educationList.findIndex((item) => item.id === targetId);

        if (this.state.educationList.length === 1) {
            this.setState({
                educationList: []
            })
        } else {
            this.setState({
                educationList: this.state.educationList.splice(index-1, 1)
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
            educationList: prevState.educationList.map(
                el => el.id === targetId ? {...el, formtoggle: false}: el
            ),
            editing: false
        }))

        if (this.state.addNew) {
            this.setState({addNew: false})
        }
        this.resetEducation();
    }

    editButton = (e) => {
        if (!this.state.editing) {
            const targetId = e.target.parentElement.parentElement.id;
            const index = this.state.educationList.findIndex((item) => item.id === targetId);

            this.setState(prevState => ({
                educationList: prevState.educationList.map(
                    el => el.id === targetId ? {...el, formtoggle: true}: el
                ),
                education: this.state.educationList[index],
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
            education: {
                ...this.state.education,
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
                educationList: [...this.state.educationList, this.state.education],
                addNew: false
            })
        } else {
            this.setState(prevState => ({
                editing: false,
                educationList: prevState.educationList.map(
                    el => el.id === targetId ? this.state.education : el
                )
            }));
        }
        this.resetEducation();
    }

    resetEducation = () => {
        this.setState({
            education: {
                school: '',
                city: '',
                degree: '',
                year: '',
                major: '',
                gpa: '',
                courses: '',
                id:'',
                formtoggle: false}
        })
    }

    render() {
        const {educationList, divHovered, education, addNew, addNewKey} = this.state;
        return(
            <div className="componentsDiv" onMouseEnter={this.toggleButtons} onMouseLeave={this.toggleButtons}>
                {educationList.map((item) => {
                    if (item.formtoggle) {
                        return <EducationForm id={item.id} submitForm={this.submitForm} handleChange={this.handleChange} education={education} cancelButton={this.cancelButton} key={item.id}></EducationForm>
                    } else {
                        return <EducationItem item={item} deleteButton={this.deleteButton} editButton={this.editButton} toggleButtons={this.toggleButtons} divHovered={divHovered} key={item.id}></EducationItem>
                    }
                })}
                {addNew ? <EducationForm submitForm={this.submitForm} handleChange={this.handleChange} education={education} cancelButton={this.cancelButton} key={addNewKey}></EducationForm>: null}
                
                <button onClick={this.addButton}>+</button>
            </div>
        );
    }
}

export default Education;