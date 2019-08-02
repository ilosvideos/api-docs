# Tracking Viewers

There may be times when you know who is viewing a VidGrid video, but that user may not have (or is not logged into) a VidGrid account. 

If this is the case, you have the option to pass certain tracking data on a video view or embed URL in order to track who is watching a video through <a href="https://help.vidgrid.com/en/articles/2583718-viewing-video-analytics" target="_blank">VidGrid video analytics</a>.

> Example of tracking name and email of a user through a view URL.

```html
https://app.vidgrid.com/view/identifier?vgname={name}&vgemail={email}
```

### Query Parameters

| Param | Type | Description |
| ----- | ---- | ----------- |
| **vgname** | string | The name of a user. |
| **vgemail** | string | The email of a user. |