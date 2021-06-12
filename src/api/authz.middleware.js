import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import * as dotenv from "dotenv";

dotenv.config();



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
  
  app.use(jwtCheck);
  
  app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
  });
  
  // Configure our server to listen on the port defiend by our port variable
  app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));