const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
    console.log(req.body.token,req.query.token,req.headers["x-access-token"]);
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
   

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, "ambuj123");
    console.log(decoded)
    req.user = decoded;
    console.log(decoded)
    console.log(req.user)
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;