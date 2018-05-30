# Webhooks

> The incoming webhook response body will look like this:

```json
{
  "token": "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789",
  "randtag": "123456ABCDEF",
  "videoURL": "https://app.ilosvideos.com/view/123456ABCDEF",
  "embedURL": "https://app.ilosvideos.com/embed/123456ABCDEF",
  "iframe": "<iframe src='https://app.ilosvideos.com/embed/123456ABCDEF'></iframe>",
  "video_endpoint_extras": {
    "extra1": "Something I wanted at my endpoint",
    "extra2": "Another thing I wanted at my endpoint",
  }
}
```

Since video recording and uploading is an asynchronous task, you can give us a webook URL that we will call once a video is uploaded to ilos.

You can set the webhook URL endpoint with the `video_endpoint` parameter in both the [Recording API](#recording) and [Uploading API](#uploading).

You can view logs for calls to your endpoint under [integration settings](https://app.ilosvideos.com/integrations) in your ilos account.

### Webhook Response Body

Parameter | Description |
--------- | ----------- |
**token** string | Token that the video was used to record or upload the video.
**randtag** string | The unique ID for your video.
**videoURL** string | URL to view your video.
**embedURL** string | URL you can use as the source of an iframe.
**iframe** string | An iframe containing the video.
**video_endpoint_extras** array or null | Any `video_endpoint_extras` sent through the [Recording API](#recording) or [Uploading API](#uploading).

<!-- TODO: move this to a stylesheet -->
<style>
  .content table tr strong {
    display: block;
  }
</style>
