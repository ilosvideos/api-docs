# User API

The User API allows you to interact with users on your VidGrid account.

## User Resource

The User Resource(s) returned in a successful response.

> Example User Resource Object.

```json
{
  "identifier": "...",
  "email": "john.smith@example.com",
  "name": "John Smith"
}
```

| Prop | Type | Value |
| ---- | ---- | ----- |
| **identifier** | string | The unique identifier for the user. |
| **email** | string | The user's email. |
| **name** | string | The user's name. |

## Retrieve User

This endpoint returns an array of [User Resources](#user-resource).

### HTTP Request

> Example retrieve user request.

```shell
curl -X GET \
  'https://api.vidgrid.com/v2/users' \
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

url = URI("https://api.vidgrid.com/v2/users")

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

url = "https://api.vidgrid.com/v2/users"

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
  url: 'https://api.vidgrid.com/v2/users',
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

> Example retrieve user response. See [User Resource](#user-resource) for more details.

```json
{
  "data": [
    User Resource Object,
    User Resource Object
  ]
}
```

`GET https://api.vidgrid.com/v2/users`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **identifier** | string | The unique identifier of a user or `all` if you wish to retrieve all users in the organization.<br>*You may pass this in the body or on the URL: `/v2/users/identifier`*<br>*Possible values: `{user_identifier}`,`all`* | *Required unless <strong>identifiers</strong> is set* |
| **identifiers** | array | The unique identifiers of the desired users. When set, this takes priority over **identifier**. | - |

## Delete User

This endpoint deletes a user.

### HTTP Request

> Example delete user request.

```shell
curl -X DELETE \
  'https://api.vidgrid.com/v2/users/identifier' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "transfer_videos_to": "...",
    "transfer_shared_folders_to": "..."
  }'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/users/identifier")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Delete.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'
request.body = '{
  "transfer_videos_to": "...",
  "transfer_shared_folders_to": "..."
}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/users/identifier"

payload = '{
  "transfer_videos_to": "...",
  "transfer_shared_folders_to": "..."
}'
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
  url: 'https://api.vidgrid.com/v2/users/identifier',
  headers: { 
    Authorization: 'Basic {token}',
    'Content-Type': 'application/json' 
  },
  body: { 
    "transfer_videos_to": "...",
    "transfer_shared_folders_to": "..."
  },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

> The delete user endpoint returns a 204 No Content response when successful.

`DELETE https://api.vidgrid.com/v2/users`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **identifier** | string | The unique identifier of a user.<br>*You may pass this in the body or on the URL: `/v2/users/identifier`* | *Required* |
| **transfer_videos_to** | string | Specifies whether to transfer this user's videos to another user, the organization's guest user, or to delete them permanently.<br>*Possible values: `{user_identifier}`,`ORGANIZATION`,`DELETE`* | *Required* |
| **transfer_shared_folders_to** | string | Specifies whether to transfer this user's shared folders to another user or to delete them permanently.<br>*Possible values: `{user_identifier}`,`DELETE`* | *Required* |