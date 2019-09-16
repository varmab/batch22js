var myName="Varma";
var age=46;
var isStudent=false;

age="Fourty six";

if(typeof(age)=="number"){

}
else
{

}

console.log("Welcome to " + myName);
//console.error("Something bad happened");
//This is my comment

/*
    This is
    multi line
    comments
*/
var x; //here x is undefined

age=null;


var student={
    name:"Varma",
    age:46,
    isStudent:false
}

var studentName=student.name;
var studentAge=student["age"];

var p=10;

p+=10;

//Conditional Statements

var color="red";

if(color=="red"){
    console.log("Color is red");
}
else if(color=="black"){
    console.log("Color is black");
}
else if(color=="green"){
    console.log("Color is green");
}
else
{
    console.log("Color is Unknown")
}

var a=3;

if(a){

}
else
{

}

var b=3;

//Logical AND - &&
if((a==3) && (b==3)){
    console.log()
}
else
{

}

//Logical OR
if((color=="red") || (color=="green"))
{

}

//Logical NOT
if(color != "red"){

}

if(!(color == "red")){
    
}

//Ternary operator
(color=="red") ? console.log("RED") : console("NOT RED")

//switch
switch(color){
    case "red":
        console.log("color is red");
        break;
    case "black":
        console.log("color is black");
        break;
    default:
        console.log("color is unknown")
}

switch(a){
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("1")
        break;
    default:
        console.log("undefined or 0")
}

//Loops

//while
var a=0;

while(a<=10){
    console.log(a);
    a++;
}

//do .. while
var b=0;

do {
    console.log(b);
    b++;
}
while(b<=10)

//for 
for(var c=0;c<=10;c++){
    console.log(c)
}

//break
//continue

//Functions

console.log(add(1,2));

//Function Declaration
function add(a,b){
    console.log("a+b=",a+b);
    return a+b;
}

//JavaScript Hoisting
//Behaviour of interpreter which declarations first
//before executing

//Function expression
var sum=function(a,b){
    return a+b;
}

console.log(sum(2,3));


//Function expressions are not hoisted
//Modern programmers writes functions using Function expression syntex


//Arrays
var myNumbers=["one","two","three"];

var firstNumber=myNumbers[0];
var third=myNumbers[2];

myNumbers.push("four"); 
myNumbers.unshift("zero");

myNumbers.pop();
myNumbers.shift();

var myLetters=["a","b","c"];

var letters=myLetters.join('');

myLetters.forEach(function(value){
    console.log(value)
})


