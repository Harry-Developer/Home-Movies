const connection = require('./database')
const axios = require('axios').default;

exports.getMovie = function(req, res) {


    const movieTitle = req.params.movieName


    let sql = "SELECT * FROM movies WHERE title = ?"
    connection.query(sql, movieTitle, function(error, results, fields) {
        if (error) throw error;

        axios({
            method: 'post',
            url: 'http://www.omdbapi.com/?t=' + movieTitle + '&apikey=' + process.env.OMDB_KEY,
            responseType: 'json'
        })
        .then(function (response) {
            res.render('../views/pages/movie.ejs', {
                movie: response.data,
                file: results
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    })





}