var database = [
 {
	username:"Gaurav",
	password:"abcde"
 },
 {
	username:"Sally",
	password:"abcde"
 },
 {
	username:"Barry",
	password:"abcde"
 },

];

var newsfeed =  [
 {
	username:"Barry",
	timeline: "changed the timeline"
 },
 {
	username:"Thawne",
	timeline: "Timeline is Malleable"
 }
];


var userNamePrompt = prompt("Enter username:");
var passwordPrompt = prompt("Enter password:");

function isUserValid(username,password){
	for (var i = 0;i<database.length;i++){
		if (database[i].username === username &&
		   database[i].password === password){
			return true;
		}
	}
	return false;
}


function signIn(user,pass){
	if (isUserValid(user,pass))
	{
			console.log(newsfeed);
	}
	else{
		alert("Sorry, wrong username and password");
	}
}


signIn(userNamePrompt,passwordPrompt);