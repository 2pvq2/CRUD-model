const express = require('express')
const router = express.Router()
const { getHomepage,getABC, getHoidanIT } = require('../controllers/homeController')

router.get('/', getHomepage )
router.get('/abc',getABC)
router.get('/hoidanit',getHoidanIT)

  
module.exports = router