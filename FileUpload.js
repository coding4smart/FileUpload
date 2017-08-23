 *
 * tangjicheng@gmail.com
 *
 * 1.accepts post requests url to upload a file at a time,
 *   save submitted files,
 * 
 *
 *
 */
var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/get-file-size", upload.single("file"), function (req, res, next) {
  var file_json = {};
  
  //console.log(req.file);
  file_json = {"size": req.file.size || 0};
  res.send('<p>file size is: {"size":'+file_json.size+'}</p>');
  res.end();
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.use(express.static('public'));

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
