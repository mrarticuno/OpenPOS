const jwt = require("jsonwebtoken");

const secret = process.env.SECRET || "secret";

const authService = () => {
  const issue = (payload) => jwt.sign(payload, secret, { expiresIn: "7d" });
  const verify = (token, cb) => jwt.verify(token, secret, {}, cb);

  return {
    issue,
    verify,
  };
};

module.exports = authService;
