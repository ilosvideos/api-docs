# Video API

The Video API allows you to interact with videos on your VidGrid account.

## Get Video

This endpoint returns an array of [Video Objects](#video-object).

### HTTP Request

> Example Get Video Request

```shell
curl -X GET \
  'https://api.vidgrid.com/v2/videos/identifier' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "include": [
        "signed_url",
        "metadata",
        "thumbnail"
    ]
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/videos/identifier")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'
request.body = '{
  "include": [
    "signed_url",
    "metadata",
    "thumbnail"
  ]
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/videos/identifier"

payload = '{
  "include": [
    "signed_url",
    "metadata",
    "thumbnail"
  ]
}'
headers = {
  'Content-Type': "application/json",
  'Authorization': "Basic {token}",
}

response = requests.request("GET", url, data=payload, headers=headers)

print(response.text)
```

```javascript
// NodeJS

var request = require("request");

var options = {
  method: 'GET',
  url: 'https://api.vidgrid.com/v2/videos/identifier',
  headers: { 
    Authorization: 'Basic {token}',
    'Content-Type': 'application/json' 
  },
  body: { 
    include: [ 
      'signed_url', 
      'metadata', 
      'thumbnail' 
    ] 
  },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

`GET https://api.vidgrid.com/v2/videos`

### Base Options

| Parameter | Type | Description | Default |
| --------- | ---- | ----------- | ------- |
| **identifiers** | string&#124;array | The unique identifiers(s) of the desired videos.<br>*You may also pass a single identifier on the URL: `/v2/videos/identifier`* | *Required* |
| **include** | [Video Includes Array](#video-includes-array) | See [Video Includes Array](#video-includes-array). | - |

### Video Includes Array

An array of properties to be included when requesting a [Video Object](#video-object).

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| **signed_url** | string | Request a signed url that can be used to view the video.<br>*Expires after 6 hours.* |
| **metadata** | string | Request metadata about the video. |
| **thumbnail** | string | Request signed urls that can be used to view video thumbnails. |

## Video Object

> Example Get Video Response

```json
{
  "data": [
    {
      "identifier": "...",
      "title": "Video Title",
      "metadata": {
          "width": 1920,
          "height": 1280,
          "duration": "404.260000",
          "filesize": "130184650"
      },
      "signed_url": "...",
      "thumbnail": {
        "signed_url": "...",
        "signed_url_small": "..."
      },
      "view_url": "https://app.vidgrid.com/view/identifier",
      "embed_url": "https://app.vidgrid.com/embed/identifier"
    }
  ]
}
```

*Property types with a <strong>?</strong> are only returned if they are requested by a [Video Includes Array](#video-includes-array).*

| Key | Type | Value |
| --- | ---- | ----- |
| **identifier** | string | The unique identifier for the video. |
| **title** | string | Title of the video. |
| **view_url** | string | URL to view the video. |
| **embed_url** | string | URL to embed the video. |
| **signed_url** | string<strong>?</strong> | Signed url that can be used to view the video. |
| **metadata.width** | TODO: int<strong>?</strong> | Width of the video. |
| **metadata.height** | TODO: int<strong>?</strong> | Height of the video. |
| **metadata.duration** | TODO: string<strong>?</strong> | Duration of the video in seconds. |
| **metadata.filesize** | TODO: string<strong>?</strong> | Size of the video in bytes. |
| **thumbnail.signed_url** | string<strong>?</strong> | Signed URL for the video thumbnail. |
| **thumbnail.signed_url_small** | string<strong>?</strong> | Signed URL for as smaller version of the video thumbnail. |