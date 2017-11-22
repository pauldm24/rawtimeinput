import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { formatTime, addColon } from '../helpers'

class TimeInput extends Component {
  constructor(props) {
    super(props)

    let date = moment()
    if (!moment(props.value).isValid()) {
      const [hour, minute, second] = formatTime(props.value, props.second).split(':')
      date = moment(date).set({ hour, minute, second })
    } else {
      date = props.value
    }

    const value = props.value ? (props.second ? moment(date).format('HH:mm:ss') : moment(date).format('HH:mm')) : ''

    this.state = {
      value,
      date,
    }

    this.onChange = this.onChange.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  onChange({ name, value }) {
    const { forceValue: force } = this.props
    let blurLen = this.props.second ? 8 : 5
    const { date } = this.state
    let fVal = addColon(value, this.state.value, this.props.second)

    // allow empty value
    if (!force && fVal === '') {
      this.setState({ value: fVal })
      this.props.onChange({ value: fVal, name })
      return
    }

    this.setState({ value: fVal })

    const [hour, minute, second] = fVal.split(':')
    let newDate = moment(date)
      .set({ hour, minute, second: this.props.second ? second : '00' })
      .format()
    if (fVal.length === blurLen && moment(newDate).isValid()) {
      this.props.onChange({ value: newDate, name })
    }
  }

  onBlur({ name, value }) {
    const { date } = this.state
    const { forceValue: force } = this.props
    // allow empty value
    if (!force && value === '') {
      this.setState({ value })
      this.props.onChange({ value, name })
      return
    }

    let fVal = formatTime(value, this.props.second)

    this.setState({ value: fVal })

    const [hour, minute, second] = fVal.split(':')
    let newDate = moment(date)
      .set({ hour, minute, second: this.props.second ? second : '00' })
      .format()
    this.props.onChange({ value: newDate, name })
  }

  onKeyDown(e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode === 8 || e.keyCode === 9) {
      return
    } else {
      e.preventDefault()
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props.value !== nextProps.value) {
      const { value } = nextProps
      this.setState({ value })
    }
  }

  render() {
    const { value } = this.state
    const { name, second, disabled } = this.props

    return (
      <input
        type="text"
        name={name}
        value={value}
        onChange={({ target }) => this.onChange(target)}
        onBlur={({ target }) => this.onBlur(target)}
        maxLength={second ? 8 : 5}
        onKeyDown={this.onKeyDown}
        disabled={disabled}
      />
    )
  }
}

export default TimeInput

TimeInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  second: PropTypes.bool.isRequired,
  forceValue: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
}

TimeInput.defaultProps = {
  onChange: () => {},
  second: false,
  forceValue: false,
  disabled: false,
}
