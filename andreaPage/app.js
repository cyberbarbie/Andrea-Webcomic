const   express          = require("express"),
        app              = express(),
        bodyParser       = require("body-parser"),
        expressSanitizer = require("express-sanitizer"),
        methodOverride   = require("method-override"),
        mongoose         = require("mongoose");

//Will require mongoDB/mongoose at later point 
//App Configuration
mongoose.connect('mongodb://localhost/andreaApp');
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(expressSanitizer());

var artSchema = new mongoose.Schema({
        title: String,
        image1: String,
        image2: String,
        image3: String,
        image4: String,
        image5: String,
        body: String,
        created: {type: Date, default: Date.now}
});
var Art = mongoose.model('Art', artSchema);

app.get('/', function(req, res){
        res.render('landing');
});

app.get('/login', function(req,res){
        res.render('login');
});

app.get('/adminPage', function(req,res){
        res.render('adminPage');
});

//Index (Read) Routes
app.get('/index', function(req, res){
        Art.find({}, function(err, arts){
                if(err){
                        console.log(err);
                        res.redirect('/landing');
                } else {
                     res.render('index', {arts: arts})   
                }
        });
});








app.listen(3000, function(){
        console.log("connection successful");
}) 
