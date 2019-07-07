import React from 'react'
import PropTypes from 'prop-types'
import Transcript from './Transcript'
import './Player.css'

class Player extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      currentTime: 0
    }
    this.track = React.createRef()
    this.audio = React.createRef()

    this.onLoaded = this.onLoaded.bind(this)
    this.seek = this.seek.bind(this)
    this.checkIfLoaded = this.checkIfLoaded.bind(this)

    this.checkIfLoaded()
  }

  render () {
    let track = null
    if (this.state.loaded) {
      track = this.track.current.track
    }
    return (
      <div className="webvtt-player">
        <div className="media">
          <div className="player">
            <audio
              controls
              src={this.props.audio}
              onLoad={this.onLoaded}
              ref={this.audio}>
              <track default
                kind="subtitles"
                src={this.props.transcript}
                ref={this.track} />
            </audio>
          </div>
          <Transcript url={this.props.transcript} seek={this.seek} track={track} />
        </div>
      </div>
    )
  }

  onLoaded() {
    this.setState({loaded: true})
  }

  checkIfLoaded(tries=0) {
    tries += 1
    const e = this.track.current
    if (e && e.track && e.track.cues.length > 0) {
      this.onLoaded()
    } else {
      const wait = 25 * Math.pow(tries, 2)
      setTimeout(() => this.checkIfLoaded(tries), wait)
    }
  }

  seek(secs) {
    this.audio.current.currentTime = secs
    this.audio.current.play()
  }

}

Player.propTypes = {
  audio: PropTypes.string,
  transcript: PropTypes.string,
}

export default Player
