# Alpine JS Desktop Notifications Plugin

![](https://img.shields.io/bundlephobia/min/alpinejs-desktop-notify)
![](https://img.shields.io/npm/v/alpinejs-desktop-notify)
![](https://img.shields.io/npm/dt/alpinejs-desktop-notify)
![](https://img.shields.io/github/license/markmead/alpinejs-desktop-notifications)

This plugin extends Alpine JS to enable desktop notifications in your web
applications. With a simple API, you can create native browser notifications to
enhance user experience and engagement.

## Features

- Easy integration with Alpine JS
- Customizable notification content
- Permission handling
- Support for notification actions
- Responsive fallbacks when notifications are blocked

## Use Cases

- Alert users of important events even when they're in another tab
- Notify users when background tasks complete
- Create reminder systems for web applications
- Enhance chat applications with new message notifications

The plugin provides a straightforward way to leverage the Web Notifications API
within the Alpine JS framework, making it easy to implement desktop
notifications without complex JavaScript.

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-desktop-notify@latest/dist/notifications.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js"></script>
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
