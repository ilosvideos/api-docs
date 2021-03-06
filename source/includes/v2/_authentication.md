# Authentication

> Example request using HTTP basic auth.

```shell
# HTTP Basic Auth
curl 'https://api.vidgrid.com/v2/videos/identifier' \
  -H 'Content-Type: application/json' \
  -u {key}:{secret}

# Using a Basic token in an Authorization header
curl 'https://api.vidgrid.com/v2/videos/identifier' \
  -H 'Authorization: Basic {token}' \
  -H 'Content-Type: application/json'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/videos/identifier")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["Content-Type"] = 'application/json'
request["Authorization"] = 'Basic {token}'

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/videos/identifier"

headers = {
  'Content-Type': "application/json",
  'Authorization': "Basic {token}"
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
    Authorization: 'Basic {token}',
    'Content-Type': 'application/json'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

Authentication is done via <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">HTTP Basic Auth</a> using an [API key](#api-keys) and secret as a username and password.

To use <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">HTTP Basic Auth</a>, generate a token by **base64 encoding** `{key}:{secret}` and pass it in an `Authorization` header.

*<strong>Important:</strong> Your API key and secret give full permissions to manage content on your VidGrid account through the API. They should <strong>NEVER</strong> be exposed client side.*

### API Keys

All API requests are made using an API key on behalf of a user in your VidGrid account.

You can find your API keys under your VidGrid <a href="https://app.vidgrid.com/integrations" target="_blank">integration settings</a> and roll new ones if desired.