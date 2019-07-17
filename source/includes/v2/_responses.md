# Responses

Our API returns JSON responses with standard HTTP status codes. 

You can see examples of successful and failed responses as well as different HTTP status codes we may return below.

## Success Responses

> Example of a success response with a data object.

```json
{
  "data": {
    ...
  }
}
```

> Example of a success response with a data array.

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
| --------- | ----------- | ----------- |
| **200** | OK | The request was successfull. |
| **204** | No Content | The server has successfully fulfilled the request and there is no additional content to send in the response. |

## Error Responses

> Example of an error response.

```json
{
  "message": "A message explaining what went wrong."
}
```

All of our error responses will return a message describing what went wrong.

### HTTP Status Codes

| Code | Title | Description |
| --------- | ----------- | ----------- |
| **401** | Unauthorized | The request has not been applied because it lacks valid authentication credentials for the target resource. |
| **403** | Forbidden | The server understood the request but refuses to authorize it. |
| **404** | Not found	| The resource does not exist. |
| **422** | Validation error | A validation error occurred. |
| **50X** | Internal Server Error | An error occurred with our API. |