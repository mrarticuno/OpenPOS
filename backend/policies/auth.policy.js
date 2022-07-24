const JWTService = require("../services/auth.service");
const User = require("../models/model")("user");

module.exports = (req, res, next) => {
  let tokenToVerify;

  if (req.header("Authorization")) {
    const parts = req.header("Authorization").split(" ");

    if (parts.length === 2) {
      const scheme = parts[0];
      const credentials = parts[1];

      if (/^Bearer$/.test(scheme)) {
        tokenToVerify = credentials;
      } else {
        return res
          .status(401)
          .json({ msg: "Format for Authorization: Bearer [token]" });
      }
    } else {
      return res
        .status(401)
        .json({ msg: "Format for Authorization: Bearer [token]" });
    }
  } else if (req.body && req.body.token) {
    tokenToVerify = req.body.token;
    delete req.query.token;
  } else {
    return res.status(401).json({ msg: "No Authorization was found" });
  }

  return JWTService().verify(tokenToVerify, async (err, thisToken) => {
    if (err || !thisToken) return res.status(401).json({ err });
    const id = thisToken.id || thisToken.user.id;
    const userTokenData = thisToken.user || thisToken;
    const user = await User.getById(id);
    if (
      user &&
      user.validation === userTokenData.validation &&
      user.active &&
      !user.blocked
    ) {
      return next();
    } else {
      return res.status(401).json({ msg: "Token invalid" });
    }
  });
};
