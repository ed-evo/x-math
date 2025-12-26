import { Multiplication, type Expression } from "~/models/expressions"
import { MultiChoice } from "~/models/questions";

import { random, shuffle, sample } from "lodash";

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const useBasicOperationsStore = defineStore('basic-operations', {
  state: () => ({
    tabelline: NUMBERS.flatMap(a => NUMBERS.map(b => new Multiplication(a, b))),
    question: null as MultiChoice | null,
    history: [] as MultiChoice[]
  }),
  actions: {
    async next() {
      let next = <Expression<number>> sample(this.tabelline);
      let choices = new Set<number>();
      if (random(1, 100) % 4 < 3) {
        choices.add(next.value);
      }
      do {
        let rnd = sample(this.tabelline);
        choices.add(rnd.value);
      } while (choices.size < 3);
  
      choices = new Set(shuffle(Array.from(choices)));
      choices.add(NaN);
  
      this.question = new MultiChoice(next, choices);
      return next;
    },
    async submit({ value }: { value: number }) {
      if (!this.question) {
        throw new Error("No current question to submit an answer for.");
      }
      this.question.answer = value;
      let isCorrect = this.question.isCorrect;
      this.history.push(this.question);
      await this.next();
      return isCorrect;
    }
  },
  getters: {
    isCorrect: (state) => {
      if (!state.question) {
        return false;
      }
      return state.question.isCorrect;
    }
  }
});
