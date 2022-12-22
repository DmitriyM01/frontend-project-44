import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
function getGCD(num1, num2) {
  let resultOfDivision = 0;
  const isGreater = num1 > num2 ? num1 : num2;
  for (let num = 1; num <= isGreater; num += 1) {
    if (num1 % num === 0 && num2 % num === 0) {
      resultOfDivision = num;
    }
  }
  return resultOfDivision;
}

function getQuestionAndAnswer() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const answer = (getGCD(num1, num2)).toString();
  return [question, answer];
}

function startBrainGCD() {
  startGame(getQuestionAndAnswer, description);
}

export default startBrainGCD;
