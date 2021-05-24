const express = require('express');
const app = express()
const bodyParser = require('body-parser');

module.exports = app 

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true}))


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))



app.get('/', (req, res) => res.render('create.ejs'))
app.post('/', (req, res) => res.render('create.ejs', console.log(req.body)))








