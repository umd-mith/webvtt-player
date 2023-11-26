import React from 'react'
import PropTypes from 'prop-types'
import Transcript from './Transcript'
import Metadata from './Metadata'
import './Player.css'

class Player extends React.Component {

  constructor() {
    super()
    this.state = {
      loaded: false,
      currentTime: 0,
      query: ''
    }
    this.track = React.createRef()
    this.metatrack = React.createRef()
    this.audio = React.createRef()

    this.onLoaded = this.onLoaded.bind(this)
    this.seek = this.seek.bind(this)
    this.checkIfLoaded = this.checkIfLoaded.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
  }

  componentDidMount() {
    this.checkIfLoaded()
    // Skip to required timestamp if set
    // Autoplay isn't supported in Chromium: https://goo.gl/xX8pDD
    const queryParams = new URLSearchParams(window.location.search)
    const timestamp = queryParams.get('ts')
    const tsNumber = Number(timestamp)
    if (!isNaN(tsNumber) && tsNumber > 0) {
      this.audio.current.currentTime = tsNumber
    }
  }

  render () {
    let track = null
    let metatrack = null
    if (this.state.loaded) {
      track = this.track.current.track
      metatrack = this.metatrack.current.track
    }
    const preload = this.props.preload ? "true" : "false"
    const metadata = this.props.metadata
      ? <Metadata
        url={this.props.metadata}
        seek={this.seek}
        track={metatrack} />
      : ""
    const copyToClipboard = (stringToCopy) => {
      navigator.clipboard.writeText(stringToCopy)
          .then(() => {
            return true
          })
          .catch(err => {
            console.error('Failed to copy text: ', err)
          })
    }
    // Copy a link to current timestamp to clipboard
    const copyLink = (event) => {
      const url = window.location.href
      const player = event.target.closest('.player')
      const audioPlayer = player.querySelector('audio')
      const currentTime = audioPlayer.currentTime
      const kloeke = event.currentTarget.parentNode.parentNode.parentNode.parentElement.dataset.kloeke
      const copiedLink = url + '?kid=' + kloeke + '&ts=' + currentTime
      copyToClipboard(copiedLink)
    };
    return (
      <div className="webvtt-player">
        <div className="media">
          <div className="player">
            <audio
              controls
              crossOrigin="anonymous"
              controlsList="nodownload"
              onLoad={this.onLoaded}
              preload={preload}
              ref={this.audio}>
              <source src={this.props.audio} />
              <track default
                kind="subtitles"
                src={this.props.transcript}
                ref={this.track} />
              <track default
                kind="metadata"
                src={this.props.metadata}
                ref={this.metatrack} />
            </audio>
            <div className="icon-copy-link" onClick={copyLink} data-kloeke={this.kloeke}></div>
          </div>
          <div className="tracks">
            <Transcript 
              url={this.props.transcript} 
              seek={this.seek} 
              track={track} 
              query={this.state.query} />
            {metadata}
          </div>
          {/*<Search query={this.state.query} updateQuery={this.updateQuery} />*/}
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
    if (e && e.track && e.track.cues && e.track.cues.length > 0) {
      this.onLoaded()
    } else if (! this.state.loaded) {
      const wait = 25 * Math.pow(tries, 2)
      setTimeout(this.checkIfLoaded, wait, tries)
    }
  }

  seek(secs) {
    this.audio.current.currentTime = secs
    this.audio.current.play()
  }

  updateQuery(query) {
    this.setState({query: query})
  }

}

Player.propTypes = {
  audio: PropTypes.string,
  transcript: PropTypes.string,
  metadata: PropTypes.string,
  preload: PropTypes.bool,
  query: PropTypes.string
}

export default Player