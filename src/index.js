export default function (Alpine) {
  Alpine.magic('notify', () => (notifyData = {}) => {
    const hasSupport = 'Notification' in window
    const hasData = Object.keys(notifyData).length

    if (!hasSupport || !hasData) {
      return
    }

    if (Notification.permission === 'granted') {
      showNotification(notifyData)
    } else {
      Notification.requestPermission().then((notificationPermission) => {
        if (notificationPermission === 'granted') {
          showNotification(notifyData)
        }
      })
    }

    function showNotification({ title, body, icon }) {
      new Notification(title, {
        body,
        icon,
      })
    }
  })
}
