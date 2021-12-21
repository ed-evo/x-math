export function setCurrent(state, { current }) {
  state.question = current;
}

export function setAnswer({ question }, { answer }) {
  question.answer = answer;
}

export function addLog({ history }, { question }) {
  history.unshift(question);
}
