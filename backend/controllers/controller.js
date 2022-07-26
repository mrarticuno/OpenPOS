"use strict";
const JWTService = require("../services/auth.service");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const path = "/v1";

module.exports = (app) => {
  const isValidRequest = (req) => {
    return !(!req.params.model || !req.params.model.length);
  };

  const getCompanyIdFromAutorizationHeader = async (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return null;
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return null;
    }
    return JWTService().verify(token, async (err, decodedToken) => {
      if (err) {
        return null;
      }
      return decodedToken.company_id;
    });
  };

  app.get(`${path}/:model`, async (req, res) => {
    if (!isValidRequest(req)) {
      res.status(400).json({ msg: "Model must be informed" });
      return;
    }

    const company_id = await getCompanyIdFromAutorizationHeader(req);

    const Model = require("../models/model")(req.params.model);

    try {
      const resultObjs = await Model.getAll(company_id);
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
