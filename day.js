const Time=require('./Time.js');
var fs = require('fs');

//class declaration
class Day {
  constructor(dayWeek,startingTime, endingTime) {
    this.startingTime = startingTime;
    this.endingTime = endingTime;
    this.dayWeek=dayWeek
  }
}

//File reader for config file
// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('./config.txt') //ad hoc list of dates and wages
// });

const mapConfig=new Map();
const mapWeekday=new Map();
const mapWeekend=new Map();
//initialization of maps




Day.prototype.dailyWage=function() { //assumes the worker works less than 18 hours a day
	let wage=0;
	if(this.dayWeek==6||this.dayWeek==7){
		let keys=mapConfig.get("Weekend").keys();
		midNight=new Time("00:00");
		shiftTime1=new Time(keys.next().value);
		shiftTime2=new Time(keys.next().value);
		shiftTime3=new Time(keys.next().value);
		if(this.startingTime.timeIsBetween(shiftTime1,shiftTime2,this.startingTime)){
			
			if(this.endingTime.isBiggerThan(shiftTime2)){
				wage+=(mapConfig.get("Weekend").get(shiftTime1.getTimeString()))*this.startingTime.timeRemaining(shiftTime2,this.startingTime);
				let remain=this.endingTime.timeRemaining(this.endingTime,shiftTime2);
				wage+=(mapConfig.get("Weekend").get(shiftTime2.getTimeString()))*remain;
				return wage;
			}else{
				wage+=(mapConfig.get("Weekend").get(shiftTime1.getTimeString()))*this.startingTime.timeRemaining(this.endingTime,this.startingTime);
				return wage;
			}
			
		}if(this.startingTime.timeIsBetween(shiftTime2,shiftTime3,this.startingTime)){
			
			if(this.endingTime.isBiggerThan(shiftTime3)){
				wage+=(mapConfig.get("Weekend").get(shiftTime2.getTimeString()))*this.startingTime.timeRemaining(shiftTime3,this.startingTime);
				let remain=this.endingTime.timeRemaining(this.endingTime,shiftTime3);
				wage+=(mapConfig.get("Weekend").get(shiftTime3.getTimeString()))*remain;
				return wage;
			}else{
				wage+=(mapConfig.get("Weekend").get(shiftTime2.getTimeString()))*this.startingTime.timeRemaining(this.endingTime,this.startingTime);
				return wage;
			}
		}if(this.startingTime.timeIsBetween(shiftTime3,midNight,this.startingTime)){
			wage+=(mapConfig.get("Weekend").get(shiftTime3.getTimeString()))*this.startingTime.timeRemaining(this.endingTime,this.startingTime);
				return wage;
		}
	}
	else{
	    let keys=mapConfig.get("Weekdays").keys();	
	    
		midNight=new Time("00:00");
		shiftTime1=new Time(keys.next().value);
		shiftTime2=new Time(keys.next().value);
		shiftTime3=new Time(keys.next().value);

		if(this.startingTime.timeIsBetween(shiftTime1,shiftTime2,this.startingTime)){
			
			if(this.endingTime.isBiggerThan(shiftTime2)){
				wage+=(mapConfig.get("Weekdays").get(shiftTime1.getTimeString()))*this.startingTime.timeRemaining(shiftTime2,this.startingTime);
				let remain=this.endingTime.timeRemaining(this.endingTime,shiftTime2);
				wage+=(mapConfig.get("Weekdays").get(shiftTime2.getTimeString()))*remain;
				return wage;
			}else{
				wage+=(mapConfig.get("Weekdays").get(shiftTime1.getTimeString()))*this.startingTime.timeRemaining(this.endingTime,this.startingTime);
				return wage;
			}
			
		}if(this.startingTime.timeIsBetween(shiftTime2,shiftTime3,this.startingTime)){
			;
			if(this.endingTime.isBiggerThan(shiftTime3)){
				wage+=(mapConfig.get("Weekdays").get(shiftTime2.getTimeString()))*this.startingTime.timeRemaining(shiftTime3,this.startingTime);
				let remain=this.endingTime.timeRemaining(this.endingTime,shiftTime3);
				wage+=(mapConfig.get("Weekdays").get(shiftTime3.getTimeString()))*remain;
				return wage;
			}else{
				wage+=(mapConfig.get("Weekdays").get(shiftTime2.getTimeString()))*this.startingTime.timeRemaining(this.endingTime,this.startingTime);
				return wage;
			}
		}if(this.startingTime.timeIsBetween(shiftTime3,midNight,this.startingTime)){
			wage+=(mapConfig.get("Weekdays").get(shiftTime3.getTimeString()))*this.startingTime.timeRemaining(this.endingTime,this.startingTime);
				return wage;
		}
	}
	return wage;
}

Day.prototype.strInitialize=function(String){
	let x=String.substring(2,7);
	this.startingTime=new Time(x);
	let y=String.substring(8, 13);
	this.endingTime=new Time(y);

	switch(String.substring(0,2)){
		case "MO":
			this.dayWeek=1;
			break;
		case "TU":
			this.dayWeek=2;
			break;
		case "WE":
			this.dayWeek=3;
			break;
		case "TH":
			this.dayWeek=4;
			break;
		case "FR":
			this.dayWeek=5;
			break;
		case "SA":
			this.dayWeek=6;
			break;
		case "SU":
			this.dayWeek=7;
			break;
	}
	var array = fs.readFileSync('config.txt').toString().split("\n");
for(i in array) {
	let key=array[i].substring(0,5);
	let value=array[i].slice(array[i].length-7).substring(0,2);
    if(i==1||i==2||i==3){
    	mapWeekday.set(key,value);
    }if(i==5||i==6||i==7){
    	mapWeekend.set(key,value);

    }
}
mapConfig.set('Weekdays',mapWeekday);
mapConfig.set('Weekend',mapWeekend);
}


module.exports = Day;