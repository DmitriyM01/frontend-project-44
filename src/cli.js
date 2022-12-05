import readlineSync from 'readline-sync';

function startGame = (getQuestionAndAnswer, description) {
	  console.log('Welcome to the Brain Games!');
	  const userName = readlineSync.question('May I have your name? ');
	  console.log(`Hello, ${userName}!`);
};
