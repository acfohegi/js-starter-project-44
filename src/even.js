import readlineSync from 'readline-sync';
import {
  getQuestion, getNotCorrect, correct, getWinMessage, getRandomNumber,
} from './index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no"';

const getNumber = () => getRandomNumber(1, 100);
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getExpression = () => {
  const expression = getNumber();
  const result = isEven(expression) ? 'yes' : 'no';
  return { expression, result };
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
