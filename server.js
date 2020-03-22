const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var passport = require('passport');
app.use(passport.initialize());
var YoutubeV3Strategy = require('passport-youtube-v3').Strategy;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});




passport.use(new YoutubeV3Strategy({
    clientID: YOUR_CLIENT_ID,
    clientSecret: YOUR_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/redirect',
    scope: ['https://www.googleapis.com/auth/youtube']
},
function (accessToken, refreshToken, profile, cb) {
    var user = {
        accessToken: accessToken,
        refreshToken: refreshToken
    };
    return cb(null, user)
}
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.get('/authenticate', passport.authenticate('youtube'))
app.get('/redirect', passport.authenticate('youtube', { failureRedirect: '/login' }),
function(req, res) {
    res.redirect('http://localhost:3000' + '?access_token=' + req.user.accessToken)
})

app.listen(5000)