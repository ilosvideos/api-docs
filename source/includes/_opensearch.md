# OpenSearch

[OpenSearch](http://www.opensearch.org/Home) is a collection of technologies that allow publishing of search results in a format suitable for syndication and aggregation. It is a way for websites and search engines to publish search results in a standard and accessible format.

## Searching Videos

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
var settings = {
  "url": "https://api.vidgrid.com/opensearch/?q=testing&api_key={key}",
  "method": "GET"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

This endpoint returns a list of video items from VidGrid.

### HTTP Request

`GET https://api.vidgrid.com/opensearch`

### Parameters

          |             |
--------- | ----------- |
**q** string | Your search query.
**api_key** string | An [Organization](#api-key-types) API key from your VidGrid account.
**ptilos** optional boolean | Whether or not to prefix returned video titles with *VidGrid:*

Please visit the [OpenSearch Documentation](http://www.opensearch.org/Home) for more options and examples.

## Office365 SharePoint

Here is a short demo of how to use OpenSearch in Office365 SharePoint.

<iframe title="Sharepoint OpenSearch VidGrid" width="640" height="360" allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen style="background-color:transparent;" frameBorder="0" src="https://app.vidgrid.com/embed/kqxqAfbhDtlp"></iframe>
