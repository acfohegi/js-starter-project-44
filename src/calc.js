import readlineSync from 'readline-sync';
import {
  getQuestion, getNotCorrect, correct, getWinMessage, getRandomNumber,
} from './index.js';

const question = 'What is the result of the expression?';

const getNumbers = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  return [first, second];
};

const getOperation = () => {
  const number = Math.round(Math.random());
  if (number === 0) {
    return 'sum';
  }
  return 'multiplication';
};

const getExpression = () => {
  const numbers = getNumbers();
  const operation = getOperation();
  let string;
  let result;
  if (operation === 'sum') {
    string = `${numbers[0]} + ${numbers[1]}`;
    result = numbers[0] + numbers[1];
  }
  if (operation === 'multiplication') {
    string = `${numbers[0]} * ${numbers[1]}`;
    result = numbers[0] * numbers[1];
  }
  return { string, result };
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let correctCount = 0;

  while (correctCount < 3) {
    const expression = getExpression();
    const userAnswer = readlineSync.question(getQuestion(question, expression));
    const correctAnswer = expression.result.toString();
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
