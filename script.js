const age= 19;
const isOldEnough = age >= 28;
const ageJose = 21;
const ageSarah = 22;

if (isOldEnough) {
  console.log('Sarah can start driving license 🚗');
}

const averageAge = (ageJose + ageSarah)/2
console. log(ageJose, ageSarah, averageAge);
const firstName = 'Jose';
const birthYear = 1994;
const year = 2037;
const job = 'teacher';

const jose = "I'm" + firstName + ', a ' + (year - birthYear) 
+ ' year old ' + job + '!';
console.log(jose);

const joseNew = `I'm ${firstName}`
console.log(joseNew);

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
