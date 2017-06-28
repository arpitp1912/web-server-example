var express = require('express');

var app = express();

// Below code reuired if any specific js file needs to be shown as default
// app.get('/', function(req, res){
//     res.send('Hello Express!');
// });

var PORT = 3000;

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('Private route hit!');
        next();
    },
    logger: function(req, res, next){
        console.log('Request method: '+ new Date().toString() + " " + req.method + " " + req.originalUrl);
        next();
    }
}

// app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

// console.log(__dirname);

app.listen(PORT,function(){
    console.log('Express server started on port '+ PORT + '!');
});