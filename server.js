const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");

app.set("view engine", "ejs");

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("room");
// });

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
