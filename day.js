const Time=require('./Time.js');
var fs = require('fs');
class Day {
  constructor(dayWeek,startingTime, endingTime) {
    this.startingTime = startingTime;
    this.endingTime = endingTime;
    this.dayWeek=dayWeek
  }
}

//File reader for config file
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./config.txt') //ad hoc list of dates and wages
});

const mapConfig=new Map();
const mapWeekday=new Map();
const mapWeekend=new Map();
//initialization of maps
var array = fs.readFileSync('config.txt').toString().split("\n");
for(i in array) {
	console.log(array[i]);
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


console.log(mapConfig);
const dailyWage=function(argument) {
	if(this.dayWeek!==6&&this.dayWeek!=7){
		let keys=mapConfig.get("Weekend").keys();
		if(this.startingTime.timeIsBetween(keys[0],keys[1])){
			
		}if(this.startingTime.timeIsBetween(keys[1],keys[2])){

		}if(this.startingTime.timeIsBetween(keys[2],keys[0])){

		}
	}
	else{

	}
}
