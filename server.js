var express =   require("express");
var bodyParser  = require('body-parser');
var multer  =   require('multer');
var word    = require('./routes/word');
var app         =   express();
//app
//app_user
//cobrar31
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './audio');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
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
app.get('/audio/:thing', function (req, res) {
  //console.log(req.params.thing);
  res.sendFile(__dirname + '/audio/' + req.params.thing);
});

app.get('/getfiles', function(req, res){
  word.read;
    //res.send("{\"text\": \"when\", \"viet\": \"some text here\", \"file\":\"audio/test\"}");
});

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.post('/api/photo',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});
