import _ from 'lodash';
import { Multiplication } from '~/models/expressions';

const { sortBy } = _;

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ALL_TABELLINE = new Map<number, number[]>();
NUMBERS.forEach(n => {
  ALL_TABELLINE.set(n, Array.from({ length: 10 }, (_, i) => n * (i + 1)));
});

export const useTabellineStore = defineStore('tabelline', {
  state: () => ({
    selected: [2] as number[],
    answerTime: 30 as number,
    showAnswerTime: true as boolean
  }),
  getters: {
    availableNumbers: (): number[] => {
      return NUMBERS;
    },
    tabelline: (state): Multiplication[] => {
      return sortBy(state.selected).flatMap(a => NUMBERS.map(b => new Multiplication(a, b)));
    }
  },
  actions: {
    toggle(number: number) {
      if (this.selected.includes(number)) {
        this.selected = this.selected.filter(n => n !== number)
      } else {
        this.selected.push(number)
      }
    },
    clear() {
      this.selected = []
    }
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
})