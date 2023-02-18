import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getNumber = () => getRandomNumber(1, 100);

const isPrime = (num) => {
  if (num > 1) {
    for (let divider = 2; divider <= num/2; divider += 1) {
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

const getQuestion = (expression) => `Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${expression.number}\nYour answer: `;
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
    const correctAnswer = expression.result;
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
