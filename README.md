# Alpine JS Desktop Notifications

Create desktop notifications with Alpine JS 📣

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-desktop-notify@latest/dist/notifications.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-desktop-notify

npm install -D alpinejs-desktop-notify
```

```js
import Alpine from 'alpinejs'
import notifications from 'alpinejs-desktop-notify'

Alpine.plugin(notifications)

Alpine.start()
```

## Example

### Static Notification

```html
<button
  x-data
  @click="$notify({ title: 'New message', body: 'Can you get me a mayo chicken?' })"
>
  Notify
</button>
```

### Dynamic Notification

```html
<div x-data="{ title: '', body: '' }">
  <input type="text" x-model="title" />

  <textarea x-model="body"></textarea>

  <button @click="$notify({ title, body })"> Notify </button>
</div>
```

_You can also pass `icon` in the object._

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-desktop-notify)
![](https://img.shields.io/npm/v/alpinejs-desktop-notify)
![](https://img.shields.io/npm/dt/alpinejs-desktop-notify)
![](https://img.shields.io/github/license/markmead/alpinejs-desktop-notifications)
