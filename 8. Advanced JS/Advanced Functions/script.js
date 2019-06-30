const first = () => {
	const greet = "Hi";
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//Closures

// A function has been run. Its Executed.Its never going to execute again.
// But its going to remember that there are refrences to those variables so that the 
// child scope always has access to the parent scope.

// Children always have access to the their parent scope but 
// parent doesnt have acess to the scope of the Children.

//Currying : Process of converting a function taking multiple arguments at
// a time into a function taking a single argument at a time.

const multiply= (a,b) => a*b;

const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3)(4);


const multiply= (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const multiplyBy5 = curriedMultiply(5);

//Compose

// Compose is the act of putting two functions together to form a third function where the 
// output of one function is the input of other.

const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num+1;
compose(sum,sum)(10);


// Avoid Side Effects and Functional Purity