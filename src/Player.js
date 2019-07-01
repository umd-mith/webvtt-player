import React from 'react'
import PropTypes from 'prop-types'
import * as rmp from 'react-media-player'

import style from './Player.css'
import Transcript from './Transcript'

const { PlayPause, SeekBar } = rmp.controls

class Player extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ready: false,
    }
    this.track = React.createRef()
    this.onReady = this.onReady.bind(this)
  }

  render () {
    let track = null
    // the track element won't be ready till the DOM is loaded
    if (this.state.ready) {
      track = this.track.current.track
    }
    return (
      <div className={style.item}>
        <rmp.Media>
          <div className={style.media}>
            <div className={style.player}>
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
            <div className={style.controls}>
              <SeekBar className={style.seekBar} />
              <PlayPause />
            </div>
            <div className={style.transcript}>
              <Transcript url={this.props.transcript} track={track} />
            </div>
          </div>
        </rmp.Media>
      </div>
    )
  }

  onReady () {
    this.setState({ready: true})
  }

}

Player.propTypes = {
  audio: PropTypes.string,
  transcript: PropTypes.string,
}

export default Player
