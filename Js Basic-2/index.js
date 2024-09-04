console.log("ankit");


// OBJECTS

let react = {
    length : 1,
    breadth : 2,
    draw : function()
    {
        console.log('draw')
    }
}

// FACTORY FUNCTION - OBJECT CREATION

function createRect()
{   
    let rect = {
        length : 1,
        breadth : 2,
        draw : function()
        {
            console.log('draw');
        }
    }
    return rect;
}
let rectobj1=createRect();

function createRectangle(length,breadth)
{   
    return rectangle = {
        length : length,
        breadth : breadth,
        draw : function()
        {
            console.log('draw');
        }
    }

}

let obj1=createRectangle(5,4);
let obj2=createRectangle(5,4);

//  CONSTUCTOR FUNCTION - PASCAL NOTATION

function Rectangle()
{
    this.length = 1;
    this.breadth = 5;
    this.draw = function()
    {
        console.log('draw');
    }
}

let rectangleobj = new Rectangle();

function Rectangle(len,bre)
{
    this.length = len;
    this.breadth = bre;
    this.draw = function()
    {
        console.log('draw');
    }
}

let rectangle1 = new Rectangle(4,6);


// DYAMIC NATURE OF OBJECTS

rectangle1.color ='yellow';
console.log(rectangle1);

delete rectangle1.color;
console.log(rectangle1);

//Funcction are Objects
console.log(Rectangle.name);


// CONSTUCTOR PROPERTY

//square function is  also an obj which has constructor Function
let square = new Function(
    'length','breadth',
    //backtick character 
    `this.length = length;
    this.breadth = breadth;
    this.draw = function()
    {
        console.log('draw');
    }`
);
let sqObj =new square(4,5);
console.log(sqObj);


// PRIMITIVE OR VALUE TYPE

let a=10;
let b=a;
a++;
console.log(a);
console.log(b);

//REFERENCE TYPE OR OBJECTS

let c = {
    value : 10 
}
let d = c;
c.value++;
console.log(c.value);
console.log(d.value);

let e = 15;
function inc(e)
{
    if(e<=16)
    e++;

    return e;
}
inc(e);
console.log(e);
console.log(inc(e));


let f = {
    value : 10
}
inc(f)
{
    f.value++;
}
inc(f);
console.log(f.value);

// ITERATING THROUGH OBJECTS

//  for-of loop - objects

let triangle = {
    length : 2,
    breadth : 8
}

for(let key in triangle)
{
    console.log(key,triangle[key]);
}

//

if('color' in triangle)
    console.log('present')
else
console.log('absent')


// OBJECT CLONING


// 1. ITERATION
let src = {
    value : 18
}
let dest = {}
for(let key in src)
{
    dest[key]=src[key];
}
src.value++;
console.log(src.value);
console.log(dest.value);

// 2. ASSIGN

let sr = {
    value : 20
}
let des = Object.assign({},sr);

sr.value++;
console.log(sr.value);
console.log(des.value);

// 3. Spread

let source = {
    value : 25
}
let destination = {...source};

source.value++;
console.log(source.value);
console.log(destination.value);

// Garbage Collector