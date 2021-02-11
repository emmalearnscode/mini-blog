# mini-blog


## Vue Project setup
```
npm install
```

## Setup and start API

```
cd backend

npm install

node app.js
```

### Compiles and hot-reloads for development

In a new terminal
```
npm run serve
```

## API

### HTTP Interface


| Method | Endpoint | Response | Request Body |
|-----:|------|-----|-----|
| GET | /api/posts  | Returns an array of post objects | Empty |
| GET | /api/posts/:id  | Returns a post object with corresponding ID, or 404 if the post does not exist | Empty |
| POST | /api/posts | 204| ```{"title": "your title", "content": "your content"} ``` |
| PATCH | /api/posts/:id | Updates the post with corresponding ID, or 404 if the post does not exist | ```{"title": "your title", "content": "your content"} ``` |
| DELETE | /api/posts/:id | Deletes the post with corresponding ID, or 404 if the post does not exist | Empty |


### Using fetch

POST /api/posts
```js
const payload = {title: "foo", content: "bar"}

fetch('http://localhost:5000/api/posts', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(payload)
})
```


PATCH /api/posts/idofthepost
```js
const payload = {title: "new foo", content: "new bar"}

fetch('http://localhost:5000/api/posts/idofthepost', {
  method: 'PATCH',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(payload)
})
```
See [Configuration Reference](https://cli.vuejs.org/config/).
