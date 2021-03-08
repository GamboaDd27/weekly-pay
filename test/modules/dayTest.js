const assert=require('chai').assert;
const Day=require('../../modules/Day');


const initStr="MO12:00-13:00";
let testDay=new Day();

describe('strInitialize Day',function(){
	it('Should initialize an integer for dayWeek and two Time objects for startingTime and endingTime', function(){
	
		testDay.strInitialize(initStr);

		assert.typeOf(testDay.dayWeek,'number');
		assert.typeOf(testDay.startingTime,'Object');
		assert.typeOf(testDay.endingTime,'Object');
	})
})

describe('dailyWage Day',function(){
	it('Should compute an appropiate wage for each day, expected 15', function(){
		//testDay.strInitialize(initStr);
		let ans=0;
		ans+=testDay.dailyWage();

		assert.equal(ans,15);
	})
})