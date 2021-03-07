//Class declaration
class Time { 
	constructor(timeString) {
    var t = timeString.split(":");
    this.hour = parseInt(t[0]);
    this.minutes = parseInt(t[1]);
    this.isBiggerThan = function(hour) { 
    	
        return (this.hour > other.hour) || (this.hour === other.hour) && (this.minutes >= other.minutes);
    };
}
}

Time.prototype.timeIsBetween=function (start, end, check) {
    return (start.hour <= end.hour) ? check.isBiggerThan(start) && !check.isBiggerThan(end)
    : (check.isBiggerThan(start) && check.isBiggerThan(end)) || (!check.isBiggerThan(start) && !check.isBiggerThan(end));    
}
Time.prototype.timeRemaining=function(end,check){
	let ans=0;
	if(!check.isBiggerThan(end)){
		ans+=end.hour-check.hour;
		ans+=(end.minutes-check.minutes)/60;
	}if(end.hour==0&&end.minutes==0){
		ans+=24-check.hour;
		ans+=(-check.minutes)/60;
	}
	return ans;
}
module.exports = Time;