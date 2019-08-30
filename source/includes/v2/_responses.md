# Responses

Our API returns JSON responses with standard HTTP status codes. 

You can see examples of successful and failed responses as well as different HTTP status codes we may return below.

## Success Responses

> Example success response with a data object.

```json
{
  "data": {
    ...
  }
}
```

> Example success response with a data array.

```json
{
  "data": [{
    ...
  }, {
    ...
  }]
}
```

All successful `GET` responses will return a data **array** while all other success responses will return a data **object**.

### HTTP Status Codes

| Code | Title | Description |
| ---- | ----- | ----------- |
| **200** | OK | The request was successfull. |
| **204** | No Content | The server has successfully fulfilled the request and there is no additional content to send in the response. |

## Error Responses

> Example error response.

```json
{
  "message": "A message explaining what went wrong."
}
```

All of our error responses will return a message describing what went wrong.

### HTTP Status Codes

| Code | Title | Description |
| ---- | ----- | ----------- |
| **401** | Unauthorized | The request lacks valid authentication credentials. |
| **403** | Forbidden | The user is not authorized to interact with the resource in this way. |
| **404** | Not found	| The resource does not exist. |
| **422** | Validation error | A validation error occurred. |
| **50X** | Internal Server Error | An error occurred with our API. |

## Throttling

We implement rate-limiting so as to not overwhelm our API. By default this is set to 60 request per minute.

You can see your current limit and remaining requests by reading the `X-RateLimit-Limit` and `X-RateLimit-Remaining` headers returned in every response.

To request a higher limit, please <a href="mailto:webmaster@vidgrid.com?subject=Change Rate Limit Request" target="_blank">contact us</a>.