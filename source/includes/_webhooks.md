# Webhooks

> The incoming webhook response body will look like this:

```json
{
  "token": "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789",
  "randtag": "123456ABCDEF",
  "videoURL": "https://app.vidgrid.com/view/123456ABCDEF",
  "embedURL": "https://app.vidgrid.com/embed/123456ABCDEF",
  "iframe": "<iframe src='https://app.vidgrid.com/embed/123456ABCDEF'></iframe>",
  "video_endpoint_extras": {
    "extra1": "Something I wanted at my endpoint",
    "extra2": "Another thing I wanted at my endpoint",
  }
}
```

Since video recording and uploading is an asynchronous task, you can give us a webook URL that we will call once a video is uploaded to VidGrid.

You can set the webhook URL endpoint with the `video_endpoint` parameter in both the [Recording API](#recording-api) and [Uploading API](#uploading-api).

You can view logs for calls to your endpoint under [integration settings](https://app.vidgrid.com/integrations) in your VidGrid account.

### Webhook Response Body

          |             |
--------- | ----------- |
**token** string | Token that the video was used to record or upload the video.
**randtag** string | The unique ID for your video.
**videoURL** string | URL to view your video.
**embedURL** string | URL you can use as the source of an iframe.
**iframe** string | An iframe containing the video.
**video_endpoint_extras** array or null | Any `video_endpoint_extras` sent through the [Recording API](#recording-api) or [Uploading API](#uploading-api).
