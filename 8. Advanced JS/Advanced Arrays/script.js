// Advanced Arrays

const array = [1,2,10,16];

const double = []
const newArray = array.forEach((num) =>{
	double.push(num *2);
})

console.log(double);

// map,filter,reduce ---> Very Important Methods


//Map
const array = [1,2,10,16];
const mapArray = array.map((num) =>{
	return num * 2;
});

const mapArray = array.map(num => num * 2);

//Filter
const array = [1,2,10,16];
const filterArray = array.filter((num) =>{
	return num > 5;
});

const filterArray = array.filter(num => num > 5);

//Reduce

const array = [1,2,10,16];
const redcueArray = array.reduce((accumulator,num) => {
	return accumulator + num;
},0);

