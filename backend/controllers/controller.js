"use strict";

const path = "/v1";

module.exports = (app) => {
  const isValidRequest = (req) => {
    return !(!req.params.model || !req.params.model.length);
  };

  app.get(`${path}/:model`, async (req, res) => {
    if (!isValidRequest(req)) {
      res.status(400).json({ msg: "Model must be informed" });
      return;
    }

    const Model = require("../models/model")(req.params.model);

    try {
      const resultObjs = await Model.getAll();
      res.status(200).json(resultObjs);
    } catch (error) {
      res.status(500).json({
        msg: "Unespected error",
        stack: error.stack,
        msgError: error.message,
      });
    }
  });

  app.get(`${path}/:model/:id`, async (req, res) => {
    if (!isValidRequest(req)) {
      res.status(400).json({ msg: "Model must be informed" });
      return;
    }

    const Model = require("../models/model")(req.params.model);

    try {
      const obj = await Model.getById(req.params.id);
      if (!obj) {
        res.status(404).json({ msg: `${req.params.model} not found` });
      } else {
        res.status(200).json(obj);
      }
    } catch (error) {
      res.status(500).json({
        msg: "Unespected error",
        stack: error.stack,
        msgError: error.message,
      });
    }
  });

  app.post(`${path}/:model`, async (req, res) => {
    if (!isValidRequest(req)) {
      res.status(400).json({ msg: "Model must be informed" });
      return;
    }

    const Model = require("../models/model")(req.params.model);

    try {
      const obj = await Model.create(req.body);
      res.status(201).json(obj);
    } catch (error) {
      res.status(500).json({
        msg: "Unespected error",
        stack: error.stack,
        msgError: error.message,
      });
    }
  });

  app.put(`${path}/:model/:id`, async (req, res) => {
    if (!isValidRequest(req)) {
      res.status(400).json({ msg: "Model must be informed" });
      return;
    }

    const Model = require("../models/model")(req.params.model);

    try {
      const obj = await Model.update(req.params.id, req.body);
      res.status(200).json(obj);
    } catch (error) {
      res.status(500).json({
        msg: "Unespected error",
        stack: error.stack,
        msgError: error.message,
      });
    }
  });

  app.patch(`${path}/:model/:id`, async (req, res) => {
    if (!isValidRequest(req)) {
      res.status(400).json({ msg: "Model must be informed" });
      return;
    }

    const Model = require("../models/model")(req.params.model);

    try {
      const dbData = await Model.getById(req.params.id);
      if (!dbData) {
        res.status(404).json({ msg: `${req.params.model} not found` });
        return;
      }
      const obj = await Model.update(
        req.params.id,
        Object.assign(dbData, req.body)
      );
      res.status(200).json(obj);
    } catch (error) {
      res.status(500).json({
        msg: "Unespected error",
        stack: error.stack,
        msgError: error.message,
      });
    }
  });

  app.delete(`${path}/:model/:id`, async (req, res) => {
    if (!isValidRequest(req)) {
      res.status(400).json({ msg: "Model must be informed" });
      return;
    }

    const Model = require("../models/model")(req.params.model);

    try {
      const obj = await Model.delete(req.params.id);
      res.status(200).json(obj);
    } catch (error) {
      res.status(500).json({
        msg: "Unespected error",
        stack: error.stack,
        msgError: error.message,
      });
    }
  });
};
