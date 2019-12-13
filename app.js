const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const config = require('./config');
const bcrypt = require("bcrypt");
const port = process.env.PORT || 5000;
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
require("./passport-config")(passport);
const methodOverride = require("method-override");
const mysql = require('mysql')
const app = express();

// Express configuration.
app.disable('etag');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('trust proxy', true);

//Connect to DB
var dbconfig = {
    user: 'root',
    database: 'PetScheduler',
    password: 'cloudfinal',
    //host : '127.0.0.1'
    socketPath: 'cloudcomputingfinal-261901:us-central1:cloudcomputingfinal'
}
var con = mysql.createConnection({dbconfig});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})


//Initialize Middleware
//Allows us to access form variables inside post methods
app.use(express.urlencoded({ extended: false }));
app.use( express.static( "public" ) );

app.use(flash());
app.use(
  session({
    secret: "secret", 
    //do not want to resave session variables if nothing has changed
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Using delete is safer than using POST
app.use(methodOverride("_method"));


// Index route.
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get("/login",(req, res) => {
    res.render("login.ejs");
  });


  app.get("/test",(req, res) => {
    res.render("login.ejs");
  });


// Start the server.
const server = app.listen(port, () => {
    const port = server.address().port;
    console.log(`App listening on ${port}`);
});

module.exports = app;