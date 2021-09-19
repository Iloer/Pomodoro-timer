export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Reddit</title>
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
      window.__token__ = '${token}'
    </script>
  </head>
  <body>
    <div id="root">${content}</div>
    <div id="popupRoot"></div>
    <div id="modalRoot"></div>
  </body>
</html>`;