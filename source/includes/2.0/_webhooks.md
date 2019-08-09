# Webhooks

**TODO: this whole section needs to be updated**

Since video recording and uploading is an asynchronous task, you can give us a webook URL that we will post to once a video is ready on VidGrid.

You can set the webhook options (`video_endpoint`, `video_endpoint_trigger`, and `video_endpoint_extras`) in both the [Recording API](#recording-api) and [Uploading API](#uploading-api).

You can view logs for calls to your endpoint under <a href="https://app.vidgrid.com/integrations" target="_blank">integration settings</a> in your VidGrid account.

## Webhook Response

> Example webhook response.

```json
{
  "token": "...",
  "video": {},
  "video_endpoint_extras": {
    "extra1": "Something I wanted at my endpoint",
    "extra2": "Another thing I wanted at my endpoint",
  }
}
```

| Prop | Type | Value |
| ---- | ---- | ----- |
| **token** | string | One-time token that was used to record or upload a video. |
| **video** | [Video Resource](#video-resource) | The video that was created before firing the webhook. TODO: what includes would be on the Video Resource at this point? |
| **video_endpoint_extras** | array? | Any `video_endpoint_extras` sent through the [Recording API](#recording-api) or [Uploading API](#uploading-api). |