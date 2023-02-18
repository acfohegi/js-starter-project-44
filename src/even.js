import readlineSync from 'readline-sync';

const getNumber = () => Math.floor(Math.random() * 100) + 1;
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getQuestion = (num) => `Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${num}\nYour answer: `;
const getNotCorrect = (userAnswer, correctAnswer, name) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`;
const correct = 'Correct!';
const getWinMessage = (name) => `Congratulations, ${name}!`;

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let correctCount = 0;

  while (correctCount < 3) {
    const number = getNumber();
    const userAnswer = readlineSync.question(getQuestion(number));
    const correctAnswer = isEven(number) ? 'yes' : 'no';
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
