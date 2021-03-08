const assert=require('chai').assert;
const Employee=require('../../modules/employee');


const initStr="RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00";
let testEmp=new Employee();

describe('strInitialize Employee',function(){
	it('Should initialize an string for name and an array for days', function(){
	
		testEmp.strInitialize(initStr);

		assert.typeOf(testEmp.name,'string');
		assert.typeOf(testEmp.days,'Array');
	})
})

describe('weeklyWage Employee',function(){
	it('Should compute an appropiate wage for each day, expected 215', function(){
		//testDay.strInitialize(initStr);
		let ans=0;
		ans+=testEmp.weeklyWage();

		assert.equal(ans,215);
	})
})