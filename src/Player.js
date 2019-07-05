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
    // the track element won't be ready till the DOM is loaded
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
          <div className="transcript">
            <Transcript url={this.props.transcript} seek={this.seek} track={track} />
          </div>
        </div>
      </div>
    )
  }

  onLoaded() {
    console.log('webvtt-player loaded')
    this.setState({loaded: true})
  }

  checkIfLoaded() {
    if (this.audio.current) {
      console.log('checkIfLoaded true')
      this.onLoaded()
    } else {
      console.log('checkIfLoaded false  ')
      setTimeout(this.checkIfLoaded, 500)
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
