import { question } from "readline-sync";
import getRandomNumber from "../getRandomNumber.js";
import startGame from "../index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

function getQuestionAndAnswer() {
    const question = getRandomNumber();
    const answer = isPrime(question) ? 'yes' : 'no'
    return [question, answer]
};

function startBrainPrime() {
    startGame(getQuestionAndAnswer, description);
};

export default startBrainPrime;