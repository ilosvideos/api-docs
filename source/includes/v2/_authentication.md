# Authentication

> Authentication using HTTP basic auth.

```shell
curl 'https://api.vidgrid.com/v2/token/record' \
  -u {key}:
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/v2/token/record")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request.body = "api_key={key}"

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/v2/token/record"

payload = "api_key={key}"
headers = {}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```javascript
var settings = {
  "url": "https://api.vidgrid.com/v2/token/record",
  "method": "POST",
  "data": {
    "api_key": "{key}"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

Authentication is done via [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication) using an API key.

A base64 encoded API key should be provided as the username and no password is required. Alternatively, you can pass your API key as a bearer token in an `Authorization` header.

You can find your [API keys](#api-key-types) under [integration settings](https://app.vidgrid.com/integrations) and roll new ones if desired.

### API Key Types TODO

|      |             |
|------|-------------|
| **User** | Use for the our [Recording API](#recording-api) and [Uploading API](#uploading-api). Videos uploaded with a User API key will be uploaded to that user's VidGrid account. |
| **Organization** | Use for the our [Recording API](#recording-api) and [Uploading API](#uploading-api). Videos uploaded with an Organization API key will be upload to the organization's VidGrid account. These videos will not have an owner by default. |
| **LTI** | Used for our LTI integrations. Check our help articles for more [information about LTI integrations](https://help.vidgrid.com/?q=lti). |
| **Zoom** | Used for our Zoom integrations. Check our help articles for more [information about Zoom integrations](https://help.vidgrid.com/?q=zoom).
