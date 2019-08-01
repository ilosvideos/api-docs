# Folder API

The Folder API allows you to interact with folders on your VidGrid account.

## Get Folder

This endpoint returns an array of [Folder Resources](#folder-resource).

### HTTP Request

> Example get folder request.

```shell
curl -X GET \
  'https://api.vidgrid.com/v2/folders/identifier' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/folders/identifier")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/folders/identifier"

payload = ""
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

## Folder Resource

> Example get folder response.

```json
{
  "data": [
    {
      "identifier": "...",
      "title": "Folder Title",
      "view_url": "https://app.vidgrid.com/content/identifier",
    }
  ]
}
```

The Folder Resource(s) returned in a successful response.

| Prop | Type | Value |
| ---- | ---- | ----- |
| **identifier** | string | The unique identifier for the folder. |
| **title** | string | Title of the folder. |
| **view_url** | string | URL to view the folder. |