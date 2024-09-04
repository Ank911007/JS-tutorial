// ****INBUILT OBJECTS*****

// 1.Math

console.log(Math.random());
console.log(Math.PI);
console.log(Math.max(2,1,4));
console.log(Math.min(5,9,7,10));
console.log(Math.round(1.8));
console.log(Math.abs(-1));


// 2. STRING

    //  PRIMITIVE
let str=' Ankit ';
console.log(str.length);
console.log(str.includes('it'));
console.log(str.startsWith('raj'));
console.log(str.endsWith('it'));
console.log(str.indexOf('i'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.replace('i','e'));
console.log(typeof(str));

let mes = "This is my first message"
console.log(mes.split(' '));
console.log(mes.split(''));

    //OBJECT
let str1 =new String('Raj');
console.log(typeof(str1));

    // TEMPLATE LITERALS

let str3= `This is ${str}
my second
message`;
console.log(str3);

// DATE
let date = new Date();
console.log(date);

let date1 = new Date('june 20 2000 7:15');
console.log(date1);

let date2 = new Date(2000,1,19,8);
console.log(date2);
//getter
console.log(date2.getDate());
//setter
date2.setDate(20);
console.log(date2.getDate());


// ******ARRAYS***********

// 1.Creation

let arr = [19,2,2002,'Ankit'];

console.log(arr);
console.log(arr[3]);

// 2.Insertion

// end -> push
arr.push('Raj');
console.log(arr);

//start -> unshift
arr.unshift(1);
console.log(arr);

//splice -> splice
arr.splice(4,0,'student','dbuu');
console.log(arr);

// 3. SEARCHING


//for primitive 
console.log(arr.indexOf(2002));
console.log(arr.indexOf(2000));

if(arr.indexOf(2002)!=-1)
    console.log('presnt');

console.log(arr.includes('student'));

//for objects

let arr2 =[
    {no : 1,name : 'ankit'},
    {no : 2,name : 'Aman'}   
]
console.log(arr2);
console.log(arr2.indexOf({no:1,name:'ankit'}));
console.log(arr2.includes({no:1,name:'ankit'}));
//using 1
let print = arr2.find(function(arr2)
{
    return arr2.name == 'ankit';
})
console.log(print);
// using 2 -> arrow function
let print2 = arr2.find(arr2 => arr2.name == 'Aman')
console.log(print2);



// 3. REMOVING ELEMENT

let arr3 = [1,2,3,4,5,6,7,8,9,10];

//end -> pop()
arr3.pop();
console.log(arr3);
//start ->  shift()
arr3.shift();
console.log(arr3);
// middle -> splice()
arr3.splice(3,1)
console.log(arr3);

// 4. EMPTY AN ARRAY

//using -1
let arr4 = [2,4,6,8,10];
let arr5 = arr4;
arr4 = [];
console.log(arr4);
console.log(arr5);

//using - 2
let arr6 = [2,4,6,8,10];
let arr7 = arr4;
arr6.length = 0;
console.log(arr6);
console.log(arr7);

// using -3
let arr9 = [2,4,6,8,10];
let arr10 = arr9;
arr9.splice(0,arr9.length);
console.log(arr9);
console.log(arr10);

// 5. COMBINIG & SLICING ARRAY

//combine
let a1 = [2,4,6,8];
let a2 = [3,6,9,12];
// using-1
console.log(a1.concat(a2));
//using - 2
let a = [...a1,...a2];
console.log(a);

//slice
console.log(a.slice(2));
console.log(a.slice(2,4));
    //full slicing
console.log(a.slice());

// 6. COPYING AN ARRAY

let b=[2,4,6];
let b1=b;
let b2=[...b];
console.log(b);
console.log(b1);
console.log(b2);

// 7.ITERATING AN ARRAY ->

// 1. for-of loop

let arr11 = [10,20,30,40];

for(let value of arr11)
{
    console.log(value);
}

// 2.for-each loop

let arr12 = [20,40,60,80];

arr12.forEach(function(value){
    console.log(value);
})

    // using arrow function

let arr13 = [100,200,400,800];

arr13.forEach(value => console.log(value))

// 8. JOINING ARRAYS

let arr14 =[200,400,800];
console.log(arr14.join(','));

let str11 = "This is my new message";
console.log(str11.split(' '));


// 9. Sorting Arrays

//primitive
let arr20 = [5,3,8,2];

console.log(arr20.sort());
console.log(arr20.reverse());

// 10. FILTERING ARRAY -> filter()

let arr25 = [1,2,-1,-4];

let filter = arr25.filter(function(value){
    return value>0;
})
console.log(filter);

//using above from arrow function

let arr26 = [5,10,-1,-4];

let filter1 = arr26.filter(value =>  value>0);
console.log(filter1);


// 11. MAPPING ARRAYS -> map()

let arr30 = [100,200,300,400];

let items=arr30.map(function(value){
    return 'no'+value;
})
console.log(items);
//using above from arrow function
let arr40 = [100,200,300,800];

let items1=arr40.map(value =>'no'+value)
console.log(items1);


// 12. MAPPING ARRAY WITH OBJECTS

let arr50 = [-5,5,-10,10,15];

let filter5= arr50.filter(value => value>0);

let item5 = filter5.map(num =>  {value : num})
console.log(item5);

//CHAINIG

let arr60 = [-5,8,-10,16,24];
let item6 = arr60.filter(value => value>0).map(num =>  {value : num});