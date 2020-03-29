const express = require('express')
const router = express.Router();

//models
const userModel = require('../models/user')


router.get('/',
    userModel.getMovies
)

module.exports = router;