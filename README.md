# webvtt-player

*webvtt-player* is a [React] component that lets you play an audio file while
viewing its [WebVTT] subtitles as an interactive transcript. Take a look at the
[example site] to get a sense of what this means.

*webvtt-player* was developed as part of the [Unlocking the Airwaves] project
which received generous support from the [National Endowment for the
Humanities].

---

Modified by [GhentCDH] for the [Dialectloket] project. 

---

```bash
$ npm install webvtt-player
```

```javascript
import {Player} from "webvtt-player";

<Player
  audio="https://example.org/audio.mp3"
  transcript="https://example.org/transcript.vtt" />
```

### OHMS Metadata Track

*webvtt-player* can also display a WebVTT metadata track. The metadata object is modeled
after the [OHMS Indexing system](http://ohda.matrix.msu.edu/2014/11/indexing-interviews-in-ohms/).

Fields supported:

```json
{
  "title": "",
  "title_alt": "",
  "synopsis": "",
  "synopsis_alt": "",
  "keywords": "",
  "keywords_alt": "",
  "subjects": "",
  "subjects_alt": "",
  "gpspoints": {
    "gps": "00.0000000, 00.0000000",
    "gps_zoom": "0",
    "gps_text": "",
    "gps_text_alt": ""
  },
  "hyperlinks": {
    "hyperlink": "http://example.org",
    "hyperlink_text": "",
    "hyperlink_text_alt": ""
  }
}
```

`gpspoints` will be displayed as a link to Google Maps and `hyperlinks` will be displayed as a link.

The metadata track can be loaded with the `metadata` parameter.

```javascript
import {Player} from "webvtt-player";

<Player
  audio="https://example.org/audio.mp3"
  transcript="https://example.org/transcript.vtt"
  metadata="https://example.org/metadata.vtt" />
```

### Demo

    npm install
    npm start
    open http://localhost:3000

[WEBVTT]: https://en.wikipedia.org/wiki/WebVTT
[JavaScript API]: https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API
[React]: https://reactjs.org/
[example site]: https://umd-mith.github.io/webvtt-player
[Unlocking the Airwaves]: https://mith.umd.edu/research/unlocking-the-airwaves/
[National Endowment for the Humanities]: https://www.neh.gov/
[GhentCDH]: https://www.dialectloket.be/
[Dialectloket]: https://www.ghentcdh.ugent.be/

### Using Without React

You can use webvtt-player outside of a React project if you use the built
JavaScript bundle from the [latest release](https://github.com/umd-mith/webvtt-player/releases) directly in the browser. Simply
provide an anchor element with the id `webvtt-player` and use `data-audio` and
`data-transcript` attributes to point to the audio and transcript files (`data-metadata` is optional):

```html
<div id="webvtt-player"
     data-audio="audio.mp3"
     data-transcript="transcript.vtt"
     data-metadata="metadata.vtt" />
```

You should be able to find the latest build as part of the webvtt demo site:

https://umd-mith.github.io/webvtt-player/webvtt-player.js

To generate the JavaScript file run the following command which will write them
to the `public` directory:

    npm run build-public
