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


var movies=[
    {
        id:2,
        title:"Adhurs",
        actor:"NTR",
        revenue:50,
        theaters:["B","C"]
    },
    {
        id:1,
        title:"Bahubali",
        actor:"Prabhas",
        revenue:300,
        theaters:["A","B"]
    },
    {
        id:3,
        title:"Kushi",
        actor:"Pavan",
        revenue:15,
        theaters:["C","D"]
    }
]

// every, some, filter, map, reduce

//1.is any movie crossed 50cr revenue?
var isAny50=movies.some(function(movie){
    return movie.revenue>=50;
})

console.log(isAny50);

//2. is all movies crossed 100cr revenue?
var isAll100=movies.every(function(movie){
    return movie.revenue>=100;
})

console.log(isAll100)

//3. I want to get a list of movies released in
// theater B

var bMovies=movies.filter(function(movie){
    return movie.theaters.indexOf("B")!=-1;
})

console.log(bMovies);

//4. I want list of actors of all movies
// ["Prabhas","NTR","Pavan"]
var actors=movies.map(function(movie){
    return movie.actor;
})
console.log(actors);

//5. I want total revenue of all movies
var totalRevenue=movies.reduce(function(total,movie){
    return total + movie.revenue;
},0)

console.log(totalRevenue);

// 6: I want list of titles in comma seperated strong
// "Bahubali,Adhurs,Kushi"
var titles=movies.reduce(function(titles,movie){
    if(titles=="") return movie.title;
    return titles + "," + movie.title;
},'')
console.log(titles);

//7. I want list of all theaters of all movies
// ["A","B","C","D"]
var theaters=movies.reduce(function(theaters,movie){
    movie.theaters.forEach(function(theater){
        if(theaters.indexOf(theater)==-1){
            theaters.push(theater);
        }
    })
    return theaters;
},[])
console.log(theaters);

var user={}

user.name="Varma";
user["age"]=46;
var key="college name"
user[key]="JNTU";

//8. I want an single object containing movie title as key
// actor as value
/*
    {
        "Bahubali":"Prabhas",
        "Adhurs":"NTR",
        "Kushi":"Pavan"
    }
*/

var titleActors=movies.reduce(function(titles,movie){
    titles[movie.title]=movie.actor;
    return titles;
},{})

console.log(JSON.stringify(titleActors));

var a=[1,2,3];
var b=[4,5,6];
var c=a.concat(b);
c.reverse();

movies.sort(function(a,b){
    if(a.revenue>b.revenue) return 1;
    if(a.revenue<b.revenue) return -1;
    return 0;
})












