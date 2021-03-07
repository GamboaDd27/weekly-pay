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
  let emp=new Employee();
  emp.strInitialize("ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00");
  console.log(emp.name);
  console.log(emp.days);
  console.log(emp.weeklyWage());
  try {
    var array = fs.readFileSync(request.body.file).toString().split("\n");
    for(i in array) {
     // console.log(array[i]);
     // console.log(i);
    }
  } catch (err) {
    console.error(err)
  }
 
});


app.listen(3000, function(){
  console.log("app running on port 3000");
})