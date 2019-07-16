# Errors

Our API returns standard HTTP success and error status codes. You can see the different HTTP status codes that we may return below.

### HTTP Status Codes

Code | Title | Description |
--------- | ----------- | ----------- |
**200** | OK | The request was successfull.
**204** | No Content | The server has successfully fulfilled the request and there is no additional content to send in the response.
**401** | Unauthorized | The request has not been applied because it lacks valid authentication credentials for the target resource.
**403** | Forbidden | The server understood the request but refuses to authorize it.
**404** | Not found	| The resource does not exist.
**422** | Validation error | A validation error occurred.
**50X** | Internal Server Error | An error occurred with our API.

### Error Responses

All of our error responses will also return a message describing what went wrong.

> Example error response

```json
// TODO
```