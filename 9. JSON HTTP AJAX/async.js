// ASYNC AWAIT

movePlayer(100,'Left')
.then(() => movePlayer(400,'Left'))
.then(() => movePlayer(10,'Right'))
.then(() => movePlayer(330,'Left'))

async function playerStart() {
	const firstMove = await movePlayer(100,'Left');
	await momovePlayer(400,'Left');
	await movePlayer(10,'Right');
	await movePlayer(330,'Left');
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log)


async function dataLoad() {
	const f1 = await fetch('https://jsonplaceholder.typicode.com/users');
	const f2 = await f1.json();
	console.log(f2);

}

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]


const getData = async function() {
	try{
		const [users,posts,albums] = await Promise.all(urls.map(url =>
	fetch(url).then(resp=> resp.json())
  ))
	console.log('Users', users)
	console.log('Posts', posts)
	console.log('Albums', albums)
	}
	catch (err) {
		console.log('Oops',err)	
	}
}