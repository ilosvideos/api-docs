# Video API

The Video API allows you to retrieve information about your videos on VidGrid.

## Get Video Metadata

> Example Request

```shell
curl -X POST \
  'https://api.vidgrid.com/v1/video/metadata' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_key" : "{key}",
    "randtag" : "123456ABCDEF"
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v1/video/metadata")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request.body = '{
  api_key: "{key}",
  randtag : "123456ABCDEF"
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v1/video/metadata"

payload = {
  'api_key': "{key}",
  'randtag' : "123456ABCDEF"
}

headers = {
  'Content-Type': "application/json",
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```javascript
var settings = {
  "url": "https://api.vidgrid.com/v1/video/metadata",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
  },
  "data": {
    api_key: "{key}",
    randtag : "123456ABCDEF"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

> Example Response

```json
{
  "message": "",
  "level": "success",
  "data": {
    "title": "This is my video title",
    "hours": "00",
    "mins": "15",
    "secs": "10",
    "ms": "380",
    "totalMs": 910380,
    "videoSignedUrl": "https://www.signed-url-i-can-use-to-download-my-video.com",
    "thumbnailSignedUrl": "https://www.signed-url-i-can-use-to-view-my-video-thumbnail.com",
    "thumbnailSmallSignedUrl": "https://www.signed-url-i-can-use-to-view-my-small-video-thumbnail.com"
  }
}
```

This endpoint returns metadata for a specified video.

### HTTP Request

`POST https://api.vidgrid.com/v1/video/metadata`

### Parameters

          |             |
--------- | ----------- |
**api_key** string | A [User](#api-key-types) or [Organization](#api-key-types) API key from your VidGrid account.
**randtag** string | The unique ID of your video.

## Get Video File

> Example Request

```shell
curl -X POST \
  'https://api.vidgrid.com/v1/video/file' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_key" : "{key}",
    "randtag" : "123456ABCDEF"
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v1/video/file")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request.body = '{
  api_key: "{key}",
  randtag : "123456ABCDEF"
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v1/video/file"

payload = {
  'api_key': "{key}",
  'randtag' : "123456ABCDEF"
}

headers = {
  'Content-Type': "application/json",
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```javascript
var settings = {
  "url": "https://api.vidgrid.com/v1/video/file",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
  },
  "data": {
    api_key: "{key}",
    randtag : "123456ABCDEF"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

> Example Response

```json
{
  "message": "",
  "level": "success",
  "data": {
      "signedUrl": "https://www.signed-url-i-can-use-to-download-my-video.com"
  }
}
```

This endpoint returns a signed url for the video file.

### HTTP Request

`POST https://api.vidgrid.com/v1/video/file`

### Parameters

          |             |
--------- | ----------- |
**api_key** string | A [User](#api-key-types) or [Organization](#api-key-types) API key from your VidGrid account.
**randtag** string | The unique ID of your video.