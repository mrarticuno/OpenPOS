"use strict";

const path = "/user";

const _ = require("lodash");
const bcrypt = require("../services/bcrypt.service");
const authService = require("../services/auth.service");

const User = require("../models/model")("user");

module.exports = (app) => {
  app.post(`${path}/login`, async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await User.find({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res.status(401).json({ msg: "User not found" });
      }
      if (!bcrypt().comparePassword(password, user.password)) {
        return res.status(401).json({ msg: "Invalid password" });
      }
      delete user.password;
      delete user.previous_passwords;
      delete user.address;
      const token = authService().issue(user);
      const userLoggedIn = {
        user: user,
        token: token,
      };
      res.status(200).json(userLoggedIn);
    } catch (error) {
      res.status(500).json({
        msg: "Unespected error",
        stack: error.stack,
        msgError: error.message,
      });
    }
  });

  app.post(`${path}/register`, async (req, res) => {
    try {
      const { name, email, password, confirmPass, company_id, userGroup_id } =
        req.body;
      if (password !== confirmPass) {
        return res.status(400).json({ msg: "Passwords do not match" });
      }
      const user = await User.find({
        where: {
          email: email,
        },
      });
      if (user) {
        return res.status(400).json({ msg: "E-mail already registered" });
      }
      let createdUser = await User.create({
        name,
        email,
        password: bcrypt().password(password),
        company_id,
        userGroup_id,
        active: true,
      });
      delete createdUser.password;
      delete createdUser.previous_passwords;
      delete createdUser.address;
      const token = authService().issue({ user: createdUser });
      return res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({
        msg: "Unespected error",
        stack: error.stack,
        msgError: error.message,
      });
    }
  });

  app.post(`/v1${path}/permissions/:id`, async (req, res) => {
    try {
      const { id } = req.params;
      let user = await User.find({
        where: {
          id: parseInt(id),
        },
        include: {
          UserGroup: {
            include: {
              Permissao: true,
            },
          },
          SpecialPermission: true,
        },
      });
      const permissions = {
        Permissions: user.UserGroup,
        SpecialPermissions: user.SpecialPermission,
      };
      delete user.UserGroup;
      delete user.SpecialPermission;

      user = _.omitBy(user, _.isNil);
      await User.update(user.id, user);
      return res.status(200).json(permissions);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Unespected error",
        stack: error.stack,
        msgError: error.message,
      });
    }
  });

  app.get(`/auth${path}/validate-token`, async (req, res) => {
    try {
      res.status(200).send({
        valid: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
};
