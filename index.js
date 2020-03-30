const express = require('express')
const fs = require('fs')
const path = require('path')

require('dotenv').config()

//Routing
const userRouting = require('./routes/user.js')
const movieRouting = require('./routes/movies.js')

const app = express()
const port = process.env.PORT;

//Create view engine
app.set('view engine', 'ejs')

//Encodes url for data passing
app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'));

app.use('/', userRouting)
app.use('/movies', movieRouting)

//Creates required folders for content
if (!fs.existsSync(path.join(__dirname, '/public/movies'))) 
    fs.mkdirSync(path.join(__dirname, '/public/movies'))

if (!fs.existsSync(path.join(__dirname, '/public/images'))) 
    fs.mkdirSync(path.join(__dirname, '/public/images'))

app.listen(port, () => {
    console.log(`Server running on port ${port}!`)
})