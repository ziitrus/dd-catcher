const express = require("express");
const bodyParser = require("body-parser");
const discordSdk = require("./modules/discord");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).end(); // Responding is important
});

app.post("/hook/:id/:token", (req, res) => {
  discordSdk.send_message(req.params.id, req.params.token, req.body);
  res.status(200).end(); // Responding is important
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server is running on ${PORT}`)
);
