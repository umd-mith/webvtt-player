import React from 'react'
import PropTypes from 'prop-types'
import { withMediaProps } from 'react-media-player'
import TranscriptLine from './TranscriptLine'
import './Transcript.css'

class Transcript extends React.Component {

  render() {
    const lines = []
    if (this.props.track) {
      for (let i = 0; i < this.props.track.cues.length; i++) {
        lines.push(
          <TranscriptLine
            key={`line-${i}`}
            cue={this.props.track.cues[i]} 
            active={false} />
        )
      }
    }
    return (
      <div className="transcript">
        {lines}
      </div>
    )
  }

}

Transcript.propTypes = {
  media: PropTypes.object,
  track: PropTypes.object,
  url: PropTypes.string
}

export default withMediaProps(Transcript)
