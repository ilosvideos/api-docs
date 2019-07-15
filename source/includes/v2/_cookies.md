# Cookies

With certain VidGrid integrations (such as LTI integrations using SSO) you may run into a problem with saving cookies in Safari & iOS.

The problem occurs when a user has "Prevent cross-site tracking" selected under Privacy in Safari (the default option) and is loading content within an iframe. Safari will prevent cookies saved from the host within the iframe unless the user has previously visited that host as the root document and had a cookie saved at that point.

For instance, **foo.com** has an iframe which contains **bar.com**. If the user has not visited **bar.com** outside of an iframe, the **bar.com** iframe will not be able to save a cookie.

## Solution 1 (Dialog)

```shell
# See JavaScript tab as this is a client-side solution only.
```

```ruby
# See JavaScript tab as this is a client-side solution only.
```

```python
# See JavaScript tab as this is a client-side solution only.
```

```javascript
function openDialog() {
  window.open('https://app.vidgrid.com/cookie/dialog', 'Cookie dialog', 'height=200,width=150');
}

var trigger = document.querySelector(".open-dialog");

trigger.addEventListener("click", openDialog);
```

This will open a dialog window to app.vidgrid.com, save a cookie, and immediately close the dialog. The user MUST initiate this action (ie. through a button click) so the popup does not get blocked by the browser.

In most cases **we have already implemented this solution** inside of our iframes as a fallback. However, you may still wish to use it and/or [Solution 2](#solution-2-redirect) for a different workflow.

### Client-Side HTTP Request

`GET https://app.vidgrid.com/cookie/dialog`

*Note that we are using `app.vidgrid.com` as opposed to `api.vidgrid.com`*

## Solution 2 (Redirect)

```shell
# See JavaScript tab as this is a client-side solution only.
```

```ruby
# See JavaScript tab as this is a client-side solution only.
```

```python
# See JavaScript tab as this is a client-side solution only.
```

```javascript
window.location = "https://app.vidgrid.com/cookie/redirect?url=https%3A%2F%2Fwww.foo.com";
```

This will visit app.vidgrid.com, save a cookie, and immediately redirect to the desired url.

### Client-Side HTTP Request

`GET https://app.vidgrid.com/cookie/redirect`

*Note that we are using `app.vidgrid.com` as opposed to `api.vidgrid.com`*

### Parameters

          |             |
--------- | ----------- |
**url** string | Url for VidGrid to redirect to after saving the cookie. This should be url encoded.