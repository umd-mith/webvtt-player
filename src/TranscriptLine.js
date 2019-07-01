import React from 'react'
import PropTypes from 'prop-types'
import { withMediaProps } from 'react-media-player'
import style from './TranscriptLine.css'

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
    let active = this.state.isActive ? style.active : ''
    // note: daangerouslySetInnerHTML is used because the text
    // may contain HTML entities.
    return (
      <div className={active + ' ' + style.line} onClick={this.onClick}>
        <span className={style.time}>
          [{this.props.cue.startTime}
          -
          {this.props.cue.endTime}]
        </span>
        <span
          className={style.text}
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
    this.props.media.seekTo(this.props.cue.startTime)
    this.props.media.play()
  }

}

TranscriptLine.propTypes = {
  media: PropTypes.object,
  cue: PropTypes.object,
  onClick: PropTypes.func
}

export default withMediaProps(TranscriptLine)
