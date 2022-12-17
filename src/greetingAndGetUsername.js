import readlineSync from 'readline-sync';

let name;

export function greetingAndGetUsername () {
    console.log('Welcome to the Brain Games!')
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
  };

  export function returnUsername() {
    return name;
  };