# Folder API

The Folder API allows you to interact with folders on your VidGrid account.

## Create Folder

This endpoint creates a folder and then returns it as a [Folder Resource](#folder-resource).

### HTTP Request

> Example create folder request.

```shell
curl -X POST \
  'https://api.vidgrid.com/v2/folders' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "New Folder Title",
    "is_in_org_library": false
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/folders")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'
request.body = '{
  "title": "New Folder Title",
  "is_in_org_library": false
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/folders"

payload = '{
  "title": "New Folder Title",
  "is_in_org_library": false
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
  url: 'https://api.vidgrid.com/v2/folders',
  headers: { 
    Authorization: 'Basic {token}',
    'Content-Type': 'application/json' 
  },
  body: { 
    title: "New Folder Title",
    is_in_org_library: false
  },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

> Example create folder response. See [Folder Resource](#folder-resource) for more details.

```json
{
  "data": Folder Resource Object
}
```

`POST https://api.vidgrid.com/v2/folders`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **title** | string | Sets the folder title. | *Required* |
| **is_in_org_library** | bool | Whether or not to place this folder into the Organization Library. | false |

## Retrieve Folder

This endpoint returns an array of [Folder Resources](#folder-resource).

### HTTP Request

> Example retrieve folder request.

```shell
curl -X GET \
  'https://api.vidgrid.com/v2/folders' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json'
  -d '{
    "identifiers": [
      "...",
      "..."
    ],
    "include": [
        "playlist"
    ]
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/folders")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'
request.body = '{
  "identifiers": [
    "...",
    "..."
  ],
  "include": [
    "playlist"
  ]
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/folders"

payload = '{
  "identifiers": [
    "...",
    "..."
  ],
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
  url: 'https://api.vidgrid.com/v2/folders',
  headers: { 
    Authorization: 'Basic {token}',
    'Content-Type': 'application/json' 
  },
  body: { 
    identifiers: [
      '...',
      '...'
    ],
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

> Example retrieve folder response. See [Folder Resource](#folder-resource) for more details.

```json
{
  "data": [
    Folder Resource Object,
    Folder Resource Object
  ]
}
```

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

This endpoint updates a folder and then returns it as a [Folder Resource](#folder-resource).

### HTTP Request

> Example update folder request.

```shell
curl -X PATCH \
  'https://api.vidgrid.com/v2/folders/identifier' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "properties": [
        "title": "Updated Folder Title"
    ]
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/folders/identifier")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Patch.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'
request.body = '{
  "properties": [
      "title": "Updated Folder Title"
  ]
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/folders/identifier"

payload = '{
  "properties": [
      "title": "Updated Folder Title"
  ]
}'
headers = {
  'Content-Type': "application/json",
  'Authorization': "Basic {token}",
}

response = requests.request("PATCH", url, data=payload, headers=headers)

print(response.text)
```

```javascript
// NodeJS

var request = require("request");

var options = {
  method: 'PATCH',
  url: 'https://api.vidgrid.com/v2/folders/identifier',
  headers: { 
    Authorization: 'Basic {token}',
    'Content-Type': 'application/json' 
  },
  body: { 
    properties: [
      title: "Updated Folder Title"
    ]
  },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

> Example update folder response. See [Folder Resource](#folder-resource) for more details.

```json
{
  "data": Folder Resource Object
}
```

`PATCH https://api.vidgrid.com/v2/folders`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **identifier** | string | The unique identifier of a folder.<br>*You may pass this in the body or on the URL: `/v2/folders/identifier`* | *Required* |
| **properties** | [Update Folder Props Object](#update-folder-props-object) | An object used to update properties on a folder. | *Required* |

### Update Folder Props Object

An object used to update properties on a folder.

| Param | Type | Description |
| ----- | ---- | ----------- |
| **title** | string | Updates the folder title. |

## Delete Folder

This endpoint deletes a folder.

### HTTP Request

> Example delete folder request.

```shell
curl -X DELETE \
  'https://api.vidgrid.com/v2/folders/identifier' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/folders/identifier")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Delete.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/folders/identifier"

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
  url: 'https://api.vidgrid.com/v2/folders/identifier',
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

> The delete folder endpoint returns a 204 No Content response when successful.

`DELETE https://api.vidgrid.com/v2/folders`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **identifier** | string | The unique identifier of a folder.<br>*You may pass this in the body or on the URL: `/v2/folders/identifier`* | *Required* |

## Folder Resource

The Folder Resource(s) returned in a successful response.

*Property types with a <strong>?</strong> are only returned if they are requested with a [Folder Params Array](#folder-params-array).*

> Example Folder Resource Object.

```json
{
  "identifier": "...",
  "title": "Folder Title",
  "is_in_org_library": false,
  "view_url": "https://app.vidgrid.com/content/identifier",
  "playlist": {
    "enabled": false,
    "view_url": "https://app.vidgrid.com/playlist/identifier",
    "embed_url": "https://app.vidgrid.com/playlist/identifier?embedded=1"
  }
}
```

| Prop | Type | Value |
| ---- | ---- | ----- |
| **identifier** | string | The unique identifier for the folder. |
| **title** | string | Title of the folder. |
| **view_url** | string | URL to view the folder. |
| **is_in_org_library** | bool | Whether or not this folder is in the Organization Library. |
| **playlist.enabled** | **?**string | Whether this folder can be used as a playlist. |
| **playlist.view_url** | **?**string | URL to view the playlist for this folder. |
| **playlist.embed_url** | **?**string | URL to embed the playlist for this folder. |