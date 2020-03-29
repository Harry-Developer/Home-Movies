const connection = require('./database')
const axios = require('axios').default;

exports.getMovie = function(req, res) {

    const movieTitle = req.params.movieName
    axios({
        method: 'post',
        url: 'http://www.omdbapi.com/?t=' + movieTitle + '&apikey=' + process.env.OMDB_KEY,
        responseType: 'json'
    })
    .then(function (response) {
        res.render('../views/pages/movie.ejs', {
            movie: response.data
        })
    })
    .catch(function (error) {
        console.log(error);
    });



}