import React, { Component } from 'react'


export default class DisplayApiResults extends Component {

    getMessage = () => {
       return (
           <div>
                <p>{this.props.apiResponse.message} {this.props.apiResponse.subtitle}</p>
                < button id="save" onClick={this.props.saveInsultToArray}> Save Insult </ button>
                < button id="discard" onClick={this.props.clearApiResponse}> Discard Insult </ button>
          </div>
       )
    }

    getInstructions = () => {
        return <p>Select a phrase, input name, and submit, Fucker</p>
    }

    displayView = () => {
        if (this.props.apiResponse.message === undefined){
             return this.getInstructions()
        } else {
             return this.getMessage()
        }
    }
    render() {
        return (
            <div>
                {this.displayView()}
            </div>
        )
    }
}
