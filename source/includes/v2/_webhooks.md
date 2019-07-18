# Webhooks

**TODO: this section needs to be updated**

Since video recording and uploading is an asynchronous task, you can give us a webook URL that we will post to once a video is ready on VidGrid.

You can set the webhook options (`video_endpoint`, `video_endpoint_trigger`, and `video_endpoint_extras`) in both the [Recording API](#recording-api) and [Uploading API](#uploading-api).

You can view logs for calls to your endpoint under [integration settings](https://app.vidgrid.com/integrations) in your VidGrid account.

### Webhook Settings Object

Used to configure webhook behavior. 

**TODO: not sure where this belongs yet**

| Parameter | Type | Description | Default |
| --------- | ---- | ----------- | ------- |
| **video_endpoint** | string | TODO | TODO |
| **video_endpoint_trigger** | string | TODO | TODO |
| **video_endpoint_extras** | array | TODO | TODO |

> The incoming webhook response body will look like this:

```json
{
  "token": "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789",
  "identifier": "123456ABCDEF",
  "videoURL": "https://app.vidgrid.com/view/123456ABCDEF",
  "embedURL": "https://app.vidgrid.com/embed/123456ABCDEF",
  "iframe": "<iframe src='https://app.vidgrid.com/embed/123456ABCDEF'></iframe>",
  "video_endpoint_extras": {
    "extra1": "Something I wanted at my endpoint",
    "extra2": "Another thing I wanted at my endpoint",
  }
}
```

### Webhook Response Object

| Key | Type | Value |
| --- | ---- | ----- |
| **token** | string | One-time token that was used to upload the video. |
| **identifier** | string | The unique identifier for your video. |
| **videoURL** | string | URL to view your video. |
| **embedURL** | string | URL you can use as the source of an iframe. |
| **iframe** | string | An iframe containing the video. |
| **video_endpoint_extras** | array? | Any `video_endpoint_extras` sent through the [Recording API](#recording-api) or [Uploading API](#uploading-api). |