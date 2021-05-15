var testObject = {Name:"Abdullah al - Masud", Id:3653, Roll:41, Phone:017};
testObject.Name = "Al - Masud"; 
testObject.Fee = 5000;
var take = testObject.Name;

var testObject2 = {Roll: 32, Class: 10, Name:"Abdullah al - Masud"}; 
testObject2["fee"] = 3500;
testObject2["Class"] = 12;
var take2 = testObject2["Class"];

var testObject3 = {Nmae:"Abdullah al - Masud", Roll:32, ID:345, Phone:876498}
testObject3["Fee"] = 2356;
var catchSingleObjext = "Nmae";
testObject3[catchSingleObjext] = "Abdullah";
var rasultt = testObject3[catchSingleObjext];

console.log(testObject);
console.log(take);
console.log(testObject2);
console.log(take2);
console.log(testObject3);
console.log(rasultt);