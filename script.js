// const age= 19;
// const isOldEnough = age >= 28;
// const ageJose = 21;
// const ageSarah = 22;

// if (isOldEnough) {
//   console.log('Sarah can start driving license 🚗');
// }

// const averageAge = (ageJose + ageSarah)/2
// console. log(ageJose, ageSarah, averageAge);
// const firstName = 'Jose';
// const birthYear = 1994;
// const year = 2037;
// const job = 'teacher';

// const jose = "I'm" + firstName + ', a ' + (year - birthYear) 
// + ' year old ' + job + '!';
// console.log(jose);

// const joseNew = `I'm ${firstName}`
// console.log(joseNew);

const massMark = 78;
const heightMark =  1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark/ (heightMark * heightMark);
const BMIJohn = massJohn/ (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const higherBMI =`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`;
console.log(higherBMI);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than JOhn's!")
} else{
  console.log("JOhn's BMI is higher than Mark's!")
}

// type conversion

const inputYear = '1991'
console.log (Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);


// type coercion

console.log('I am ' + 23 + ' years old ');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n= n-1;
console.log(n);


// truthy and falsy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a Job!");
}


let height;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}  


const agge = '18';
if (agge === 18) console.log('You just became an adult :D (strict)');

if (agge == 18) console.log('You just became an adult :D (loose)');

const favourite = Number( prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);code
if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')

} else if (favourite === 9) {
  console.log('9 is also a cool number')
}
else{
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23');

const hasDriversLicense = true; ///A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


const isTired = true; //c
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log ('Someone else should drive...');
}


const scoreDolphin = 96 + 108 + 89 / 3;
const scoreKoalas = 88 + 91 + 110 / 3;
console.log(scoreDolphin);
console.log(scoreKoalas);

if (scoreDolphin > scoreKoalas) {
  console.log("Dolphin win the trophy");
} else if(scoreDolphin < scoreKoalas) {
  console.log("Koalas win the trophy");
}
else{ 
  console.log("Both win the trophy");
}


const Wednesday = true;
const Thursday = true;

if (Wednesday && Thursday) {
  console.log('Enjoy the Weekend');
}  else{
  console.log('Is not true')
}


const day = 'Friday';

switch (day) {
  case 'Monday':
  console.log('Plan your week very well');
  console.log('Go to coding meetup');
  break;
case "tuesday":
  console.log('Prepare theory videos');  
  break;
case 'Wednesday':
  console.log('Write code examples');
  break;
case 'Thursday':
case 'Friday':
  console.log('Record videos');
  break;
case 'Saturday':
case 'Sunday':
  console.log('Have a beautiful weekend :D');
  break;
default:
  console.log('Not a valid day');    
}


if (day === 'Monday') {
  console.log('Plan your week very well');
  console.log('Go to coding meetup');
}else if (day=== 'tuesday') {
  console.log('Prepare theory videos');
} else if( day === "Wednesday" || day === 'Thursday') {
  console.log('write code examples'); 
} else if ( day === 'Friday'){
  console.log('Record videos');
} else if( day === 'Saturday' || day ==='Sunday') {
  console.log('Have a beautiful weekend :D');
} else{
  console.log('Not a valid day');
}


const me = "Jonas";
console.log(`I'm ${2037-1991} years old ${me}`)


const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷'):
// console.log ('I like to drink water💧');
  

const drink = age >= 18 ? 'wine🍷' : 'water💧';
console.log(drink);


let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else{
  drink2 ='water 💧'
}
console.log(drink2);

console.log(`I like to drink $(age >= 18 ? 'wine'
 : 'water')`);


// const bill = 430 <= 300 ? 0.15 *430 : 0.2 *300 ;
// console.log(bill);
// const tip = 0.2 <=0.15? 300 * 0.2 : 430 * 0.15 ;
// console.log(tip);
// const totalValue ='tip' + 'bill';
// console.log(totalValue);


// const bill = 430 (bill >= 50 <= 300 ? 0.15 *bill : 0.2  *bill);
// console.log(bill);
// const tip = 0.2 <=0.15? 300 * 0.2 : 430 * 0.15 ;
// console.log(tip);
// const totalValue =`(${tip} + ${bill})`;
// console.log=(totalValue);

// const bill = 430;
// bill >= 50  <=300 ? 0.15 *bill : 0.2  *bill ;
// console.log(bill);
// const tip =0.2;
// tip >=0.15 <=0.15? 430 * 0.2 : 300 * 0.15 ;
// console.log(tip);
// const totalValue =`(${tip} + ${bill})`;
// console.log=(totalValue);

const bill = 430;
const tip = bill <= 300 && bill >=50 ? 0.15 *bill : 0.2  *bill ;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);