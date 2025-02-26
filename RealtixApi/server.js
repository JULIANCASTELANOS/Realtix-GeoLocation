const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced dbPediatria Sucess.");
  })
  .catch((err) => {
    console.log("Failed to sync dbPediatria: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to realtixapi application." });
});

require("./app/routes/crooms.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
