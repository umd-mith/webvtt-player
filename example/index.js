import React from 'react'
import ReactDOM from 'react-dom'
import { Player } from '../src/'

ReactDOM.render(
  <Player
    audio='data/audio.mp3'
    transcript="data/transcript.vtt"
    metadata="data/metadata.json" />,
  document.getElementById('root')
)
