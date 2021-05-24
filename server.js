require('dotenv').config();
// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const cors = require("cors");
const path = require("path");
const url = require('url'); // to parse url
const https = require('https');// to send https requests 
const utils = require('./utils');
const { Client } = require('pg');


// Create a new express application named "app"
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure the CORs middleware
app.use(cors());

// Require Route
const api = require("./src/routes/routes");
// Configure app to use route
app.use("/api/v1/", api);

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
};

// Catch any bad requests
app.get("*", (req, res) => {
    res.status(200).json({
        msg: "Catch All"
    });
});



/*
// validate the user credentials
app.post('/users/signin', function (req, res) {
    
    const user = req.body.username;
    const pwd = req.body.password;
   
    // return 400 status if username/password is not exist
    if (!user || !pwd) {
      return res.status(400).json({
        error: true,
        message: "Username or Password is required."
      });
    }

    const client = new Client({
        connectionString: process.env.DATABASE_URL,// || 'postgresql://postgres:Superoverworked1!@localhost:5432/postgres',
        ssl: false /*{
            rejectUnauthorized: false
        }
    });
    client.connect();
    client.query(`SELECT * FROM public."Users" WHERE user_email = '${user}' AND user_password = '${pwd}'`, (err, result) => {
        try {
            // generate token
            const token = utils.generateToken(result.rows[0]);
            // get basic user details
            const userObj = utils.getCleanUser(result.rows[0]);
            // return the token along with user details
            console.log(JSON.stringify(userObj));
            client.end();
            return res.json({ user: userObj, token });
        } catch (err) {
            return res.status(401).json({
                error: true,
                message: "Username or Password is wrong."
            });
        }
        
    });

    // return 401 status if the credential is not match.
    /*if (user !== userData.user_email || pwd !== userData.user_password) {
      return res.status(401).json({
        error: true,
        message: "Username or Password is wrong."
      });
    }*/
   
    /*
  });



  // verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
    // check header or url parameters or post parameters for token
    var token = req.query.token;
    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Token is required."
      });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) return res.status(401).json({
        error: true,
        message: "Invalid token."
      });
   
      // return 401 status if the userId does not match.
      if (user.userId !== userData.userId) {
        return res.status(401).json({
          error: true,
          message: "Invalid user."
        });
      }
      // get basic user details
      var userObj = utils.getCleanUser(userData);
      return res.json({ user: userObj, token });
    });
  });


  //middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];
    if (!token) return next(); //if no token, continue
   
    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) {
        return res.status(401).json({
          error: true,
          message: "Invalid user."
        });
      } else {
        req.user = user; //set the user to req so other routes can use it
        next();
      }
    });
  });
   
  // request handlers
  app.get('/', (req, res) => {
    if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
    res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
  });*/



  // Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));