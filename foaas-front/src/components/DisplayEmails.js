import React, { Component } from 'react'
import UUID from 'uuid'


export default class DisplayEmailsResults extends Component {

  filterCheckedInsults = () => {
    const filtered = this.props.savedArray.filter( (insult) => insult.checkbox === true )
    return filtered.map( (insult) => `${insult.message} ${insult.subtitle}`).join(", ")
  }

  buildList = () => {
     return this.props.savedEmailsArray.map((emailItem) => {
         return (
         <li key={UUID()}>
           <a href={`mailto:${emailItem.formEmailField}?subject=${emailItem.formNameField}, you got a message
             &body=${this.filterCheckedInsults()}`}>{emailItem.formNameField}</a>
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
