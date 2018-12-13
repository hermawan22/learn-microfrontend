const express = require("express");
const server = express();
const request = require("request");

server.set("view engine", "ejs");

server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) =>
  Promise.all([
    getContents("http://localhost:8081/"),
    getContents("http://localhost:8082/"),
    getContents("http://localhost:8083/")
  ])
    .then(responses => {
      res.render("index", {
        header: responses[0],
        menu: responses[1],
        content: responses[2]
      });
    })
    .catch(error => res.send(error.message))
);

const getContents = url =>
  new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) return resolve("Error loading " + url + ": " + error.message);

      return resolve(body);
    });
  });

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
