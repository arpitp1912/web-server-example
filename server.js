var express = require('express');

var app = express();

var middleware = require('./middleware.js')

// Below code reuired if any specific js file needs to be shown as default
// app.get('/', function(req, res){
//     res.send('Hello Express!');
// });

var PORT = process.env.PORT||3000;


// app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

// console.log(__dirname);

app.listen(PORT,function(){
    console.log('Express server started on port '+ PORT + '!');
});