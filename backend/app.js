'use strict'
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const consign = require('consign')
const auth = require('./policies/auth.policy')
const JWTService = require("./services/auth.service");

const app = express()

app.use(cors())

app.use(
  helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false,
  })
)

const permissionChecker = (req, res, next) => {
  const method = req.method.toLowerCase()
  const entity = req.params[0]
  JWTService().verify(req.header('Authorization').split(' ')[1], async (err, usuario) => {
    console.log(method, entity)
    if (usuario.permissoes) {

    }
  })

  next()
}

app.all('/v1/*', (req, res, next) => auth(req, res, next))
app.all('/v1/*', (req, res, next) => permissionChecker(req, res, next))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

consign().include('controllers').into(app)

module.exports = app
// const server = http.Server(app)

// server.listen(3000)
