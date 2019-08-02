# Video API

The Video API allows you to interact with videos on your VidGrid account.

## Get Video

This endpoint returns an array of [Video Resources](#video-resource).

### HTTP Request

> Example get video request.

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

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **identifier** | string | The unique identifier of a video.<br>*You may pass this in the body or on the URL: `/v2/videos/identifier`* | *Required unless <strong>identifiers</strong> is set* |
| **identifiers** | array | The unique identifiers of the desired videos. When set, this takes priority over **identifier**. | - |
| **include** | [Video Params Array](#video-params-array) | An array of properties to be included with the returned [Video Resources](#video-resource). | - |

### Video Params Array

An array of properties to be included with a returned [Video Resource](#video-resource).

| Param | Description |
| ----- | ----------- |
| **signed_url** | Request a signed URL that can be used to view the video.<br>*Expires after 6 hours.* |
| **metadata** | Request metadata about the video. |
| **thumbnail** | Request signed URLs that can be used to view video thumbnails.<br>*TODO: expiration?* |

## Video Resource

> Example get video response.

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

The Video Resource(s) returned in a successful response.

*Property types with a <strong>?</strong> are only returned if they are requested with a [Video Params Array](#video-params-array).*

| Prop | Type | Value |
| ---- | ---- | ----- |
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