import React, { Component } from 'react';
import DisplayApiResults from './DisplayApiResults'
import SavedInsultsList from './SavedInsultsList'
import InsultApiForm from './InsultApiForm'
import EmailForm from './EmailForm'
import DisplayEmails from './DisplayEmails'
import UUID from 'uuid'

import endpoints from '../endpoints'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      apiResponse: '',
      savedInsultArray: [],
      savedEmailsArray: [],
    }
  }

  saveInsultToArray = () => {
    let newArrayElement = [...this.state.savedInsultArray, this.state.apiResponse]
    this.setState({
      savedInsultArray: newArrayElement
    })
  }

  saveEmailToArray2 = (emailFormState) => {
    let newArrayElement = [...this.state.savedEmailsArray, emailFormState]
    this.setState({
      savedEmailsArray: newArrayElement
    })
  }


  saveEmailToArray = (event, emailFormState) => {
    event.preventDefault()
    this.saveEmailToArray2(emailFormState)
  }

   saveResponse = (response) => {
    let newResponse = {
      message: response.message,
      subtitle: response.subtitle,
      key: UUID(),
      checkbox: false,
    }
    this.setState({
      apiResponse: newResponse
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

   updateCheckbox = (event) => {
     event.preventDefault()
     let newArray = [...this.state.savedInsultArray]
     let mappedArray = newArray.map((element) => {
        if(element.key === event.target.dataset.key) {
          element.checkbox = !element.checkbox;
          return element;
        }
        return element;
      });
     this.setState({
       savedInsultArray: mappedArray,
     })
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FUCK OFF</h1>
        </header>
        < InsultApiForm
            handleSubmitClick= {this.handleSubmitClick}
        />
        < DisplayApiResults
            apiResponse={this.state.apiResponse} saveInsultToArray={this.saveInsultToArray} clearApiResponse={this.clearApiResponse}
        />
        < SavedInsultsList
            savedArray={this.state.savedInsultArray}
            updateCheckbox={this.updateCheckbox}
        />
        < EmailForm
            saveEmailToArray={this.saveEmailToArray}
        />
        < DisplayEmails
            savedEmailsArray={this.state.savedEmailsArray}
            savedArray={this.state.savedInsultArray}
        />

      </div>
    );
  }
}

export default App;
