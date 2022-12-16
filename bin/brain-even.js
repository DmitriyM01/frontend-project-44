import readlineSync from 'readline-sync';
function findEven() {
  
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);
  
  for (let i = 0; i < 3; i = i + 1) {

    let num = Math.floor(Math.random() * 101);
    let rest = num % 2;
    let rightAnswer;
    
    if (rest === 1) {
      rightAnswer = 'no';
    } else {
        rightAnswer = 'yes';
    }

    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log('Let\'s try again, Bill!');
      return false;
    }
    console.log('Correct!');
  }
  return true;
}
export default findEven;