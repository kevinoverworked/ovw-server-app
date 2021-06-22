require('dotenv').config();
// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const jwt = require("express-jwt");
const jwksRsa =  require("jwks-rsa");
const jwtAuthz = require('express-jwt-authz');
const path = require("path");
const { startDatabase } = require("./src/connections/connections");
//const { getUser } = require("./src/api/users");
const db = require("./src/controllers/controllers");


// Create a new express application named "app"
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;


// enabling CORS for all requests
app.use(cors());

// adding Helmet to enhance your API's security
app.use(helmet());



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




/*startDatabase().then(async () => {
  await getUser();
});*/





var jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

//app.use(jwtCheck);

app.get("/users", db.getAllUsers);
app.get("/users/:id", db.getUserById);
app.get("/users/:id", db.getUserById);
app.put("/users/:id", db.updateUser);
/*app.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

app.get('/api/private', jwtCheck, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});*/

/*app.get('/api/v1/', function (req, res) {
  res.send('Secured Resource');
});*/
// Catch any bad requests
app.get("*", (req, res) => {
  res.status(200).json({
      msg: "Catch All"
  });
});
// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));


//var request = require("request");

/*var options = { method: 'POST',
  url: 'https://dev-za07lx1j.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"oWOtbJDHSb85WMEPANiKGpNrGzL4JVXk","client_secret":"xWKkjGzR0XQJXZsxzVzRv_CpuI60uhVsUp3vSMJ1sYjLBYPoJj3h8WzabTsUdupM","audience":"ovw-api","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});*/