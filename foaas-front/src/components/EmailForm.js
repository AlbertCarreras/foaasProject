import React, { Component } from 'react'

export default class EmailForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            formNameField: "",
            formEmailField: "",
        }
    }

    handleNameChange = (event) => {
        this.setState({
            formNameField: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            formEmailField: event.target.value
        })
    }

    clearState = () => {
    this.setState({
        formNameField: "",
        formEmailField: "",
    })
}

    render() {
        return (
            <div className="container">
                <h2>Send to</h2>
                <input
                    value={this.state.formNameField}
                    type="text"
                    placeholder="Destinatary Name"
                    onChange={this.handleNameChange}>
                </input>
                <input
                    value={this.state.formEmailField}
                    type="text"
                    placeholder="Destinatary Email"
                    onChange={this.handleEmailChange}>
                </input>
                <button
                    type="submit"
                    onClick={ (event) => this.props.saveEmailToArray(event, this.state)}
                    >Submit</button>
             </div>
         )
    }
}
