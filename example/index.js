import React from 'react'
import ReactDOM from 'react-dom'
import { Player } from '../src/'

//     transcript='http://mith-uta.s3-website-us-east-1.amazonaws.com/data/transcripts/cpb-aacip-500-m03xxr0v/cpb-aacip-500-m03xxr0v.vtt' 


ReactDOM.render(
  <Player
    audio='http://mith-uta.s3-website-us-east-1.amazonaws.com/data/audio/cpb-aacip-500-m03xxr0v.mp3'
    transcript='http://mith-uta.s3-website-us-east-1.amazonaws.com/data/transcripts/cpb-aacip-500-m03xxr0v/cpb-aacip-500-m03xxr0v.vtt' />,
  document.getElementById('root')
)
