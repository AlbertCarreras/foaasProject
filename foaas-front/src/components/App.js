import React, { Component } from 'react';
import DisplayApiResults from './DisplayApiResults'
import SavedInsultsList from './SavedInsultsList'
import InsultApiForm from './InsultApiForm'
import endpoints from '../endpoints'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      apiResponse: '',
      savedInsultArray: [],
    }
  }

  saveInsultToArray = () => {
    let newArrayElement = [...this.state.savedInsultArray, this.state.apiResponse]
    console.log(newArrayElement)
    this.setState({
      savedInsultArray: newArrayElement
    })
  }

   saveResponse = (response) => {
    this.setState({
      apiResponse: response
    })
   } 

   clearApiResponse = () => {
     this.setState({
       apiResponse: ''
     })
   }

   findEndpointUrl = (insultName) => {
     return endpoints.find((insult) => insultName === insult.name)
   }

   handleSubmitClick = (event, formState) => {
     event.preventDefault()
     const slug = this.findEndpointUrl(formState.endpointSelectorName).url
     const url = `http://localhost:5000${slug}`
     const namedUrl = url.replace(":from", formState.formNameField)
     const configObj = {
       headers: {
         'Accept': 'application/json'
       }
     }
     fetch(namedUrl, configObj).then(resp => resp.json()).then(this.saveResponse)
   }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FUCK OFF</h1>
        </header>
        < InsultApiForm handleSubmitClick= {this.handleSubmitClick}/>
        < DisplayApiResults apiResponse={this.state.apiResponse} saveInsultToArray={this.saveInsultToArray} clearApiResponse={this.clearApiResponse}/>
        < SavedInsultsList savedArray={this.state.savedInsultArray}/>
      </div>
    );
  }
}

export default App;
