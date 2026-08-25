"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractBodyContent(htmlString) {
    // TODO: Implement this function
    const firstIndx = htmlString.indexOf("<body>") + "<body>".length;
    const lastIndx = htmlString.indexOf("</body>");
    return htmlString.substring(firstIndx, lastIndx);
}
const testCase01 = extractBodyContent(`<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>`);
const testCase02 = extractBodyContent(`<!DOCTYPE html>
<html>
  <body>
    <p>Hello world!</p>
    <div>
      <span>Nested content.</span>
    </div>
  </body>
</html>`);
console.log(testCase01);
console.log(testCase02);
//# sourceMappingURL=extractBodyContent.js.map