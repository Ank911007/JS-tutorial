console.log("hello");

//function declaration
add(5,10);
function add(x,y)
{
    console.log(x+y);
}

// function assignment / NAMED FUNCTION ASSIGNMENT
let multiply = function mul(x,y)
{
    console.log(x*y);
}
multiply(5,10);
let multiply1 = multiply;
multiply1(5,5);


// ANONYMOUS FUNCTION ASSIGNMENT
let sub = function(x,y)
{
    console.log(x-y);
}
sub(15,5);


// dynamic nature of function
function sum(a,b)
{
    
    return a+b;
}
console.log(sum(50,50));
console.log(sum(50));
console.log(sum());
console.log(sum(50,50,100,200));


// arguments -> special Objeccts in js
function sum1(a,b)
{
    console.log(arguments);
    return a+b;
}
sum1(1,2);
sum1(1,2,3,4,5,6);
sum1(1)


//access arguments

function sum2()
{
    let total=0;
    for(let value of arguments)
        total=total+value;
    return total;
}
console.log(sum2());
console.log(sum2(1));
console.log(sum2(1,2,3,4,5));


// REST OPERATOR

function sum4(...args)
{
    console.log(args);
}
sum4(1,2,3,4,5,6);

function sum3(a,...args)
{
    console.log(a);
    console.log(args);
}
sum3(1,2,3,4,5,6);

function sum5(a,b,c,...args)
{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(args);
}
sum5(1,2,3,4,5,6);

// DEFAULT PARAMETER

function interest(p,r=5,y=10)
{
    return (p*r*y)/100;
}
console.log(interest(100));
console.log(interest(100,1));
console.log(interest(100,1,2));
console.log(interest(100,undefined,2));

// GETTER & SETTER
// TRY & CATCH BLOCK -> ERROR HANDLING
let person = {
    fName : 'Ankit',
    lName : 'Kumar',
    get fullName()
    {
    return `${person.fName} ${person.lName}`
    },
   
    set fullName(value)
    {
       
            
        let parts =value.split(' ');
        this.fName=parts[0];
        this.lName = parts[1];
    }
}

console.log(person);
console.log(person.fullName);
person.fullName='Aniket Kumar';
console.log(person.fullName);
try{
    person.fullName=false;
}
catch(e)
{
    console.log('error' + e);
}

// Scope
{
    let a=10;
    console.log(a);
}
{
    
    var a=20;
    console.log(a);
    
}


// REDUCING AN ARRAY

let total=0;

let arr50 = [10,20,30,40,50];

// using
for(let value of arr50)
{
    total+=value;
}
console.log(total);

// using (accumulator -> total), (currentValue -> value )
let totalSum =arr50.reduce((accumulator , currentValue) => accumulator+currentValue, 0)
console.log(totalSum);
