import React from 'react'
import PropTypes from 'prop-types'
import { withMediaProps } from 'react-media-player'
import style from './Transcript.css'
import TranscriptLine from './TranscriptLine'

class Transcript extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.url)
  }

  render() {
    const lines = []
    if (this.props.track) {
      for (let i = 0; i < this.props.track.cues.length; i++) {
        lines.push(
          <TranscriptLine
            key={`line-${i}`}
            cue={this.props.track.cues[i]} />
        )
      }
    }
    return (
      <div className={style.transcript}>
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
