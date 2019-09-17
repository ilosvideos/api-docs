# Caption API

The Caption API allows you to request and manage closed captioning on your Videos.

## Caption Resource

The Caption Resource(s) returned in a successful response.

*Property types with a <strong>?</strong> are only returned if the caption `status` is `COMPLETED`.*

> Example Caption Resource Object.

```json
{
  "identifier": "...",
  "file_url": "...",
  "language": "...",
  "status": "...",
  "type": "...",
}
```

| Prop | Type | Value |
| ---- | ---- | ----- |
| **identifier** | string | The unique identifier for the caption on VidGrid. |
| **type** | string | The type of caption resource.<br>*Possible values: `machine`,`professional`,`manual`*|
| **status** | string | The current status of this caption resource.<br>*Possible values: `QUEUED`,`PENDING`,`IN_PROGRESS`,`CANCELED`,`FAILED`,`COMPLETED`*|
| **language** | **?**string | The language of the caption file. |
| **caption_url** | **?**string | URL to the VTT file for a caption resource. |
| **transcript_url** | **?**string | URL to the transcript for a caption resource. |

## Create Caption

This endpoint makes a caption request for a [Video Resource](#video-resource). It returns a [Caption Resource](#caption-resource) with a status but the caption will not be ready immediately.

### HTTP Request

> Example create caption request.

```shell
curl -X POST \
  'https://api.vidgrid.com/v2/captions' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "video_identifier": "...",
    "type": "machine"
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/captions")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'
request.body = '{
  "video_identifier": "...",
  "type": "machine"
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/captions"

payload = '{
  "video_identifier": "...",
  "type": "machine"
}'
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
  url: 'https://api.vidgrid.com/v2/captions',
  headers: { 
    Authorization: 'Basic {token}',
    'Content-Type': 'application/json' 
  },
  body: { 
    video_identifier: "...",
    type: "machine"
  },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

> Example create caption response. See [Caption Resource](#caption-resource) for more details.

```json
{
  "data": Caption Resource Object
}
```

`POST https://api.vidgrid.com/v2/captions`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **video_identifier** | string | The unique identifier of the video you are requesting a caption for. | *Required* |
| **type** | string | The type of caption you would like to request.<br>*Possible values: `machine`, `professional`* | *Required* |

## Retrieve Caption

This endpoint returns an array of [Caption Resources](#caption-resource).

### HTTP Request

> Example retrieve caption request.

```shell
curl -X GET \
  'https://api.vidgrid.com/v2/captions' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "identifiers": [
      "...",
      "..."
    ]
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/captions")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'
request.body = '{
  "identifiers": [
    "...",
    "..."
  ]
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/captions"

payload = '{
  "identifiers": [
    "...",
    "..."
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
  url: 'https://api.vidgrid.com/v2/captions',
  headers: { 
    Authorization: 'Basic {token}',
    'Content-Type': 'application/json' 
  },
  body: { 
    identifiers: [
      '...',
      '...'
    ]
  },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

> Example retrieve caption response. See [Caption Resource](#caption-resource) for more details.

```json
{
  "data": [
    Caption Resource Object,
    Caption Resource Object
  ]
}
```

`GET https://api.vidgrid.com/v2/captions`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **identifier** | string | The unique identifier of a caption.<br>*You may pass this in the body or on the URL: `/v2/captions/identifier`* | *Required unless <strong>identifiers</strong> is set* |
| **identifiers** | array | The unique identifiers of the desired captions. When set, this takes priority over **identifier**. | - |

## Delete Caption

This endpoint deletes a caption.

### HTTP Request

> Example delete caption request.

```shell
curl -X DELETE \
  'https://api.vidgrid.com/v2/captions/identifier' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/captions/identifier")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Delete.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/captions/identifier"

payload = ''
headers = {
  'Content-Type': "application/json",
  'Authorization': "Basic {token}",
}

response = requests.request("DELETE", url, data=payload, headers=headers)

print(response.text)
```

```javascript
// NodeJS

var request = require("request");

var options = {
  method: 'DELETE',
  url: 'https://api.vidgrid.com/v2/captions/identifier',
  headers: { 
    Authorization: 'Basic {token}',
    'Content-Type': 'application/json' 
  },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

> The delete caption endpoint returns a 204 No Content response when successful.

`DELETE https://api.vidgrid.com/v2/captions`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **identifier** | string | The unique identifier of a caption.<br>*You may pass this in the body or on the URL: `/v2/captions/identifier`* | *Required* |