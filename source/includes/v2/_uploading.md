# Uploading API

The Uploading API allows you to upload videos using a web uploader in an iframe. A basic implementation is as follows:

1. Request an upload token from VidGrid
2. Display an upload form to a user using the either `uploadIframe` or `uploadIframeBasic` returned in Step 1.
3. Wait for a response at your [Webook](#webhooks) endpoint and use the video data as you wish (eg. embed the video in a support ticket)

## Get Upload Token

> Example Request

```shell
curl -X POST \
  'https://api.vidgrid.com/v2/token/upload' \
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

url = URI("https://api.vidgrid.com/v2/token/upload")

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

url = "https://api.vidgrid.com/v2/token/upload"

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
  "url": "https://api.vidgrid.com/v2/token/upload",
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
  "uploadIframe": "<iframe src='https://app.vidgrid.com/embed/api/uploader/ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'></iframe>",
  "uploadIframeBasic": "<iframe src='https://app.vidgrid.com/embed/api/uploader/ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789?uploaderType=basic></iframe>",
  "expires": 1527729792
}
```

> `expires` is a UNIX Timestamp (UTC) indicating when the temporary token will expire

This endpoint returns a one-time upload token, ways to display an upload form, and some additional data you can see in the sample response to the right.

### HTTP Request

`POST https://api.vidgrid.com/v2/token/upload`

### Parameters

          |             |
--------- | ----------- |
**api_key** string | A [User](#api-key-types) or [Organization](#api-key-types) API key from your VidGrid account.
**service_name** optional string | The name of your service. Mostly used for informational purposes.
**video_endpoint** optional string | The [Webook](#webhooks) URL endpoint where a POST will be made after a video has been uploaded.
**video_endpoint_trigger** optional string | Determines when to trigger the [Webook](#webhooks). The default is `ON_UPLOAD_COMPLETE` which happens as soon as a video has been uploaded to VidGrid. The other option is `ON_PROCESSING_COMPLETE` which happens when a video has completed processing and is watchable on VidGrid.
**video_endpoint_extras** optional array | An array of extra data that will be sent to the [Webook](#webhooks) endpoint.
**video_set_public** optional boolean | When set to `true`, an uploaded video will be viewable by anyone with a link. If set to `false`, a user must be logged in to your VidGrid account to view the video. If not set, your user or organization defaults will be used.
**collection** optional string | Automatically add the uploaded video to a folder. <br> *Note: Collections are now called Folders in app.*
