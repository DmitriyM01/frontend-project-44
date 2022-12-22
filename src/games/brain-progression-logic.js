import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What number is missing in the progression?';

function getQuestionAndAnswer() {
  const startNum = getRandomNumber();
  const step = Math.round(getRandomNumber() / 10);
  const unknownNum = Math.round(getRandomNumber() / 10);
  let question = [];
  let iDontKnow = startNum;
  question[0] = startNum;
  for (let i = 1; i < 11; i += 1) {
    question[i] = iDontKnow + step;
    iDontKnow = question[i];
  }
  const answer = question[unknownNum].toString();

  question[unknownNum] = '..';
  question = question.join(' ');

  return [question, answer];
}

function startBrainProgression() {
  startGame(getQuestionAndAnswer, description);
}

export default startBrainProgression;
