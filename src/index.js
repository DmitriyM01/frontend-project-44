import readlineSync from 'readline-sync';
import { greetingAndGetUsername } from './greetingAndGetUsername.js'
import { returnUsername } from './greetingAndGetUsername.js';


const rounds = 3;

const startGame = (getQuestionAndAnswer, description) => {
  greetingAndGetUsername();
  console.log('');
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${returnUsername()}!`);
      return;
    }
  }
  console.log(`Congratulations, ${returnUsername()}!`);
};

export default startGame;
