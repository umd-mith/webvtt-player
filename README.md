# webvtt-player

*webvtt-player* is a [React] component that lets you play an audio file while
view its [WebVTT] subtitles as a an interactive transcript. Take a look at the
example site to get a sense of what it does.

```bash
$ npm install webvtt-player
```

```javascript
import {Player} from "webvtt-player"

<Player
  audio="https://example.org/audio.mp3"
  transcript="https://example.org/transcript.vtt" />
```

### Demo

    npm install
    npm start
    open http://localhost:3000

[WEBVTT]: https://en.wikipedia.org/wiki/WebVTT
[JavaScript API]: https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API
[React]: https://reactjs.org/
