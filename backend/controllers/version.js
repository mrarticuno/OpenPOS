"use strict";
module.exports = (app) => {
  app.get("/", (req, res) => {
    const infos = {
      version: process.env.VERSION,
      env: process.env.ENV,
    };

    res.status(200).send(infos);
  });
};
