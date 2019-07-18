# Video Creation Token API

The Token API allows you to requests tokens that can be used to record or upload videos into your VidGrid account. 

Record tokens use the VidGrid Screen Recorder to record and upload videos to your VidGrid account while upload tokens use an upload iframe to upload pre-existing videos to VidGrid.

## Create Token

This endpoint generates and returns a one-time token as well as iframes and URI's that can be provided to a user for recording or uploading videos.

### HTTP Request

> Example Create Token Request

```shell
curl -X POST \
  'https://api.vidgrid.com/v2/tokens' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Basic {token}' \
  -d '{
    "type": "record"
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/tokens")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'
request.body = '{
  "type": "record"
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/tokens"

payload = {
  "type": "record"
}
headers = {
  'Content-Type': "application/json",
  'Authorization': "Basic {token}",
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```javascript
// NodeJS

var request = require("request");

var options = {
  method: 'POST',
  url: 'https://api.vidgrid.com/v2/tokens',
  headers: { 
    Authorization: 'Basic {token}',
    'Content-Type': 'application/json' 
  },
  body: { 
    type: 'record' 
  },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

`POST https://api.vidgrid.com/v2/tokens`

### Base Options

The base options for a generate token request.

| Parameter | Type | Description | Default |
| --------- | ---- | ----------- | ------- |
| **type** | string | Whether this token will be used for recording or uploading.<br>*Possible values: `record`, `upload`.* | *Required* |
| **video** | [Video Settings Object](#video-settings-object) | See [Video Settings Object](#video-settings-object). | - |
| **webhook** | [Webhook Settings Object](#webhook-settings-object) | See [Webhook Settings Object](#webhook-settings-object). | - |
| **recorder** | [Recorder Settings Object](#recorder-settings-object) | See [Recorder Settings Object](#recorder-settings-object). | - |

### Video Settings Object

Used to set properties on a newly created video.

| Parameter | Type | Description | Default |
| --------- | ---- | ----------- | ------- |
| **title** | string | Sets the title for the created video. Note that if `recorder.hide_video_title` is set to `false` the end user will have the option to set their own title from within the recorder. | - |
| **public** | boolean | When set to `true`, an uploaded video will be viewable by anyone with a link. If set to `false`, a user must be logged in to your VidGrid account to view the video. If not set, your user or organization default settings will be used. | - |
| **folder** | string | Automatically add the uploaded video to a folder.<br>*Possible values: `my_grid`, `org_library`, `any valid folder identifier`.* | my_grid |


### Recorder Settings Object

Used to configure recorder behavior. 

*Only applies to tokens with a `type` of `record`.*

| Parameter | Type | Description | Default |
| --------- | ---- | ----------- | ------- |
| **auto_show_video_page** | boolean | Whether or not to automatically open the video in the user's browser after recording. | false |
| **auto_close_recorder** | boolean | Whether or not to close the recorder when it is finished uploading the video. If set to `true`, the user will only be able to record one video with this token. | false |
| **hide_video_title_input** | boolean | Whether or not to allow the user title the video after recording. | false |
| **default_fullscreen** | boolean | Whether or not the recorder should launch in fullscreen mode. | false |
| **force_webcam_only** | boolean | Whether or not the recorder should be restricted to webcam only mode. | false |
| **on_install** | [Recorder Install Settings Object](#recorder-install-settings-object) | See [Recorder Install Settings Object](#recorder-install-settings-object). | - |

### Recorder Install Settings Object

Used to configure recorder behavior during first time installation.

*Only applies to tokens with a `type` of `record`.*

| Parameter | Type | Description | Default |
| --------- | ---- | ----------- | ------- |
| **auto_authenticate** | boolean | Whether or not a user should be automatically authenticated the first time the recorder is launched after install. If set to `false`, the user will need to return to their browser and click record in order to be authenticated. | true |
| **show_instructions_page** | boolean | Whether or not to download the recorder without redirecting to the install recorder page. This happens the first time a use clicks record when using the iframe method. | false |

## Record Token Object

> Example Create Record Token Response

```json
{
  "data": {
    "token": "...",
    "expires": 1563328704,
    "recorder": {
      "download_url": "...",
      "launch_uri": "...",
      "iframe_button": "..."
    }
  }
}
```

| Key | Type | Value |
| --- | ---- | ----- |
| **token** | string | One-time token that is used for validation when recording and uploading a video. |
| **expires** | Timestamp | UNIX Timestamp (UTC) indicating when the temporary token will expire. |
| **recorder.download_url** | string | URL that can be used to download the recorder. |
| **recorder.launch_uri** | string | URI that can be used to launch the recorder. |
| **recorder.iframe_button** | string | Iframe containing a record button. It will handle downloading and launching the recorder. |

## Upload Token Object

> Example Create Upload Token Response

```json
{
  "data": {
    "token": "...",
    "expires": 1563328704,
    "uploader": {
      "iframe": "...",
      "iframe_basic": "..."
    }
  }
}
```

| Key | Type | Value |
| --- | ---- | ----- |
| **token** | string | One-time token that is used for validation when uploading a video. |
| **expires** | Timestamp | UNIX Timestamp (UTC) indicating when the temporary token will expire. |
| **uploader.iframe** | string | Iframe containing a simple upload dropzone. |
| **recorder.iframe_basic** | string | Iframe containing a simple upload button. |

## Example Usage

A basic implementation of the Recording/Uploading API could be as follows:

1. Request a token from VidGrid and save the returned data.
2. Display a recording/uploading iframe to the user using the either `recorder.iframe_button` or `uploader.iframe` (we recommend using our iframes since they handle downloading and installing the recorder for first time users).
3. TODO: Once a user has used the recorder/uploader to upload a video, wait for a response at your [Webook](#webhooks) endpoint and use the video data as you wish (eg. embed the video in a support ticket)

You may also take a look at the [Live Demos](#live-demos) for more examples.