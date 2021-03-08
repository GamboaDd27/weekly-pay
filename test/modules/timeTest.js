const assert=require('chai').assert;
const Time=require('../../modules/Time');

const testTime=new Time('12:00');
const smallTime=new Time('00:01');
const largeTime=new Time('23:59');
describe('isBiggerThan Time',function(){
	it('Should return false if the input is larger than the object', function(){
		
		let negative=testTime.isBiggerThan(largeTime);
		assert.equal(negative,false);
		
	})
})
describe('isBiggerThan Time',function(){
	it('Should return false if the input is not larger than the object', function(){	
		
		let possitive=testTime.isBiggerThan(smallTime)
		assert.equal(possitive,true);
	})
})
describe('timeIsBetween Time',function(){
	it('Should return true if the time is between two other times', function(){	
		
		let result=testTime.timeIsBetween(smallTime,largeTime,testTime);
		assert.equal(result,true);
	})
})
describe('timeIsBetween Time',function(){
	it('Should return false if the time is not between two other times', function(){	
		
		let result=testTime.timeIsBetween(testTime,largeTime,smallTime);
		assert.equal(result,false);
	})
})

describe('timeRemaining Time',function(){
	it('Should return the time remaining until the specified time, expected 11.98', function(){	
		
		let result=testTime.timeRemaining(largeTime,testTime).toFixed(2);
		assert.equal(result,11.98);
	})
})

