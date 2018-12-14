import express from "express";

var app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

// Handle POST requests that come in formatted as JSON
app.use(express.json());

// A default hello word route
app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

// start our server on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log(
    "A new server has born on port " + (process.env.PORT || 3000) + "... Hello to server!"
  );
});
