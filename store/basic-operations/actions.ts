import { Expression } from "~~/models/expressions";
import { random, shuffle, sample } from "lodash";

export function next ({state, commit}) {
  let next = <Expression<number>> sample(state.tabelline);
  let choices = new Set<number>();
  if (random(1, 100) % 2) {
    choices.add(next.value);
  }
  do {
    let rnd = sample(state.tabelline);
    choices.add(rnd.value);
  } while (choices.size < 3);
  console.log(choices, shuffle(choices.values()))

  commit('setCurrent', { current: next });
  commit('setChoices', shuffle(Array.from(choices)))
  return next;
}

export function submit ({ state }, { value }) {
  let currentValue = state.current.value;
  console.log(currentValue, value, Number.isNaN(value));
  if (value === currentValue) {
    return true;
  }
  if (Number.isNaN(value)) {
    let choices = <number[]> state.choices;
    return !choices.includes(currentValue);
  }
  return false;

}
