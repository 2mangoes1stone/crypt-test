const express = require('express')
const fetch = require('isomorphic-fetch')

const router = express.Router()

router.get('/test', (req,res) => {
  fetch('https://btc-e.com/api/3/ticker/btc_usd')
    .then((testData) => {
      res.json(testData)
    })
    .catch((error) => {
      res.json({ error:error })
    })
})


module.exports = router