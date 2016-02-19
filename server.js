var express =   require("express");
var bodyParser  = require('body-parser');
var multer  =   require('multer');
 word    = require('./routes/word');
var app         =   express();
var router =  express.Router();

conn = null;
config = require('./lib/config');
db = require('./lib/database');
//app
//app_user
//cobrar31
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './audio');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  }
});
var upload = multer({ storage : storage}).single('userPhoto');

//app.use(serveStatic(__dirname + '/audio/'));
/*app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.get('/test.jpg', function (req, res) {
  //console.log(req.params);
  res.sendFile(__dirname + '/test.jpg');
});*/

config.set();
app.get('/audio/:thing', function (req, res) {
  //console.log(req.params.thing);
  res.sendFile(__dirname + '/audio/' + req.params.thing);
});

app.get('/getfiles', function(req, res){
	db.query('select * from words where page_id = 1', function(rows){
		res.send(rows.data);
	});
});

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.post('/putfiles',function(req,res){
  console.log(req);
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }

        // store data
        //db.query('insert into words(page_id, word, viet_word, file) VALUES', function(rows){
        //  res.send(rows.data);
        //});

        res.end("File is uploaded");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});
