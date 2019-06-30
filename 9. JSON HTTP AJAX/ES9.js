// Object spread operator

const animals = {
	tiger : 25,
	lion : 5,
	monkey : 2 ,
	bird: 40,
	donkey: 50 }

function ObjectSpread(p1,p2,p3) {
	console.log(p1)
	console.log(p2)
	console.log(p3)
}


const {tiger,lion, ...rest} = animals;

ObjectSpread(tiger,lion,rest);