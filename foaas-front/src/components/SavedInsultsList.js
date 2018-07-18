import React, { Component } from 'react'
import UUID from 'uuid'

export default class SavedInsultsList extends Component {

  buildList = () => {
     return this.props.savedArray.map((insultItem) => {
         return <li key={UUID()}>{insultItem.message} {insultItem.subtitle}</li>
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
