# Embedding Videos

## Embed URLs

[Video Objects](#video-object) will contain an `embed_url` that can be used to embed your video in an iframe.

## Iframes

> Basic iframe example.

```html
<iframe src="{video.embed_url}" title="{video.title}" 
        width="640" height="360" 
        allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen frameBorder="0"
        style="background-color:transparent;">
</iframe>
```

> Responsive iframe example.

```html
<div style="position:relative;overflow:hidden;padding-top:56.25%;">
  <iframe src="{video.embed_url}" title="{video.title}" 
          allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen frameBorder="0"
          style="background-color:transparent;position:absolute;top:0;left:0;width:100%;height:100%;">
  </iframe>
</div>
```

There are two main ways you can embed your video. You can use a basic iframe, or you can use a responsive iframe with a 16:9 aspect ratio. We recommend using a responsive iframe.

You can see our recommended iframe codes in the section to the right.