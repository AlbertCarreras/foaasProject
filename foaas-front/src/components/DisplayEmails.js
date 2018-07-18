import React, { Component } from 'react'
import UUID from 'uuid'


export default class DisplayEmailsResults extends Component {

  buildList = () => {
     return this.props.savedEmailsArray.map((emailItem) => {
         return (
         <li key={UUID()}>
           <a href={`mailto:${emailItem.formEmailField}?subject=${emailItem.formNameField}, you got a message
             &body=Pending`}>{emailItem.formNameField}</a>
         </li>
       )
      })
  }

  render() {
    return (
      <div>
        <ul>{this.buildList()}</ul>
      </div>
    )
  }
}
