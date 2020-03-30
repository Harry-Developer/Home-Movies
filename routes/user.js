const express = require('express')

const multer = require('multer')
const router = express.Router();

//models
const userModel = require('../models/user')

var storage = multer.diskStorage({
    destination: function (request, file, callback){
        callback(null, './public/movies/');
    }, 
    filename: function(request, file, callback){
        //console.log(file); 
        callback(null, 'latest-video.mp4')
    }
}); 

var upload = multer({storage: storage}).single('videoFile');

router.get('/',
    userModel.getMovies
)

router.post('/upload',
    upload,
    userModel.uploadMovie
)


module.exports = router;