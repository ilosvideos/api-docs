# Recording API

The Recording API allows you to record videos using the VidGrid Screen Recorder. A basic implementation is as follows:

1. Request a record token from VidGrid
2. Display a record button to a user using the either `recordButtonIframe` or `recorderLaunchURI` returned in Step 1. (We recommend using the iframe since it handles downloading and installing the recorder for first time users)
3. Wait for a response at your [Webook](#webhooks) endpoint and use the video data as you wish (eg. embed the video in a support ticket)

## Get Record Token

> Example Request

```shell
curl -X POST \
  'https://api.vidgrid.com/v2/token/record' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_key" : "{key}",
    "video_endpoint" : "https://yoursite.com/endpoint",
    "video_set_public" : true
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/token/record")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request.body = '{
  api_key: "{key}",
  video_endpoint: "https://yoursite.com/endpoint",
  video_set_public: true
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/token/record"

payload = {
  'api_key': "{key}",
  'video_endpoint': "https://yoursite.com/endpoint",
  'video_set_public': true
}

headers = {
  'Content-Type': "application/json",
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```javascript
var settings = {
  "url": "https://api.vidgrid.com/v2/token/record",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
  },
  "data": {
    api_key: "{key}",
    video_endpoint: "https://yoursite.com/endpoint",
    video_set_public: true
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

> Example Response

```json
{
  "worked": true,
  "video_endpoint": "https://yoursite.com/endpoint",
  "video_endpoint_extras": null,
  "video_set_public": true,
  "token": "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789",
  "recorderDownloadUrl": "https://app.vidgrid.com/recorder/download/ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789",
  "recorderLaunchURI": "ilosrecord:record?token=ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789",
  "recordButtonIframe": "<iframe src='https://app.vidgrid.com/embed/api/recorder/ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'></iframe>",
  "expires": 1527729792
}
```

> `expires` is a UNIX Timestamp (UTC) indicating when the temporary token will expire

This endpoint returns a one-time record token, ways to display a record button, and some additional data you can see in the sample response to the right.

### HTTP Request

`POST https://api.vidgrid.com/v2/token/record`

### Parameters

          |             |
--------- | ----------- |
**api_key** string | A [User](#api-key-types) or [Organization](#api-key-types) API key from your VidGrid account.
**service_name** optional string | The name of your service. Mostly used for informational purposes.
**video_endpoint** optional string | The [Webook](#webhooks) URL endpoint where a POST will be made after a video has been recorded and uploaded.
**video_endpoint_trigger** optional string | Determines when to trigger the [Webook](#webhooks). The default is `ON_UPLOAD_COMPLETE` which happens as soon as a video has been uploaded to VidGrid. The other option is `ON_PROCESSING_COMPLETE` which happens when a video has completed processing and is watchable on VidGrid.
**video_endpoint_extras** optional array | An array of extra data that will be sent to the [Webook](#webhooks) endpoint.
**auto_open_video** optional boolean | Whether or not to automatically open the video in the user's browser after recording.
**auto_close_recorder** optional boolean | Whether or not to close the recorder when it is finished uploading the video. If set to `true`, the user will only be able to record one video with this token.
**request_video_title** optional boolean | Whether or not to have the user title the video after recording.
**record_single_video** optional boolean | **deprecated** This option has been deprecated and effectively sets `auto_open_video = false`, `auto_close_recorder = true`, and `request_video_title = false`. These three options should be used explicitly in favor of `record_single_video`.
**video_title** optional string | Used to give the video a title if `request_video_title` is set to `false`.
**video_set_public** optional boolean | When set to `true`, an uploaded video will be viewable by anyone with a link. If set to `false`, a user must be logged in to your VidGrid account to view the video. If not set, your user or organization defaults will be used.
**collection** optional string | Automatically add the uploaded video to a folder. <br> *Note: Collections are now called Folders in app.*
**auto_download_recorder** optional boolean | Whether or not to download the recorder without redirecting to the install recorder page. This happens the first time a use clicks record when using the iframe method.
**auto_authenticate_on_install** optional boolean | Whether or not a user should be automatically authenticated the first time the recorder is launched after install. If set to `false`, the user will need to return to their browser and click record in order to be authenticated.
**auto_launch_fullscreen** optional boolean | Whether or not the recorder should launch in fullscreen mode by default.
**webcam_only** optional boolean | Whether or not the recorder should launch in webcam only mode. The user will not be able to turn off webcam only.
