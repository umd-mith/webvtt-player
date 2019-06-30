# webvtt-player

*webvtt-player* is a [React] component that lets you view a [WebVTT] file as a
transcript for an audio file.

```javascript
import {Player} from "webvtt-player"

<Player
  audio="https://example.org/audio.mp3"
  transcript="https://example.org/transcript.vtt" />
```

### Develop

    npm install
    npm start
    open http://localhost:3000

[WEBVTT]: https://en.wikipedia.org/wiki/WebVTT
[JavaScript API]: https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API
[React]: https://reactjs.org/
