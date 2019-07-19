# Embedding Videos

## Embed URLs

[Video Objects](#video-object) will contain an `embed_url` that can be used to embed your video in an iframe.

## Iframes

### Basic Iframe

For basic iframes, we recommend the following:

`<iframe src="{video.embed_url}" title="{video.title}" width="640" height="360" allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen style="background-color:transparent;" frameBorder="0"></iframe>`

### Responsive Iframe

To make your iframe responsive with a 16:9 aspect ratio, we recommend the following:

`<div style="position:relative;overflow:hidden;padding-top:56.25%;"><iframe src="{video.embed_url}" title="{video.title}" allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen style="background-color:transparent;position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0"></iframe></div>`