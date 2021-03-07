const expres=require("express");
const bodyParser=require("body-parser");
const fs = require('fs');
const Employee=require('./employee.js');
const app=expres();

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
  let results=[];
  try {
    var array = fs.readFileSync(request.body.file).toString().split("\n");
    for(i in array) {
      let emp1=new Employee();
      emp1.strInitialize(array[i]);
      let ans={name:emp1.name,wage:emp1.weeklyWage().toFixed(2)};
    results.push(ans);
    }
  } catch (err) {
    console.error(err)
  }
 return response.render("result", {results: results}); 
});


app.listen(3000, function(){
  console.log("app running on port 3000");
})