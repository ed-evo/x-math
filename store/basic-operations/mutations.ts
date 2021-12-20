export function setCurrent(state, { current }) {
  state.current = current;
}

export function setChoices(state, choices) {
  console.log(arguments)
  state.choices = choices;
}
