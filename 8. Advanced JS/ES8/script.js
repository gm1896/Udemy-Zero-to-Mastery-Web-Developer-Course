ES8 Additional Functions

.padstart()
.padEnd()

const fun = (a,b,c,d,) => {
console.log(a);
}

fun(1,2,3,4,)

object.values
object.entries
object.keys


let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Grinch'
}

Object.keys(obj).forEach((key,index) =>{
	console.log(key,obj[key]);
})

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).forEach(value => {
	console.log(value);
})
