import React from 'react'
import PropTypes from 'prop-types'
import * as rmp from 'react-media-player'

import Transcript from './Transcript'
import './Player.css'

const { PlayPause, SeekBar } = rmp.controls

class Player extends React.Component {

  constructor(props) {
    console.log('webvtt-player started')
    super(props)
    this.state = {
      ready: false,
    }
    this.track = React.createRef()
    this.onReady = this.onReady.bind(this)
  }

  componentDidMount() {
    console.log('webvtt-player mounted')
    window.addEventListener('load', this.onReady)
  }

  render () {
    let track = null
    // the track element won't be ready till the DOM is loaded
    if (this.state.ready) {
      track = this.track.current.track
    }
    return (
      <div className="webvtt-player">
        <rmp.Media>
          <div className="media">
            <div className="player">
              <rmp.Player
                src={this.props.audio}
                onReady={this.onReady}
                onTimeUpdate={this.onTimeUpdate}>
                <track default
                  kind="subtitles"
                  src={this.props.transcript}
                  ref={this.track} />
              </rmp.Player>
            </div>
            <div className="controls">
              <SeekBar className="seekBar" />
              <PlayPause />
            </div>
            <div className="transcript">
              <Transcript url={this.props.transcript} track={track} />
            </div>
          </div>
        </rmp.Media>
      </div>
    )
  }

  onReady() {
    console.log('webvtt-player loaded')
    this.setState({ready: true})
  }

}

Player.propTypes = {
  audio: PropTypes.string,
  transcript: PropTypes.string,
}

export default Player
