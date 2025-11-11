# Blog

## About

Jekyll clone with json instead of markdown

### Site config

```json
{
  "title": "blog",
  "icon": "icon.svg",
  "description": "Jekyll clone",
  "links": [
    {
      "email": true,
      "href": "example@mail.com"
    },
    {
      "link": true,
      "href": "https://github.com/jjdavenport",
      "value": "jjdavenport",
      "alt": "github logo",
      "src": "github-icon.svg"
    }
  ]
}
```

### Post

```json
{
  "id": "1",
  "title": "Example post",
  "month": "October",
  "date": 6,
  "year": 2025,
  "content": [
    [
      { "type": "text", "value": "text" },
      { "type": "link", "value": "link", "href": "http://google.com" },
      { "type": "text", "value": "text" }
    ],
    {
      "type": "div"
    },
    {
      "type": "image",
      "src": "pexels-canvastudio-3194523.jpg",
      "alt": "man typing on a laptop"
    },
    {
      "type": "text",
      "value": "text"
    },
    {
      "type": "link",
      "href": "https://google.com",
      "value": "link"
    }
  ]
}
```
