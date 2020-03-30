const connection = require('./database')
const request = require('request');
const axios = require('axios').default;

const fs = require('fs')
const path = require('path')

exports.getMovies = function(req, res) {

    let sql = "SELECT * FROM movies"
    connection.query(sql, function(error, results, fields) {
        if(error) throw error

        res.render(
            '../views/pages/index.ejs', {
            totalMovies: results.length,
            movie: results
        })
    })
}


exports.uploadMovie = function(req, res) {

    var movieTitle = req.body.title;

    fs.rename(
        path.join(__dirname, '../public/movies/latest-video.mp4'), 
        path.join(__dirname, '../public/movies/' + movieTitle + '.mp4'), 
        (err) => {
            if (err) throw err;
    })

    axios({
        method: 'post',
        url: 'http://www.omdbapi.com/?t=' + movieTitle + '&apikey=' + process.env.OMDB_KEY,
        responseType: 'json'
    })
    .then(function (response) {
        download(response.data.Poster, 'public/images/' + movieTitle + '.png', function() {

            let sql = 'INSERT INTO movies SET ?'
            let data = {title: movieTitle, image: movieTitle + '.png', file: movieTitle + '.mp4'}
        
            connection.query(sql, [data], function(error, results, fields) {
                if (error) throw error;
            })
        
            res.redirect('/')
        })
    })
    .catch(function (error) {
        console.log(error);
    });

   
}

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
  