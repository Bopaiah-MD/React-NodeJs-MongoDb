const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//importing the routes file 
const routes = require('./routes/api')

//set up express app
const app = express();

// use validation address

app.use(function(err,req,res,next){
//console.log(err);
    res.send({ error:err.ValidationError })
});

// connect to mongodb

mongoose.connect('mongodb://localhost/ninjago',{ useNewUrlParser: true });  //ninjago is the db name 
mongoose.Promise = global.Promise;

//use bodyParser
app.use(bodyParser.json());

//use the routes here 

app.use('/api',routes);

//handle requests

app.get('/api', function (req, res) {
    console.log('Get requests call')
    res.send({name:'bopaiah-tecie'});  
} )


// listen to a port

//i.e process.env.port when if we have heroku and it has a port predefined  we can say 
// either listen to or || 4000 

app.listen(process.env.port || 4000, function() {
console.log('listening for requests express here');
});