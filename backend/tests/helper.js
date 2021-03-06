const db = require('../utils/db');

const questionsInitial = [
  {
    question: 'Question 1',
    answers: [
      {
        answer: 'answer 1',
        correct: false,
      },
      {
        answer: 'answer 2',
        correct: false,
      },
      {
        answer: 'answer 3',
        correct: false,
      },
      {
        answer: 'answer 4',
        correct: true,
      },
    ],
    topics: ['topic 1', 'topic 2'],
    moreInfo: 'url 1',
  },
  {
    question: 'Question 2',
    answers: [
      {
        answer: 'answer 1',
        correct: false,
      },
      {
        answer: 'answer 2',
        correct: false,
      },
      {
        answer: 'answer 3',
        correct: false,
      },
      {
        answer: 'answer 4',
        correct: true,
      },
    ],
    topics: ['topic 1', 'topic 2'],
    moreInfo: 'url 2',
  },
];

const questionNew = {
  question: 'Question 3',
  answers: [
    {
      answer: 'answer 1',
      correct: false,
    },
    {
      answer: 'answer 2',
      correct: false,
    },
    {
      answer: 'answer 3',
      correct: false,
    },
    {
      answer: 'answer 4',
      correct: true,
    },
  ],
  topics: ['topic 1', 'topic 2'],
  moreInfo: 'url 3',
};

const getQuestionsFromDb = async () => {
  const questions = await db.Question.find({});
  return questions.map((question) => question.toJSON());
};

const getIdNonExistent = async () => {
  const question = new db.Question(questionNew);
  await question.save();
  await question.remove();

  return question._id.toString();
};

module.exports = {
  questionsInitial,
  getQuestionsFromDb,
  getIdNonExistent,
  questionNew,
};
