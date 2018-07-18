import React, { Component } from 'react'
import endpoints from '../endpoints'
import UUID from 'uuid'

export default class InsultApiForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            endpointSelectorName: "Asshole",
            formNameField: "",
            endpointSelectorUrl: "",
            
        }
    }

    handleNameChange = (event) => {
        this.setState({
            formNameField: event.target.value
        })
    }

    handleSelectorChange = (event) => {
        
        this.setState({
            endpointSelectorName: event.target.value,
        })
    }
    
    mapInsults() {
        return endpoints.map((insult) => {
            return <option 
                data-url={insult.url}
                key={UUID()}>{insult.name}</option>
        })
    }

    clearState = () => {
        this.setState({
                endpointSelectorName: "Asshole",
                formNameField: "",
                endpointSelectorUrl: "",
        })
    }
    
    render() {
        return (
            <div className="container">
                <select 
                    value={this.state.endpointSelectorName} 
                    onChange={this.handleSelectorChange} >
                        { this.mapInsults() }
                </select>
                <br></br>
                <input 
                    value={this.state.formNameField} 
                    type="text" 
                    placeholder="Your Name" 
                    onChange={this.handleNameChange}>
                </input>
                <button 
                    type="submit" 
                    onClick={ (event) => this.props.handleSubmitClick(event, this.state)}
                    >Submit</button>
             </div>
         )
    }
}
