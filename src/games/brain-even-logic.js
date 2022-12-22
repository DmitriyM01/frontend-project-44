import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

function isEven(num) {
  const result = num % 2 === 0;
  return result;
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function getQuestionAndAnswer() {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
}

function startBrainEven() {
  startGame(getQuestionAndAnswer, description);
}

export default startBrainEven;
