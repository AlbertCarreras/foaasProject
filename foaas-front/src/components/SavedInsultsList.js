import React, { Component } from 'react'
import UUID from 'uuid'

export default class SavedInsultsList extends Component {
  constructor(props) {
    super(props)
  }

  buildList = () => {
     return this.props.savedArray.map((insultItem) => {
        return (
          <li key={UUID()}>
            {insultItem.message} {insultItem.subtitle}
            <input
              data-key={insultItem.key}
              type="checkbox"
              checked={insultItem.checkbox}
              onChange={this.props.updateCheckbox} />
          </li>

        )
      })
  }

  render() {
    return (
      <div>
        <h2>Insult List</h2>
        <ul>{this.buildList()}</ul>
      </div>
    )
  }
}
