import readlineSync from 'readline-sync';

const getNumbers = () => {
  const first = Math.floor(Math.random() * 100) + 1;
  const second = Math.floor(Math.random() * 100) + 1;
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
    string = `${numbers[0]}+${numbers[1]}`;
    result = numbers[0] + numbers[1];
  }
  if (operation === 'multiplication') {
    string = `${numbers[0]}*${numbers[1]}`;
    result = numbers[0] * numbers[1];
  }
  return { string, result };
};

const getQuestion = (expression) => `What is the result of the expression?\nQuestion: ${expression.string}\nYour answer: `;
const getNotCorrect = (userAnswer, correctAnswer, name) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`;
const correct = 'Correct!';
const getWinMessage = (name) => `Congratulations, ${name}!`;

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let correctCount = 0;

  while (correctCount < 3) {
    const expression = getExpression();
    const userAnswer = readlineSync.question(getQuestion(expression));
    const correctAnswer = expression.result.toString();
    if (userAnswer === correctAnswer) {
      correctCount += 1;
      console.log(correct);
    }
    if (userAnswer !== correctAnswer) {
      correctCount = 0;
      console.log(getNotCorrect(userAnswer, correctAnswer, name));
    }
  }
  console.log(getWinMessage(name));
};

export default game;
