const expres=require("express");
const bodyParser=require("body-parser");
const app=expres();
const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./test.txt')
});

lineReader.on('line', function (line) {
  console.log(line);
});

//middleware/routing
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response){
  return response.redirect('form-post');
});


app.get("/form-post", function(request, response){
  return response.render("form-post")
});



app.post("/submit-form-post", function(request, response){

 console.log("me");
});


app.listen(3000, function(){
  console.log("app running on port 3000");
})