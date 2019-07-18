# Controlling the Player

## Player.js

<a href="http://playerjs.io/" target="_blank">Player.js</a> is a JavaScript library that allows developers to programmatically control video and audio within an iframe. It can be used with VidGrid embedded videos.

For complete documentation on the capabilities of Player.js, please visit <a href="http://playerjs.io/" target="_blank">http://playerjs.io</a>.

## Installation

Player.js is hosted on Embedly's CDN:

`<script type="text/javascript" src="//cdn.embed.ly/player-0.1.0.min.js"></script>`

You can also install it via npm:

`npm install player.js`

## Example Usage

```shell
# See JavaScript tab as this is a client-side implementation only.
```

```ruby
# See JavaScript tab as this is a client-side implementation only.
```

```python
# See JavaScript tab as this is a client-side implementation only.
```

```javascript
const iframe = document.querySelector('iframe');
const player = new playerjs.Player(iframe);

player.on('ready', () => {
  player.play();
});
```

VidGrid supports auto playing videos when the `autoplay` query parameter is set to `true` on the video url. However, some browsers now block auto playing videos from starting. To get around this, we can use Player.js.

Simply follow the [Installation](#installation) instructions and then follow the code example to the right.