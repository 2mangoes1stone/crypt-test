const express = require('express')
const bodyParser = require('body-parser')
const testRouter = require('./routes/test')

const server = express()

server.use(bodyParser.json())

server.use(testRouter)

const port = 7777
server.listen(port, () => {
  console.log(`Start on localhost:${port}`);
})
