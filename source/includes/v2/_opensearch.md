# OpenSearch

[OpenSearch](http://www.opensearch.org/Home) is a collection of technologies that allow publishing of search results in a format suitable for syndication and aggregation. It is a way for websites and search engines to publish search results in a standard and accessible format.

**TODO: does this need to be udner v2? How will this work with the new api keys and no more organization keys?**

## Search Videos

> Example Request

```shell
curl -X GET \
  'https://api.vidgrid.com/opensearch/?q=testing&api_key={key}'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.vidgrid.com/opensearch/?q=testing&api_key={key}")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://api.vidgrid.com/opensearch/"

querystring = {"q":"example%20search","api_key":"{key}"}

headers = {}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
```

```javascript
// NodeJS

var request = require("request");

var options = { 
  method: 'GET',
  url: 'https://api.vidgrid.com/opensearch/',
  qs: { 
    q: 'testing', 
    api_key: '{key}' 
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

This endpoint returns a list of video items from VidGrid.

### HTTP Request

`GET https://api.vidgrid.com/opensearch`

### HTTP Parameters

| Param | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| **q** | string | Your search query. | *Required* |
| **api_key** | string | TODO: An [Organization](#api-key-types) API key from your VidGrid account. | *Required* |
| **ptilos** | boolean | Whether or not to prefix returned video titles with *VidGrid:* | TODO |

Please visit the [OpenSearch Documentation](http://www.opensearch.org/Home) for more options and examples.

## Office365 SharePoint

Here is a short demo of how to use OpenSearch in Office365 SharePoint.

<div class="video-frame-container">
  <div class="video-frame-content">
    <iframe title="Sharepoint OpenSearch VidGrid" allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen frameBorder="0" src="https://app.vidgrid.com/embed/kqxqAfbhDtlp"></iframe>
  </div>
</div>
