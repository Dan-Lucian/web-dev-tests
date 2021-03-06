import { useState } from 'react';

// local components
import WrapperPage from './components/WrapperPage';
import Heading from './components/Heading';

// shared hooks
import { useAsync } from '../../hooks/useAsync';

// shared services
import questions from '../../services/questions';

// shared utils
import { getTopicInfo } from '../index/utils/dbTopics';

// this page is purely functional, no user has acces to it
const PageSubmit = () => {
  const [question, setQuestion] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState('');
  const [answerWrong1, setAnswerWrong1] = useState('');
  const [answerWrong2, setAnswerWrong2] = useState('');
  const [answerWrong3, setAnswerWrong3] = useState('');
  const [topics, setTopics] = useState('');
  const [moreInfo, setMoreInfo] = useState('');
  const [password, setPassword] = useState('');

  const { data: receivedData, status, run } = useAsync();

  const resetForm = () => {
    setQuestion('');
    setAnswerCorrect('');
    setAnswerWrong1('');
    setAnswerWrong2('');
    setAnswerWrong3('');
    setTopics('');
    setMoreInfo('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      question.length === 0 ||
      answerCorrect.length === 0 ||
      answerWrong1.length === 0 ||
      answerWrong2.length === 0 ||
      answerWrong3.length === 0 ||
      topics.length === 0 ||
      moreInfo.length === 0 ||
      password.length === 0
    ) {
      throw new Error('one input was empty');
    }

    const splitTopics = topics.split(',').map((topic) => topic.trim());
    splitTopics.forEach((topic) => {
      if (!getTopicInfo(topic)) throw new Error(`invalid topic: ${topic}`);
    });

    const data = {
      question,
      answers: [
        { answer: answerCorrect, correct: true },
        { answer: answerWrong1, correct: false },
        { answer: answerWrong2, correct: false },
        { answer: answerWrong3, correct: false },
      ],
      topics: splitTopics,
      moreInfo,
    };

    console.log('data', data);
    run(questions.send(data, password));
  };

  return (
    <WrapperPage>
      <Heading>Submit the question</Heading>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question</label>
        <textarea
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          id="question"
        />
        <label htmlFor="answer-correct">Correct answer</label>
        <input
          onChange={(e) => setAnswerCorrect(e.target.value)}
          value={answerCorrect}
          id="answer-correct"
        />
        <label htmlFor="answer-wrong">Wrong answer</label>
        <input
          onChange={(e) => setAnswerWrong1(e.target.value)}
          value={answerWrong1}
          id="answer-wrong"
        />
        <label htmlFor="answer-wrong">Wrong answer</label>
        <input
          onChange={(e) => setAnswerWrong2(e.target.value)}
          value={answerWrong2}
          id="answer-wrong"
        />
        <label htmlFor="answer-wrong">Wrong answer</label>
        <input
          onChange={(e) => setAnswerWrong3(e.target.value)}
          value={answerWrong3}
          id="answer-wrong"
        />
        <label htmlFor="topics">Topics (comma delimited, lower case)</label>
        <input
          onChange={(e) => setTopics(e.target.value)}
          value={topics}
          id="topics"
        />
        <label htmlFor="more-info">More info (link)</label>
        <input
          onChange={(e) => setMoreInfo(e.target.value)}
          value={moreInfo}
          id="more-info"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
        />
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" onClick={resetForm} />
        <p>Status: {status}</p>
        <p>Reponse: {JSON.stringify(receivedData)}</p>
      </form>
    </WrapperPage>
  );
};

export default PageSubmit;
