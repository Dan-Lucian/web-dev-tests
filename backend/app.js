const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const path = require('path');

// middleware
const handlerError = require('./middleware/handler-error');

// routes
const routerSubmit = require('./features/submit/submit.controller');
const routerQuestions = require('./features/questions/question.controller');

const app = express();

app.use(express.static('build'));
app.use(express.json());
app.use(
  morgan(
    ':remote-addr :remote-user :method :url :status :res[content-length] - :response-time ms'
  )
);

app.use('/submit', routerSubmit);
app.use('/api/questions', routerQuestions);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(handlerError);

module.exports = app;
