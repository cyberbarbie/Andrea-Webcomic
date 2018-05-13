const   express = require("express"),
        app   = express(),
        bodyParser = require("body-parser"),
        expressSanitizer = require("express-sanitizer"),
        methodOverride = require("method-override");


//Will require mongoDB/mongoose at later point 
//App Configuration
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(expressSanitizer());

app.get('/', function(req, res){
        res.render('landing');
});

app.get('/login', function(req,res){
        res.render('login');
});

app.get('/index', function(req, res){
        res.render('index');
});








app.listen(3000, function(){
        console.log("connection successful");
});
