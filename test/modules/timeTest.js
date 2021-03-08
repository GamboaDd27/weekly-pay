const assert=require('chai').assert;
const Time=require('../../modules/Time');

const testTime=new Time('12:00');
describe('isBiggerThan Time',function(){
	it('Should return false if the input is larger than the object', function(){
		let largeTime=new Time('23:59');
		let negative=testTime.isBiggerThan(largeTime);
		assert.equal(negative,false);
		
	})
})
describe('isBiggerThan Time',function(){
	it('Should return false if the input is not larger than the object', function(){	
		let smallTime=new Time('00:01');
		let possitive=testTime.isBiggerThan(smallTime)
		assert.equal(possitive,true);
	})
})