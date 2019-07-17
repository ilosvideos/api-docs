# Authentication

> Authentication using HTTP basic auth.

```shell
curl 'https://api.vidgrid.com/v2/videos/identifier' \
  -u {key}:
```

```ruby
# TODO
```

```python
# TODO
```

```javascript
// NodeJS

// TODO
```

> Authentication using a Bearer token in an Authorization header.

```shell
curl 'https://api.vidgrid.com/v2/videos/identifier' \
  -H 'Authorization: Basic {encoded_key}'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/videos/identifier")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer {encoded_key}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/videos/identifier"

headers = {
  'Authorization': "Bearer {encoded_key}",
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
// NodeJS

var request = require("request");

var options = {
  method: 'GET',
  url: 'https://api.vidgrid.com/v2/videos/identifier',
  headers: {
    Authorization: 'Bearer {encoded_key}'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

Authentication is done via [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication) using an API key. Each request requires an API key as the username and no password is required.

Alternatively, you can pass your **base64 encoded** API key as a bearer token in an `Authorization` header.

You can find your API keys under [integration settings](https://app.vidgrid.com/integrations) and roll new ones if desired.

### API Key Types

| Type | Description |
|------|-------------|
| **User** | Used to make general API requests on behalf of a user in your VidGrid account. |
| **LTI** | Used for our LTI integrations. Check our help articles for more [information about LTI integrations](https://help.vidgrid.com/?q=lti). |
| **Zoom** | Used for our Zoom integrations. Check our help articles for more [information about Zoom integrations](https://help.vidgrid.com/?q=zoom). |