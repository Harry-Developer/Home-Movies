const express = require('express')
const router = express.Router();

const moviesModel = require('../models/movies')

router.get('/:movieName',
    moviesModel.getMovie
)

module.exports = router