const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;

mongoose.connect('mongodb://localhost/27017')
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error));
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use('/css', express.static(`${__dirname}public/css`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => res.render('create.ejs'));
app.post('/', (req, res) => res.render('create.ejs', formData(req.body)));


const formSchema = new mongoose.Schema(
    {
        data: Object,
    },
    { collection: 'new form' },
);

const Form = mongoose.model('Form', formSchema);

const formData = (bodyData) => {
    Form({ data: bodyData }).save((error) => {
        if (error) {
            throw error;
        }
    });
};

const urlencodedParser = bodyParser.urlencoded({ extended: false });
