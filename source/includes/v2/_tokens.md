# Token API

The Token API allows you to requests tokens that can be used to record or upload videos into your VidGrid account.


## Generate Token

This endpoint generates and returns a one-time token as well as iframes and uris that can be provided to a user for recording or uploading videos.

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


### HTTP Request

`POST https://api.vidgrid.com/v2/tokens`


### Base Parameters

The base parameters for a generate token request.

Parameter | Type | Description | Default
--------- | ---- | ----------- | -------
**type** | string | **(Required)** Whether this token will be used for recording or uploading.<br>*Possible values: `record`, `upload`.* | -
**video** | [Video Settings Array](#video-settings-array) | See [Video Settings Array](#video-settings-array). | -
**webhook** | [Webhook Settings Array](#webhook-settings-array) | See [Webhook Settings Array](#webhook-settings-array). | -
**recorder** | [Recorder Settings Array](#recorder-settings-array) | See [Recorder Settings Array](#recorder-settings-array). | -


### Video Settings Array

Used to set properties on a newly created video.

Parameter | Type | Description | Default
--------- | ---- | ----------- | -------
**title** | string | Sets the title for the created video. Note that if `recorder.hide_video_title` is set to `false` the end user will have the option to set their own title from within the recorder. | -
**public** | boolean | When set to `true`, an uploaded video will be viewable by anyone with a link. If set to `false`, a user must be logged in to your VidGrid account to view the video. If not set, your user or organization default settings will be used. | -
**folder** | string | Automatically add the uploaded video to a folder.<br>*Possible values: `my_grid`, `org_library`, `any valid folder identifier`.* | my_grid


### Webhook Settings Array

Used to configure webhook behavior.

Parameter | Type | Description | Default
--------- | ---- | ----------- | -------
**video_endpoint** | string | TODO | TODO
**video_endpoint_trigger** | string | TODO | TODO
**video_endpoint_extras** | array | TODO | TODO


### Recorder Settings Array

Used to configure recorder behavior. 

*Only applies to tokens with a `type` of `record`.*

Parameter | Type | Description | Default
--------- | ---- | ----------- | -------
**auto_show_video_page** | boolean | Whether or not to automatically open the video in the user's browser after recording. | false
**auto_close_recorder** | boolean | Whether or not to close the recorder when it is finished uploading the video. If set to `true`, the user will only be able to record one video with this token. | false
**hide_video_title_input** | boolean | Whether or not to allow the user title the video after recording. | false
**default_fullscreen** | boolean | Whether or not the recorder should launch in fullscreen mode. | false
**force_webcam_only** | boolean | Whether or not the recorder should be restricted to webcam only mode. | false
**on_install** | [Recorder Install Settings Array](#recorder-install-settings-array) | See [Recorder Install Settings Array](#recorder-install-settings-array). | -


### Recorder Install Settings Array

Used to configure recorder behavior during first time installation.

*Only applies to tokens with a `type` of `record`.*

Parameter | Type | Description | Default
--------- | ---- | ----------- | -------
**auto_authenticate** | boolean | Whether or not a user should be automatically authenticated the first time the recorder is launched after install. If set to `false`, the user will need to return to their browser and click record in order to be authenticated. | true
**show_instructions_page** | boolean | Whether or not to download the recorder without redirecting to the install recorder page. This happens the first time a use clicks record when using the iframe method. | false


## Record Token Example

A basic implementation is as follows:

1. Request a record token from VidGrid
2. Display a record button to a user using the either `recordButtonIframe` or `recorderLaunchURI` returned in Step 1. (We recommend using the iframe since it handles downloading and installing the recorder for first time users)
3. Wait for a response at your [Webook](#webhooks) endpoint and use the video data as you wish (eg. embed the video in a support ticket)


## Upload Token Example

A basic implementation is as follows:

1. Request an upload token from VidGrid
2. Display an upload form to a user using the either `uploadIframe` or `uploadIframeBasic` returned in Step 1.
3. Wait for a response at your [Webook](#webhooks) endpoint and use the video data as you wish (eg. embed the video in a support ticket)