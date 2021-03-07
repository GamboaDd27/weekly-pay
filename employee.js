const Day=require('./day.js');

class Employee {
  constructor(name,days) {
  	this.name=name;
    this.days=days;
  }
}

Employee.prototype.weeklyWage=function(day){
	let wage=0;
	for (const day of this.days) {
  	wage+=day.dailywage();
} 
	return wage;

}