export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Pomodoro</title>
    <script src="/static/client.js" type="application/javascript"></script>
  </head>
  <body>
    <div id="root">${content}</div>
    <div id="popupRoot"></div>
    <div id="modalRoot"></div>
  </body>
</html>`;