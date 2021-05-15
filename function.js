function NameOfFunction(){
    console.log("What is your name");
    console.log("Abdullah al - Masud");
}
NameOfFunction();


function testFunction(userInput){
    var ras =  userInput * 2;
    console.log(ras);
}
testFunction(10);
testFunction(5);
testFunction(15);


function testReturn(userInput2){
    var gunWithUser = userInput2 * 5;
    return gunWithUser;
}
var ras1 = testReturn(10);
var ras2 = testReturn(5);
var ras3 = testReturn(15);
console.log(ras1);
console.log(ras2);
console.log(ras3);


function testMultiRasult(userInput3){
    var math = userInput3 * 2;
    return math;
}
var a = testMultiRasult(5);
var b = testMultiRasult(15);
var c = testMultiRasult(25);
console.log(a+b+c);


function testMultiRasult2(userInpur4){
    var gunkoro = userInpur4 * 2;
    return gunkoro;
}
var first = testMultiRasult2(2);
var second = testMultiRasult2(4);
var third = testMultiRasult2(6);
var all = first+second+third;
console.log(all);


function duble(one, two){
    var tass = one+two;
    return tass;
}
var z = duble(5,10); 
console.log(z);