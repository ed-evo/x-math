export function question({ question }) {
  return question.question;
}

export function isCorrect({ question }) {
  return question.isCorrect;
}

export function choices({ question }) {
  return question.choices;
}

export function logs({ history }) {
  return history;
}
