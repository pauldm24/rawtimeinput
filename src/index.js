import React, { Component } from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import TimeInput from './components'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      errorMessages: {},
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange({ value, name }) {
    console.log(value, name, moment(value).format('HH:mm:ss'))
  }

  render() {
    return (
      <div>
        <TimeInput name="timeOfDate" value="" onChange={this.onChange} onBlur={this.onChange} second />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
