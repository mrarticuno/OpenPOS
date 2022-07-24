"use strict";
module.exports = (app) => {
  app.get("/version", (req, res) => {
    const infos = {
      version: env("VERSION"),
      env: env("ENV"),
    };

    res.status(200).send(infos);
  });
};
