const Day=require('./day.js');

let nameRegex=/\w+[=]{1}/i;
let dayRegex=/\w{2}\d{2}[:]{1}\d{2}[-]{1}\d{2}[:]{1}\d{2}/g;

class Employee {
  constructor(name,days) {
  	this.name=name;
    this.days=days;
  }
}

Employee.prototype.weeklyWage=function(){
	let wage=0;
	for (const day of this.days) {
  	wage+=day.dailyWage();
} 
	return wage;

}
Employee.prototype.strInitialize=function(String){
	this.days=new Array();
	this.name=String.match(nameRegex)[0].slice(0, -1);
	for (var i =0;i< String.match(dayRegex).length ; i++) {
		let day=new Day();
		day.strInitialize(String.match(dayRegex)[i]);
		this.days.push(day);
	}
	
}
module.exports = Employee;