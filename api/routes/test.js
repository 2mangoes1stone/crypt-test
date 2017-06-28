const express = require('express')
const fetch = require('node-fetch')

const router = express.Router()

router.get('/test', (req,res) => {
  fetch('https://btc-e.com/api/3/ticker/btc_usd')
    .then((apires) => apires.json())
    .then((json) => {
      res.json(json)
    })
    .catch((error) => {
      res.json({ error:error })
    })
})


module.exports = router