import readlineSync from 'readline-sync';
import {
  getQuestion, getNotCorrect, correct, getWinMessage, getRandomNumber,
} from './index.js';

const question = 'Find the greatest common divisor of given numbers.';

const findGCD = (numbers) => {
  let result = 1;
  const smallest = numbers[0] < numbers[1] ? numbers[0] : numbers[1];
  for (let divider = 2; divider <= smallest; divider += 1) {
    if (numbers[0] % divider === 0 && numbers[1] % divider === 0) {
      result = divider;
    }
  }
  return result;
};

const getNumbers = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  return [first, second];
};

const getExpression = () => {
  const numbers = getNumbers();
  const result = findGCD(numbers);
  return { numbers, result };
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
