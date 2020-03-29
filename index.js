const express = require('express')

require('dotenv').config()

//Routing
const userRouting = require('./routes/user.js')

const app = express()
const port = process.env.PORT;

//Create view engine
app.set('view engine', 'ejs')

//Encodes url for data passing
app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'));

app.use('/', userRouting)

app.listen(port, () => {
    console.log(`Server running on port ${port}!`)
})