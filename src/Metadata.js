import React from 'react'
import PropTypes from 'prop-types'
import MetadataPoint from './MetadataPoint'
import './Track.css'

class Metadata extends React.Component {

  render() {
    const lines = []
    if (this.props.track && this.props.track.cues) {
      for (let i = 0; i < this.props.track.cues.length; i++) {
        lines.push(
          <MetadataPoint
            key={`point-${i}`}
            cue={this.props.track.cues[i]} 
            active={false} 
            seek={this.props.seek} />
        )
      }
    }
    return (
      <div className="track">
        {lines}
      </div>
    )
  }

}

Metadata.propTypes = {
  track: PropTypes.object,
  url: PropTypes.string,
  seek: PropTypes.func
}

export default Metadata
