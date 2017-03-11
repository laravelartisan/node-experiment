const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var db;


const app = express();

MongoClient.connect("mongodb://mlabraja:mlabraja@ds139327.mlab.com:39327/mean", (err, database) => {
    if (err) return console.log(err)
    db = database;
    app.listen(3000, () => {
        console.log('listening on 3000');
    });
});
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
        res.render('index.ejs', {quotes: result})
    })
  //res.sendFile(__dirname + '/index.html');
})

app.post('/quotes', (req, res) => {

    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        console.log(result);
        res.redirect('/')
    })
})




