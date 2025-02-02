function updateTime() {
  const timestamp = Date.now();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }
  const currentTime = new Date(timestamp).toLocaleTimeString('en-US', options);
  document.getElementById('utc-time').innerText = currentTime
}
updateTime();
setInterval(updateTime, 1000);