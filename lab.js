
for(let i=0; i<5 ;i++){

}
let e=12;
console.log(typeof e)
// symbol makes the variable unique
let w =Symbol(12)
console.log(typeof w)
let b=15n
console.log(typeof b)
let v= String(10)
console.log(typeof v)
let x =Number(10)

let g=15
d=BigInt(15)
console.log(d)

// checks if values are same 
console.log(3=="3")
// checks strictly if they're equal like data types 
console.log(3==="3")

let temp=30;
let stat;
if(temp>=100){{
    s="boiling"
}}else if (temp<100 && temp>=60){

}else{
     s="cold "
}
document.writeln(s)

// shorthand statement 
s=(temp==100)?"boiling":"not boiling"

let day =2;
switch(day){
    case 1:
        document.writeln("sunday")
    case 2: 
        document.writeln("monday")
    case 3:
        document.writeln("tuesday")
    default:
        document.writeln("none")
}


function hello(){
    console.log("hello")
};
hello();

function add(n1=2,n2=20){
    var value =n1+n2
    console.log(value)
}
add(1,2);
// /add()/ /will use the parameters/
function multiply(num1 ,num2){
    var val=num1*num2
    return val
}
multiply(3,4)/* will not print the result*/
console.log(multiply(3,4))/* will print this value*/

/* */ 
// var is function scope but let is block scope whch is anything between 
// curly brackets {}and var is nott function scope 
// let can be reassigned and const can't be reassigned (block and function scope )
var y=function(){
    console.log("this is why")
};
y()

function callanotherfn(fn){
     
    console.log("call another function")
    fn()
};
callanotherfn(y)
/*
function callanotherfn( ()=>{
     
    console.log("call another function")
    
})*/



var arr=[1,2,3,"sama","ahmed"]
console.log(arr[2])
console.log(arr.length)
arr.splice(2,1)
// push function adds at the end and takes parameter,
// pop pops from end and doesn't take any parameter 
//splic takes two parameters and first is the num of index and second num of elements to be del.
arr.shift()
//shift deletes first element
// unshift 
var arr9=[30,40,50,60,70,30]
console.log(arr9.indexOf(40))
console.log(arr9.indexOf(30))
// return index of 30 in first time
console.log(arr9.indexOf(100))   
console.log(arr9.lastIndexOf(30))
// return index of 30 in secound time

var smallarr=arr9.slice(2,5)
// first index ,last index is excluded

console.log(arr9.reverse())

//lab
var ar=[12,"sama"]
var ar2=[90,70]
var newarr=ar.concat(ar2)
console.log(newarr)

var strarr=["hello","sama","ahmed"]
var str=strarr.join(" ")
// sprator =" " space 
// .join convert array to string
console.log(str)


for (let k=0;k<arr9.length;k++){
    console.log(arr9[k])
}


arr9.forEach(function(element){
    console.log(element)
})
// value in element 



for (let element of arr9){
    console.log(element)
}
// for each and for of should print each element

var obj1=document.getElementById("id")
console.log(obj1)

//  2lines for get element from html by id or class
var obj2=document.getElementsByClassName("cls0")[1]
console.log(obj2)
// [1] this index of element that take class cls0



var obj3=document.getElementsByTagName("h2")
console.log(obj3)

var obj4=document.querySelector("h2")
obj4.style.background="grey"

obj1.innerHTML="hello <a href='#'> test</a>"


var obj5=document.getElementById("input1")
// obj5.setAttribute("placeholder","enter")

// obj5.setAttribute("value","sama")


var elem=document.createElement("h1")
var child1=document.createTextNode("this is header 1")
elem.appendChild(child1)

document.body.appendChild(elem)

var obj8=document.getElementById("btn")
obj8.addEventListener("click", function(){
    alert("submitted")
})
var person={
    name:"malak",
    age:19
    
    }

console.log(person.name)


person.major="cs"
console.log(person)

console.log(person.name)
//delete person.age

console.log(person.name)

console.log(Object.values(person))
console.log(Object.keys(person))
console.log(Object.entries(person))

//lab

var person2={}
Object.assign(person2,person)
console.log(person2)

for(var k in person2){
    console.log(k +" "+ person2[2])
}


function person(name ,age ,major){
    this.name
}
function Animal(name){
    this.name=name
}
Animal.prototype.sound=function(){
    console.log(this.name+ "makes sound ")
}
Animal.prototype

let a = new Animal("cat")
a.sound()

function dog(name){
    this.name=name
}
dog.prototype=Object.create(Animal.prototype)
var d = new dog("dog")
d.sound()

class Animall{
    constructor(name){
        this.name=name
    }
    sound(){
        console.log(this.name+ "makes sound ")
    }
}
class dog2 extends Animall{
    constructor(name){
        super(name)
    }
    sound(){
        console.log(this.name+ "barks")
    }
    
}

var d4=new dog2("puppy")
d4.sound()
var a4 =new Animall("elephant")
a4.sound()
let sama=JSON.stringify(person2)
console.log(sama)

let obj=JSON.parse(sama)
console.log(obj)




