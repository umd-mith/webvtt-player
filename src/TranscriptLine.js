import React from 'react'
import PropTypes from 'prop-types'
import './TranscriptLine.css'

class TranscriptLine extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
    this.props.cue.onenter = this.onEnter.bind(this)
    this.props.cue.onexit = this.onExit.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  render() {
    let active = this.state.isActive ? 'active' : ''
    // note: daangerouslySetInnerHTML is used because the text
    // may contain HTML.
    return (
      <div className={active + ' line'} onClick={this.onClick}>
        <span className="time">
          [{this.props.cue.startTime}
          -
          {this.props.cue.endTime}]
        </span>
        <span
          className="text"
          dangerouslySetInnerHTML={{__html: this.props.cue.text}} />
      </div>
    )
  }

  onEnter() {
    this.setState({isActive: true})
  }

  onExit() {
    this.setState({isActive: false})
  }

  onClick() {
    this.props.seek(this.props.cue.startTime)
  }

}

TranscriptLine.propTypes = {
  cue: PropTypes.object,
  seek: PropTypes.func
}

export default TranscriptLine
