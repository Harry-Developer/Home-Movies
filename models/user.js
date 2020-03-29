const connection = require('./database')


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