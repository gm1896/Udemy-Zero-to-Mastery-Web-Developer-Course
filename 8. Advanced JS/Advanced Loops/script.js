//Advanced Looping in Js

const basket = ["apples","oranges","grapes"];

const detailedBasket = {
	apples:5,
	oranges:10,
	grapes :1000
}


//For Each
basket.forEach(item => {
	console.log(item);
})

//For of
//Iterating over the arrays and strings
for (item of basket){
	console.log(item);
}

//For in --> Works wiith objects.
// Allows us to loop over and check the properties
//Enumerating -- Objects

for (item in detailedBasket){
	console.log(item)
}