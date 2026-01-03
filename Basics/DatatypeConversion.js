// number
let score = 23;
console.log(typeof score); //number

//string
let score1 = "33";
console.log(typeof score1); //string
let valueInNumber = Number(score1);
console.log(typeof valueInNumber); //number

//string with numbers
let score2 = "12345yxc";
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //NaN- not a number

//null values
let temp = null;
console.log(typeof temp);
console.log(temp);
let valueIntNumber3 = Number(temp);
console.log(typeof valueIntNumber3);
console.log(valueIntNumber3);

//undefined
let marks = undefined;
console.log(typeof marks);
console.log(marks);
let valueIntNumber4 = Number(marks);
console.log(valueIntNumber4);

//boolean
let marks2 = true;
console.log(marks2);
console.log(typeof marks2);
let valueIntNumber5 = Number(marks2);
console.log(valueIntNumber5);

//string name
let name = "Catherine";
console.log(name);
console.log(typeof name);
let valueIntNumber = Number(name);
console.log(valueIntNumber);
