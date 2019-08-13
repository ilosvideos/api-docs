# Webhooks

You can create webhooks and subscribe to multiple events from the <a href="https://app.vidgrid.com/webhooks" target="_blank">Webhook Settings</a> page in your VidGrid account. 

## Events

> Example data sent when an event is fired.

```json
{
  "data": {
    "resource": ...,
    "token": "..."
  }
}
```

Each webhook created can subscribe to one or more events. When an event is fired, VidGrid will POST data to the endpoint specified in the webhook.

You can view logs for events fired from the <a href="https://app.vidgrid.com/webhooks" target="_blank">Webhook Settings</a> page in your VidGrid account.

### Video Uploaded

Fired when a video is uploaded to VidGrid. The video is embeddable, but not playable. 

Properties of a base [Video Resource](#video-resource) are available at this point.

| Prop | Type | Value |
| ---- | ---- | ----- |
| **resource** | [Video Resource](#video-resource) | The video resource tied to this event. |
| **token** | **?**string | Token used if this video was created through the API. |

### Video Ready

Fired when a video is processed and ready for playback on VidGrid. 

Properties of a base [Video Resource](#video-resource) are available at this point as well as properties in the [Get Video Params Array](#get-video-params-array). 

*Note: The video thumbnail may not be ready at this point, but embedded videos will be updated automatically when the thumbnail is generated.*

| Prop | Type | Value |
| ---- | ---- | ----- |
| **resource** | [Video Resource](#video-resource) | The video resource tied to this event. |
| **token** | **?**string | Token used if this video was created through the API. |