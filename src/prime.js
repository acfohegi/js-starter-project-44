import readlineSync from 'readline-sync';
import {
  getQuestion, getNotCorrect, correct, getWinMessage, getRandomNumber,
} from './index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getNumber = () => getRandomNumber(1, 100);

const isPrime = (num) => {
  if (num > 1) {
    for (let divider = 2; divider <= num / 2; divider += 1) {
      if (num % divider === 0) {
        return 'no';
      }
    }
  }
  return 'yes';
};

const getExpression = () => {
  const number = getNumber();
  const result = isPrime(number);
  return { number, result };
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let correctCount = 0;

  while (correctCount < 3) {
    const expression = getExpression();
    const userAnswer = readlineSync.question(getQuestion(question, expression));
    const correctAnswer = expression.result;
    if (userAnswer === correctAnswer) {
      correctCount += 1;
      console.log(correct);
    }
    if (userAnswer !== correctAnswer) {
      console.log(getNotCorrect(userAnswer, correctAnswer, name));
      return;
    }
  }
  console.log(getWinMessage(name));
};

export default game;
