import getRandomNumber from './getRandomNumber.js';
import startGame from './startGameLogic.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

function startBrainEven() {
  startGame(getQuestionAndAnswer, description);
}

export default startBrainEven;