import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const PORT = 3001;
const app = express();

async function fetchAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
}

function getHTML(data) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="icon" href="/favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><link rel="apple-touch-icon" href="/logo192.png"/><link rel="manifest" href="/manifest.json"/><title>React App</title><script defer="defer" src="/static/js/main.c2886abc.js"></script><link href="/static/css/main.e6c13ad2.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body>
<script>
    window.__initialTask__ = ${data}
</script>
</html>`;
}

app.get("/", async (request, response) => {
  const data = await fetchAllTodos();
  const appContent = ReactDOMServer.renderToString(<App initialTask={data} />);
  const indexHTMLFile = path.resolve("./build/index.html");
  fs.readFile(indexHTMLFile, "utf-8", (error, data) => {
    if (error) {
      console.log("Something Went Wrong", error);
      return response.status(500).send("Something Went Wrong");
    }

    return response.send(
      data.replace(
        `<div id="root"> </div>`,
        `<div id="root">${appContent}</div>`
      )
    );
  });
  // const htmlToSend = getHTML(JSON.stringify(data));
  // return response.send(htmlToSend.replace(`<div id="root"></div>`, `<div id="root">${appContent}</div>`))
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server run on this PORT ${PORT}`);
});
