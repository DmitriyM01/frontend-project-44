import getRandomNumber from '../getRandomNumber.js'
import startGame from '../index.js'

const description = 'What is the result of the expression?';
const arrElement = ['+', '*', '-'];

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        default:
          return false;
    }
}

function getArrayRandomElement() {
    const arrayIndex = Math.floor(Math.random() * arrElement.length);
    const arrayRandomElement = arrElement[arrayIndex];
    return arrayRandomElement;
};

function getQuestionAndAnswer() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getArrayRandomElement();
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator).toString();
  return [question, answer];
};

function startBrainCalc() {
    startGame(getQuestionAndAnswer, description);
  }
  
  export default startBrainCalc;