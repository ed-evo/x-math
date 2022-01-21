<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        {{ history.length }}
        <v-btn @click="interactions.next()">Start</v-btn>
      </v-card>
      <v-card v-if="question">
        <v-card-title class="headline text-center d-block" >
          {{ question.question.toString() }} =
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-item-group>
            <v-btn
              text
              v-for="choice in question.choices" :key="choice"
              @click="change(choice, question)"
            >
              {{ isNaN(choice) ? 'nessuno' : choice }}
            </v-btn>
          </v-item-group>
        </v-card-actions>
      </v-card>
      <v-card>
        <v-card-text>
          <v-timeline
            dense
          >
            <v-timeline-item
              small
              v-for="item in logs" :key="item.creationTime.toMillis()"
              :color="item.isCorrect ? 'green' : 'red'"
            >
              {{item.toString()}}
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { switchMapTo, Subject, tap, timer, map } from 'rxjs'
import { random, shuffle, sample } from "lodash"
import { Multiplication } from '~~/models/expressions';
import { MultiChoice } from '~~/models/questions';

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tabelline = NUMBERS.flatMap(a => NUMBERS.map(b => new Multiplication(a, b)));
export default Vue.extend({
  name: 'IndexPage',
  computed: {
    question () {
      return this.history[0]
    },
    logs () {
      return this.history.filter(question => question.isAnswered)
    }
  },
  data () {
    return {
      interactions: new Subject(),
      history: []
    }
  },
  created () {
    let timer$ = timer(0, 3000);
    this.interactions.pipe(
      tap(console.log),
      switchMapTo(timer$),
      tap(console.log.bind(console, "main stream")),
      map(this.createQuesiton),
      tap(console.log)
    ).subscribe(q => this.history.unshift(q));
  },
  methods: {
    createQuesiton () {
      let next = sample(tabelline);
      let choices = new Set<number>();
      if (random(1, 100) % 4 < 3) {
        choices.add(next.value);
      }
      do {
        let rnd = sample(tabelline);
        choices.add(rnd.value);
      } while (choices.size < 3);

      choices = new Set<number>(shuffle(Array.from(choices)));
      choices.add(NaN);
      return new MultiChoice(next, choices);
    },
    change (value, question) {
      question.answer = value
      this.interactions.next()
    }
  }
})
</script>
