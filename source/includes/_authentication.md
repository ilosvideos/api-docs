# Authentication

> Authentication by passing `api_key` as a parameter. Be sure to replace `{key}` with your API key.

```shell
curl -X POST \
  'https://api.ilosvideos.com/v1/token/record' \
  -d 'api_key={key}'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.ilosvideos.com/v1/token/record")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request.body = "api_key={key}"

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.ilosvideos.com/v1/token/record"

payload = "api_key={key}"
headers = {}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```javascript
var settings = {
  "url": "https://api.ilosvideos.com/v1/token/record",
  "method": "POST",
  "data": {
    "api_key": "{key}"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

Authentication is done via an API key found in your ilos account's [integration settings](https://app.ilosvideos.com/integrations).

Under integration settings you can copy your [API keys](#api-key-types) or roll new ones if desired.

The API key should be passed as a parameter with all API requests to the server.

### API Key Types

|      |             |
|------|-------------|
| **User** | Use for the our [Recording API](#recording-api) and [Uploading API](#uploading-api). Videos uploaded with a User API key will be uploaded to that user's ilos account. |
| **Organization** | Use for the our [Recording API](#recording-api) and [Uploading API](#uploading-api). Videos uploaded with an Organization API key will be upload to the organization's ilos account. These videos will not have an owner by default. |
| **LTI** | Used for our LTI integrations. Check our help articles for more [information about LTI integrations](https://help.ilosvideos.com/?q=lti). |
| **Zoom** | Used for our Zoom integrations. Check our help articles for more [information about Zoom integrations](https://help.ilosvideos.com/?q=zoom).
