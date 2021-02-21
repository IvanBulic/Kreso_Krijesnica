const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const axios = require("axios");
require("./models/Location");
require("./models/User");
const dev = require("./config/dev");
const { request, response } = require("express");
const Admininfo = mongoose.model("user");
const Location = mongoose.model("location");

mongoose.connect(dev.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [dev.cookieKey],
  })
);
app.get("/loadpopis", function (req, res) {
  var locations = {};

  Location.find({}, function (err, location) {
    console.log(location);
  res.send(location);
  });
});
app.get("/loadmarkers", function (req, res) {
  var locations = {};

  Location.find({}, function (err, location) {
    console.log(location);
  res.send(location);
  });
});
app.post("/delete_entry",(request,response)=>{
console.log(request.body);
Location.remove({ _id: request.body.id }, function(err) {
  if (!err) {
          
  }
  else {
          sendStatus(200);
  }
});
});
app.post("/dodajlokaciju/process", (request, response) => {
  const Locationinfo = new Location({
    lng: request.body.locationinfo.lng,
    lat: request.body.locationinfo.lat,
    desc: request.body.locationinfo.opis,
    date: request.body.locationinfo.date,
  });
  Locationinfo.save();
  response.sendStatus(200);
});

app.post("/login/process", (request, response) => {
  Admininfo.findOne({ email: request.body.logindata.email }, function (
    err,
    user
  ) {
    if (user != null) {
      if (user.password == request.body.logindata.password) {
        response.sendStatus(200);
      } else console.log("netocna lozinka");
    } else {
      console.log("netocan mail");
    }
  });
});
app.listen(PORT);
