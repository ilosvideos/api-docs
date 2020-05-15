# Webhooks

You can create webhooks which subscribe to events from the <a href="https://app.vidgrid.com/webhooks" target="_blank">Webhook Settings</a> page in your VidGrid account. 

Each webhook created can subscribe to one or more events. When an event is fired, VidGrid will POST data to the endpoint specified in the webhook.

You can view logs for events fired from the <a href="https://app.vidgrid.com/webhooks" target="_blank">Webhook Settings</a> page in your VidGrid account.

## Video Events

### Video Uploaded

> Example data sent with Video Uploaded event.

```json
{
  "event_type": "VIDEO_UPLOADED",
  "data": Video Resource Object,
  "token": "...",
  "extras": {
    "key1": "value 1",
    "key2": "value 2"
  }
}
```

Fired when a video is uploaded to VidGrid. The video is currently embeddable, but not playable. 

Properties of a base [Video Resource](#video-resource) as well as **metadata** are available at this point.

*Note: Some <strong>metadata</strong> values could change between video uploading and video processing. See [Video Resource](#video-resource) for more details.*

| Prop | Type | Value |
| ---- | ---- | ----- |
| **event_type** | string | `VIDEO_UPLOADED` |
| **data** | [Video Resource](#video-resource) | The video resource tied to this event. |
| **token** | **?**string | Token used if this video was created through the API. |
| **extras** | **?**array | An array of extra data if sent through the API.<br>*See [Create Token](#create-token) for more details about `webhook_extras`* |

### Video Ready

> Example data sent with Video Ready event.

```json
{
  "event_type": "VIDEO_READY",
  "data": Video Resource Object,
  "token": "...",
  "extras": {
    "key1": "value 1",
    "key2": "value 2"
  }
}
```

Fired when a video is processed and ready for playback on VidGrid. 

Properties of a base [Video Resource](#video-resource) as well as **signed_url**, **duration**, and **jwts** are available at this point.

*Note: Video <strong>thumbnail</strong> may not be ready at this point, but embedded videos will be updated automatically when the thumbnail is generated.*

| Prop | Type | Value |
| ---- | ---- | ----- |
| **event_type** | string | `VIDEO_READY` |
| **data** | [Video Resource](#video-resource) | The video resource tied to this event. |
| **token** | **?**string | Token used if this video was created through the API. |
| **extras** | **?**array | An array of extra data if sent through the API.<br>*See [Create Token](#create-token) for more details about `webhook_extras`* |

## Caption Events

### Caption Requested

> Example data sent with Caption Requested event.

```json
{
  "event_type": "CAPTION_REQUESTED",
  "data": Caption Resource Object,
  "extras": {
    "key1": "value 1",
    "key2": "value 2"
  }
}
```

Fired when a caption has been requested for a video.

All properties of a [Caption Resource](#caption-resource) are available at this point.

| Prop | Type | Value |
| ---- | ---- | ----- |
| **event_type** | string | `CAPTION_REQUESTED` |
| **data** | [Caption Resource](#caption-resource) | The caption resource tied to this event. |
| **extras** | **?**array | An array of extra data if sent through the API.<br>*See [Create Token](#create-token) for more details about `webhook_extras`* |

### Caption Ready

> Example data sent with Caption Ready event.

```json
{
  "event_type": "CAPTION_READY",
  "data": Caption Resource Object,
  "extras": {
    "key1": "value 1",
    "key2": "value 2"
  }
}
```

Fired when a caption has been generated and is attached to the video.

All properties of a [Caption Resource](#caption-resource) are available at this point.

| Prop | Type | Value |
| ---- | ---- | ----- |
| **event_type** | string | `CAPTION_READY` |
| **data** | [Caption Resource](#caption-resource) | The caption resource tied to this event. |
| **extras** | **?**array | An array of extra data if sent through the API.<br>*See [Create Token](#create-token) for more details about `webhook_extras`* |