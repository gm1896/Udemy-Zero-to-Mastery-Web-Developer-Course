//let + const

const player = "Bobby";
let experience = 100;
let wizardLevel = false;

if(experience > 90){
	let	wizardLevel = true;
	console.log("Inside",wizardLevel);
}
console.log("Outside",wizardLevel);


// Destructuring

const obj = {
	player:'Bobby',
	experience: 100,
	wizardLevel:false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const{player,experience} = obj;
let {wizardLevel} = obj;

// Object Properties

const name = "hello";

const obj = {
	[name]:"Jon Snow",
	[1+2]: "knows nothing"
}

const a = "Simon";
const b = true;
const c = {};

const obj = { a,b,c
}


//Template Strings

const greeting = "Hello" + name +"you seem to be doing" + greeting + "!"

const name = "Sally";
const age = 24;
const pet = "dog"


const greettingBest = `Hello ${name} you seem to be ${age-10}. What a beautiful ${pet} you have!`

//Default Arguments 

function greet(name='',age=30,pet="dog"){
	return `Hello ${name} you seem to be ${age-10}. What a beautiful ${pet} you have!`
}


//Symbol

let sym1 = Symbol();
let sym2 = Symbol('Foo');
let sym3 = Symbol('Bar');


//Arrow Functions

const add = (a,b) => a+b;
