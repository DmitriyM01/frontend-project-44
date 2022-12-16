import readlineSync from 'readline-sync';

function getNumber() {
  const number = Math.floor(Math.random() * 101);
  return number;
};

function evenOrNot(number) {
  const rest = number % 2;
  return rest;
};

function getRightAnswer(rest) {
  if (rest === 1) {
    rightAnswer = 'no';
  } else {
      rightAnswer = 'yes';
  }
};

function findEven() {
  
  const result;
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);
  
  for (let i = 0; i < 3; i += 1) {

    const num = getNumber()
    const rest = evenOrNot(num);
    const rightAnswer = getRightAnswer(rest);

    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      result = true;
    } else {
      result = false;
      return result;
    }
  }
}
export default findEven;