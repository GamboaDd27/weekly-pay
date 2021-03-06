const Time=require('./Time.js');
const Hash=require('./Hash.js')
class Day {
  constructor(startingTime, endingTime) {
    this.startingTime = startingTime;
    this.endingTime = endingTime;
  }
}

//File reader for config file
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./config.txt') //ad hoc list of dates and wages
});

const mapConfig=new Map();
let i=0;
let mapWeekday=new Map();
let mapWeekend=new Map();


//Iterative initialization of the maps
lineReader.on('line', function (line) {
  switch (i) {
  case 1:
    mapWeekday.set(line.substring(0,1),line.slice(line.length-6).substring(0,1));//sets the given paramenter of the corresponding map to the starting hour and the corresponding hourly wage 
    break;
  case 2:
    mapWeekday.set(line.substring(0,1),line.slice(line.length-6).substring(0,1));
    break;
  case 3:
    mapWeekday.set(line.substring(0,1),line.slice(line.length-6).substring(0,1));
    break;
  case 5:
    mapWeekend.set(line.substring(0,1),line.slice(line.length-6).substring(0,1));
    break;
  case 6:
    mapWeekend.set(line.substring(0,1),line.slice(line.length-6).substring(0,1));
    break;
  case 7:
    mapWeekend.set(line.substring(0,1),line.slice(line.length-6).substring(0,1));
    break;
  default:
    console.log('pass');
}
	i++;
});

ht.set('Weekdays',mapWeekday);
ht.set('Weekend',mapWeekend);

const getTimeIntervals=function() {
	this.startingTime
}