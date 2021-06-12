const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

//router.get('/say-something', controllers.saySomething);

/*var requireJWTAuthentication = jwt({
    secret: jwksCallback,
    // The same audience parameter needs to be used by the client to configure their Auth0 SDK
    audience: "TheSweetestAPI",
    // The Auth0 domain
    issuer: "https://klee-test.au.auth0.com/",
    // Has to be RS256 because that's what Auth0 uses to sign it's tokens
    algorithms: ["RS256"],
});*/


router.get('/get-users', controllers.getAllUsers);

module.exports = router;