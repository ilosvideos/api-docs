# Folder API

The Folder API allows you to interact with folders on your VidGrid account.

## Create Folder

TODO: create folders

## Get Folder

This endpoint returns an array of [Folder Resources](#folder-resource).

### HTTP Request

> Example get folder request.

```shell
curl -X GET \
  'https://api.vidgrid.com/v2/folders/identifier' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json'
  -d '{
    "include": [
        "playlist"
    ]
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/folders/identifier")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'
request.body = '{
  "include": [
    "playlist"
  ]
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/folders/identifier"

payload = '{
  "include": [
    "playlist"
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
      'playlist' 
    ]
  },  
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

`GET https://api.vidgrid.com/v2/folders`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **identifier** | string | The unique identifier of a folder.<br>*You may pass this in the body or on the URL: `/v2/folders/identifier`* | *Required unless <strong>identifiers</strong> is set* |
| **identifiers** | array | The unique identifiers of the desired folders. When set, this takes priority over **identifier**. | - |
| **include** | [Folder Params Array](#folder-params-array) | An array of properties to be included with the returned [Folder Resources](#folder-resource). | - |

### Folder Params Array

An array of properties to be included with a returned [Folder Resource](#folder-resource).

| Param | Description |
| ----- | ----------- |
| **playlist** | Request playlist data for the folder. |

## Update Folder

TODO: update folders

## Delete Folder

TODO: delete folders

## Folder Resource

> Example get folder response.

```json
{
  "data": [
    {
      "identifier": "...",
      "title": "Folder Title",
      "view_url": "https://app.vidgrid.com/content/identifier",
      "is_in_org_library": false,
      "playlist": {
        "enabled": true,
        "view_url": "https://app.vidgrid.com/playlist/identifier",
        "embed_url": "https://app.vidgrid.com/playlist/identifier?embedded=1"
      }
    }
  ]
}
```

The Folder Resource(s) returned in a successful response.

*Property types with a <strong>?</strong> are only returned if they are requested with a [Folder Params Array](#folder-params-array).*

| Prop | Type | Value |
| ---- | ---- | ----- |
| **identifier** | string | The unique identifier for the folder. |
| **title** | string | Title of the folder. |
| **view_url** | string | URL to view the folder. |
| **is_in_org_library** | bool | Whether or not this folder is in the Organization Library. |
| **playlist.enabled** | string<strong>?</strong> | Whether this folder can be used as a playlist. |
| **playlist.view_url** | string<strong>?</strong> | URL to view the playlist for this folder. |
| **playlist.embed_url** | string<strong>?</strong> | URL to embed the playlist for this folder. |