import readlineSync from 'readline-sync';
import {
  getQuestion, getNotCorrect, correct, getWinMessage, getRandomNumber,
} from './index.js';

const question = '`What number is missing in the progression?';

const getFirstNumber = () => getRandomNumber(1, 100);

const getStep = () => getRandomNumber(1, 100);

const getNumbersCount = () => getRandomNumber(5, 10);

const getMissingElementAt = (numbersCount) => getRandomNumber(0, numbersCount - 1);

const getNumbers = (firstNumber, step, numbersCount) => {
  const result = [firstNumber];
  for (let i = 1; i <= numbersCount; i += 1) {
    const last = result[result.length - 1];
    result.push(last + step);
  }
  return result;
};

const getExpression = () => {
  const firstNumber = getFirstNumber();
  const step = getStep();
  const numbersCount = getNumbersCount();
  const missingElementAt = getMissingElementAt(numbersCount);
  const numbers = getNumbers(firstNumber, step, numbersCount);

  const result = numbers[missingElementAt];
  numbers[missingElementAt] = '..';
  const string = numbers.join(' ');
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
