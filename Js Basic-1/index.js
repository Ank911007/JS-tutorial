console.log("namaste");
//VARIABLE let & var
let a="ankit";
console.log(a);

var b=5;
console.log(b);

var b="ankit";
console.log(b);

let c,d;
c=5;
d=10;
console.log(c);
console.log(d); 

let e;
console.log(e);

let ak=5;
ak="Ankit"
console.log(ak);


// OBJECTS
let person={
    name : "Ankit",
    age : 20
}
    //Output on Console
    console.log(person.name);
    console.log(person.age);
    //Output on Browser
  document.write(person.age);
  document.write(person.name);

    // OBJECTS
  let dog ={
    breed:"Golden retriever",
    height:"4ft",
    age:2,
    display:function() {
        document.write(this.breed+this.height+this.age);
        
    }
  }
  document.write(dog.breed);
  dog.height="7ft";
  dog.age=5;
  document.write(dog.height);
  document.write(dog["age"]);

    //CONSTANT
    const num=10;

    // ARRAY
    let names = ["Ankit","Love","Babbar"];
    names[3]="Amit"
    console.log(names[1]);
    console.log(names[3]);
    names[1]="babbar";
    console.log(names[1]);
    console.log(names[4]);
    //PUSH AND POP IN ARRAY
    names.push("hello");
    console.log(names[4]);
    
    names.pop();
    console.log(names[4]);


//Ternary OPERATOR
let age=19;
let status = (age>=18)?"vote":"no vote";
console.log(status);


//LOGICAL OPERATOR WITH NON BOOLEAN


//CONTROL STATMENT
let no=8;

switch(no)
{
  case 1: console.log('A')
          break;
  case 2: console.log('B')
          break;
  case 3: console.log('C')
          break;
  case 4: console.log('D')
          break;
  default: console.log('E')
        
}

//LOOPS

//for loop
for(let i=0;i<10;i++)
{
  console.log("ankit"+i);
}
//while loop
let i=0;
while(i<5)
{
  console.log(i);
  i++;
}
//do-while loop
i=10;
do{
  console.log(i);
  i--;
}while(i>=5);






