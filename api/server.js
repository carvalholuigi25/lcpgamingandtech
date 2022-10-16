const express = require('express')
const path = require('path')
const jsonServer = require('json-server')
const https = require('https')
const fs = require('fs')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const port = 3001

const options = {
  key: fs.readFileSync(__dirname + '/ssl/key.pem', 'utf8'),
  cert: fs.readFileSync(__dirname + '/ssl/cert.pem', 'utf8')
};

server.set('view engine', 'ejs');
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(express.static(path.join(__dirname, "public")))
server.use("/assets", express.static(path.join(__dirname, "../src/assets")))

// Add custom routes before JSON Server router
server.get('/test', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
https.createServer(options, server).listen(port, () => {
  console.log(`LCPGamingNTech Api Server is running at the url: https://localhost:${port}/`)
})