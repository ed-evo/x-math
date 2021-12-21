import { Expression } from "~~/models/expressions";
import { random, shuffle, sample } from "lodash";
import { MultiChoice } from "~~/models/questions";

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

  commit('setCurrent', { current: new MultiChoice(next, choices) });
  return next;
}

export async function submit ({ getters, commit, dispatch }, { value }) {
  commit('setAnswer', { answer: value });
  let isCorrect = getters.isCorrect;
  await dispatch('next');
  return isCorrect;
}
