// generate token using secret from process.env.JWT_SECRET
var jwt = require('jsonwebtoken');
 
// generate token and return it
function generateToken(user) {
  //1. Don't use password and other sensitive fields
  //2. Use the information that are useful in other parts
  if (!user) return null;
 
  var u = {
    userId: user.user_uuid,
    first_name: user.user_firstname,
    last_name: user.user_lastname,
    username: user.email,
    status: user.user_status,
    isMaster: user.user_master
  };
 
  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}
 
// return basic user details
function getCleanUser(user) {
  if (!user) return null;
 console.log(user.user_email);
  return {
    userId: user.user_uuid,
    first_name: user.user_firstname,
    last_name: user.user_lastname,
    username: user.email,
    status: user.user_status,
    isMaster: user.user_master
  };
}
 
module.exports = {
  generateToken,
  getCleanUser
}