import  readlineSync  from 'readline-sync';

function startGame () {
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName}!`);
	return userName;
};

export default startGame;
