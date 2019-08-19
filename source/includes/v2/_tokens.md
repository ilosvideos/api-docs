# Video Creation Token API

The Video Creation Token API allows you to requests token that can be used to record or upload videos into your VidGrid account. 

See [Example Usage](#example-usage) for more information.

## Create Token

This endpoint generates and returns a [Token Resource](#token-resources) that can be used for creating videos.

### HTTP Request

> Example create record token request.

```shell
curl -X POST \
  'https://api.vidgrid.com/v2/tokens' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Basic {token}' \
  -d '{
    "type": "record",
    "video": {
    	"title": "My New Video",
    	"public": false
    },
    "recorder": {
    	"auto_close_recorder": true,
    	"hide_video_title_input": true,
    	"on_install": {
    		"auto_authenticate": true,
    		"show_instructions_page": true
    	}
    },
    "webhook_extras": {
      "key1": "val1",
      "key2": "val2"
    }
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
  "type": "record",
  "video": {
    "title": "My New Video",
    "public": false
  },
  "recorder": {
    "auto_close_recorder": true,
    "hide_video_title_input": true,
    "on_install": {
      "auto_authenticate": true,
      "show_instructions_page": true
    }
  },
  "webhook_extras": {
    "key1": "val1",
    "key2": "val2"
  }
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/tokens"

payload = {
  "type": "record",
  "video": {
    "title": "My New Video",
    "public": false
  },
  "recorder": {
    "auto_close_recorder": true,
    "hide_video_title_input": true,
    "on_install": {
      "auto_authenticate": true,
      "show_instructions_page": true
    }
  },
  "webhook_extras": {
    "key1": "val1",
    "key2": "val2"
  }
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
    type: "record",
    video: {
    	title: "My New Video",
    	public: false
    },
    recorder: {
    	auto_close_recorder: true,
    	hide_video_title_input: true,
    	on_install: {
    		auto_authenticate: true,
    		show_instructions_page: true
    	}
    },
    webhook_extras: {
      key1: "val1",
      key2: "val2"
    }
  },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

`POST https://api.vidgrid.com/v2/tokens`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **type** | string | The type of token that will be used. See [Token Types](#token-types) for more info.<br>*Possible values: `record`, `upload`, `direct_upload`.* | *Required* |
| **video** | [Video Params Object](#video-params-object) | Sets properties on videos created with this token. | - |
| **recorder** | [Recorder Params Object](#recorder-params-object) | Configures recorder behavior when launched with this token.<br>*Only applies to tokens with a `type` of `record`.* | - |
| **webhook_extras** | array | Any extra data that you would like to be sent along when [Webhook](#webhooks) events are fired. | - |

### Video Params Object

Sets properties on videos created with a specific token.

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **title** | string | Sets the title for the created video.<br>*Note: that if `recorder.hide_video_title` is set to `false` the end user will have the option to set their own title from within the recorder.* | - |
| **public** | boolean | When set to `true`, an uploaded video will be viewable by anyone with a link. If set to `false`, a user must be logged in to your VidGrid account to view the video. If not set, your user or organization default settings will be used. | - |
| **folder** | string | Automatically add uploaded videos to a folder. This should be set to a folder **identifier**. | - |

### Recorder Params Object

Configures recorder behavior when launched via a specific token.

*Only applies to tokens with a `type` of `record`.*

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **auto_show_video_page** | boolean | Whether or not to automatically open the video in the user's browser after recording. | false |
| **auto_close_recorder** | boolean | Whether or not to close the recorder when it is finished uploading the video. If set to `true`, the user will only be able to record one video with this token. | false |
| **hide_video_title_input** | boolean | Whether or not to allow the user title the video after recording. | false |
| **default_fullscreen** | boolean | Whether or not the recorder should launch in fullscreen mode. | false |
| **force_webcam_only** | boolean | Whether or not the recorder should be restricted to webcam only mode. | false |
| **on_install.auto_authenticate** | boolean | Whether or not a user should be automatically authenticated the first time the recorder is launched after install. If set to `false`, the user will need to return to their browser and click record in order to be authenticated. | true |
| **on_install.show_instructions_page** | boolean | Whether or not to download the recorder without redirecting to the install recorder page. This happens the first time a use clicks record when using the iframe method. | false |

## Token Resources

### Record Token Resource

> Example create record token response.

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

The Record Token Resource returned in a successful response.

| Prop | Type | Value |
| ---- | ---- | ----- |
| **token** | string | One-time token that is used for validation when recording and uploading a video. |
| **expires** | Timestamp | UNIX Timestamp (UTC) indicating when the temporary token will expire. |
| **recorder.download_url** | string | URL that can be used to download the recorder. |
| **recorder.launch_uri** | string | URI that can be used to launch the recorder. |
| **recorder.iframe_button** | string | Iframe containing a record button. It will handle downloading and launching the recorder. |

### Upload Token Resource

> Example create upload token response.

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

The Upload Token Resource returned in a successful response.

| Prop | Type | Value |
| ---- | ---- | ----- |
| **token** | string | One-time token that is used for validation when uploading a video. |
| **expires** | Timestamp | UNIX Timestamp (UTC) indicating when the temporary token will expire. |
| **uploader.iframe** | string | Iframe containing a simple upload dropzone. |
| **recorder.iframe_basic** | string | Iframe containing a simple upload button. |

### Direct Upload Token Resource

> Example create direct upload token response.

```json
{
  "data": {
    "formAttributes": {
        "action": "...",
        "method": "...",
        "enctype": "..."
    },
    "formInputs": {
        "key": "... ${filename}",
        "acl": "...",
        "x-amz-server-side-encryption": "...",
        "X-Amz-Credential": "...",
        "X-Amz-Algorithm": "...",
        "X-Amz-Date": "...",
        "Policy": "...",
        "X-Amz-Signature": "..."
    },
    "fileParamName": "...",
    "cloudUploadCallbackUrl": "...",
    "token": "..."
  }
}
```

The Direct Upload Token Resource returned in a successful response.

See [Direct Upload Example](#direct-upload-example) for more information on implementing this method.

| Prop | Type | Value |
| ---- | ---- | ----- |
| **formAttributes** | array | Form attributes necessary for the S3 upload. |
| **formInputs** | array | Key/value pairs necessary for the S3 upload.<br>*Important: <strong>formInputs.key</strong> contains a <strong>${filename}</strong> string that needs to be replaced with a unique file name for each file uploaded. This will also be used for the video title in VidGrid unless `video.title` is set in the [Create Token](#create-token) request.* |
| **fileParamName** | string | The required key name that should contain the file data for uploading.<br>*Important: Amazon requires this to be the last key/value pair included in the POST to S3.<br>e.g. `<input type="file" name="{fileParamName}">`* |
| **cloudUploadCallbackUrl** | string | URL to `POST` to once a video has finished uploading to S3 and is ready for processing. Returns a video identifier.<br>*Important: you need to include `cloudKey` with the request which is the value of `formInputs.key` after <strong>${filename}</strong> has been replaced.* |
| **token** | string | One-time token that is used for validation when uploading a video. It is then mainly used for informational purposes. |

## Example Usage

Below are some examples of how you can implement the video creation API.

### Recording Example

Use a `record` token to allow users to record new videos with the VidGrid Screen Recorder and upload them to your VidGrid account.

1. Request a `record` token from VidGrid and save the returned data.
2. Display a record button to the user using the either **recorder.iframe_button** or **recorder.launch_uri** (we recommend using the iframe since it will handle downloading and installing the recorder for first time users).
3. Create a [Webook](#webhooks) and subscribe to a [Video Uploaded](#video-uploaded) or [Video Ready](#video-ready) event. Once a user has created a video, the event will fire and a [Video Resource](#video-resource) will be sent to the webhook endpoint. You can then use the resource as you wish (e.g. embed the video somewhere within your app).

### Uploading Example

Use an `upload` token to allow users to upload pre-existing videos to VidGrid using a web uploader.

1. Request an `upload` token from VidGrid and save the returned data.
2. Display an uploader using the **uploader.iframe** or **uploader.iframe_basic**.
3. Create a [Webook](#webhooks) and subscribe to a [Video Uploaded](#video-uploaded) or [Video Ready](#video-ready) event. Once a user has uploaded a video, the event will fire and a [Video Resource](#video-resource) will be sent to the webhook endpoint. You can then use the resource as you wish (e.g. embed the video somewhere within your app).

### Direct Upload Example

A `direct_upload` token is used to bypass the VidGrid web uploader and upload videos directly to Amazon S3. It is a little more complex to implement but provides greater flexibility than the normal `upload` token.

1. Request a `direct_upload` token from VidGrid and save the returned data.
2. Make a `POST` request to S3 using the **formAttributes**, **formInputs**, and file data with the **fileParamName** as its key.<br>*Important: Amazon requires the file data to be the last key/value pair included in the POST to S3.*
4. Once the upload is complete, make a `POST` to **cloudUploadCallbackUrl** letting VidGrid know the file is ready to be processed.
5. Wait as the video goes through the normal processing steps. [Webhook Events](#events) events will fire as they normally would.