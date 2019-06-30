const fs = require('fs')

fs.readFile('./hello.txt',(err,data) => {
	if(err){
		console.log("Errrorr");
	}
	console.log('1',data.toString('utf-8'));

})

const file = fs.readFileSync('./hello.txt');
console.log('2',file.toString());

// fs.appendFile('./hello.txt',' This is Awesome!', err => {
// 	if(err){
// 		console.log("Errrorr");
// 	} })


//WRITE 

// fs.writeFile('bye.txt','Sad to see you go',err =>{
// 	if(err){
// 		console.log("Errrorr");
// 	}
// })


//Delete

fs.unlink('./bye.txt',err =>{
	if(err){
		console.log("Errrorr");
	}
	console.log('Inception');
})

