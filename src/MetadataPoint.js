import React from 'react'
import PropTypes from 'prop-types'
import './MetadataPoint.css'

class MetadataPoint extends React.Component {

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  render() {
    const data = JSON.parse(this.props.cue.text)
    const titleAlt = data.title_alt
      ? <h3 className="titleAlt">{data.title_alt}</h3>
      : ""
    const synopsis = data.synopsis
      ? <div className="field">
          <span>Synopsis</span>
          {data.synopsis}
        </div>
      : ""
    const synopsisAlt = data.synopsis_alt
      ? <div>{data.synopsis_alt}</div>
      : ""
    const keywords = data.keywords
      ? <div className="field">
          <span>Keywords: </span>
          {data.keywords}
        </div>
      : ""
    const keywordsAlt = data.keywords_alt
      ? <div className="field">
          <span>Alternative Keywords: </span>
          {data.keywords_alt}
        </div>
      : ""
    const subjects = data.subjects
      ? <div className="field">
          <span>Subjects: </span>
          {data.subjects}
        </div>
      : ""
    const subjectsAlt = data.subjects_alt
      ? <div className="field">
          <span>Alternative Subjects: </span>
          {data.subjects_alt}
        </div>
      : ""
    const gpsLink = data.gpspoints.gps
      ? <div className="field">
          <span>Geo: </span>
          <a href={`https://www.google.com/maps/@?api=1&map_action=map&center=${data.gpspoints.gps}&zoom=${data.gpspoints.gps_zoom}`}>{data.gpspoints.gps_text}</a>
        </div>
      : ""
    const hyperlinks = data.hyperlinks.hyperlink_text
      ? <div className="field">
          <span>Links: </span>
          <a href={data.hyperlinks.hyperlink}>{data.hyperlinks.hyperlink_text}</a>
        </div>
      : ""
    return (
      <div className="point">
        <div className="time" onClick={this.onClick}>
          [{this.startTime()}]
        </div>
        <div className="text">
          <h2 className="title" onClick={this.onClick}>{data.title}</h2>
          {titleAlt}
          {synopsis}
          {synopsisAlt}
          {keywords}
          {keywordsAlt}
          {subjects}
          {subjectsAlt}
          {gpsLink}
          {hyperlinks}
        </div>
      </div>
    )
  }

  onClick() {
    this.props.seek(this.props.cue.startTime)
  }

  startTime() {
    return this.formatSeconds(this.props.cue.startTime)
  }

  formatSeconds(t) {
    let mins = Math.floor(t / 60)
    if (mins < 10) {
      mins = `0${mins}`
    }

    let secs = Math.floor(t % 60)
    if (secs < 10) {
      secs = `0${secs}`
    }

    return `${mins}:${secs}`
  }

}

MetadataPoint.propTypes = {
  cue: PropTypes.object,
  seek: PropTypes.func,
}

export default MetadataPoint
