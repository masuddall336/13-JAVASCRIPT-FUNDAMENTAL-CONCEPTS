var testArry = [10, 12, 34, 14, 643,];
console.log(testArry);

var testArry2 = [13, 34, 77];
console.log(testArry2[1]);
var arryLast =  testArry2[2];
console.log(arryLast);

var replaceArry = [12, 23, 41, 78];
replaceArry[2] = 25;
console.log(replaceArry);
var rasult = replaceArry.indexOf(3);
console.log(rasult);


var arry3 = [12, 45, 13, 56, 23];
arry3.push(100);
 arry3.pop();
console.log(arry3);


var line = ["Abdullah", "Rana", "Ripon","Masud", "Jalish"];
// line.shift();
// line.unshift("Masud");
var ras = line.slice( 3);
console.log(ras);