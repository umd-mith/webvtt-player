import React from 'react'
import PropTypes from 'prop-types'
import style from './Metadata.css'

class Metadata extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      "metadata": {}
    }
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => {return response.json()})
      .then(json => {
        this.setState({
          "metadata": json
        })
      })
  }

  render() {
    return (
      <div className={style.metadata}>
        <dl>
          <dt>Series</dt>
          <dd>{this.state.metadata.series}</dd>

          <dt>Episode</dt>
          <dd>{this.state.metadata.episode}</dd>

          <dt>Broadcast</dt>
          <dd>{this.state.metadata.broadcast}</dd>

          <dt>Topics</dt>
          <dd>{this.state.metadata.topics}</dd>

          <dt>Subjects</dt>
          <dd>{this.state.metadata.subjects}</dd>

          <dt>Advisor</dt>
          <dd>{this.state.metadata.advisor}</dd>

          <dt>Funder</dt>
          <dd>{this.state.metadata.funder}</dd>

          <dt>Narrator</dt>
          <dd>{this.state.metadata.narrator}</dd>

          <dt>Producer</dt>
          <dd>{this.state.metadata.producer}</dd>

          <dt>Writer</dt>
          <dd>{this.state.metadata.writer}</dd>

          <dt>Organization</dt>
          <dd>{this.state.metadata.organization}</dd>

        </dl>
      </div>
    )
  }

}

Metadata.propTypes = {
  "url": PropTypes.string
}

export default Metadata
