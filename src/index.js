const getQuestion = (question, expression) => `${question}\nQuestion: ${expression.expression}\nYour answer: `;
const getNotCorrect = (userAnswer, correctAnswer, name) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`;
const correct = 'Correct!';
const getWinMessage = (name) => `Congratulations, ${name}!`;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  getQuestion, getNotCorrect, correct, getWinMessage, getRandomNumber,
};
