//Advanced Objects


// Reference Type
var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

// Context vs Scope

//Scope
function b() {
	let a = 4;
}

//Context --> Tells you where we are within the object.
// this keyword --> refers to what abject its inside of 

const object4 = {
	a:function(){
		console.log(this);
	}
}

// Instantiation --> When you make a coppy of the object and resue the code.
class Player {
	constructor(name,type){
		console.log('Player',this);
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I am a ${this.type}`)
	}
}

class Wizard extends Player {

	constructor(name,type){
		super(name,type);
		console.log('Wizard',this);
	}
	play(){
		console.log(`WEEEEEEEEEEE I'm a ${this.type}`)
	}
}

const wizard1 = new Wizard('Barry','Flash');
const wizard2 = new Wizard('Thawne','ReverseFlash');
