<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        {{ history.length }}
        <v-btn @click="control$.next(true)">Start</v-btn>
        <v-btn @click="control$.next(false)">stop</v-btn>
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
              v-for="choice in question.choices" :key="String(isNaN(choice) ? 'nan' : choice)"
              @click="interactions$.next({choice, question})"
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
              :dot-color="item.isCorrect ? 'green' : 'red'"
              :side="item.isCorrect ? 'end' : 'start'"
            >
              {{item.toString()}}
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { switchMap, Subject, tap, timer, map, filter, merge, EMPTY } from 'rxjs'
import _ from "lodash"
import { Multiplication } from '~/models/expressions';
import { MultiChoice } from '~/models/questions';

const { random, shuffle, sample, isNil } = _;

interface AnswerEvent {
  choice: number;
  question: MultiChoice;
}
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tabelline = NUMBERS.flatMap(a => NUMBERS.map(b => new Multiplication(a, b)));

const history = ref<MultiChoice[]>([]);
const control$ = new Subject<boolean>();
const interactions$ = new Subject<AnswerEvent | null>();

const question = computed(() => history.value[0]);
const logs = computed(() => history.value.filter(question => question.isAnswered));

let timer$ = timer(0, 3000);
merge(
  control$.pipe(map(start => start === true)),
  interactions$.pipe(map((value) => !isNil(value)))
).pipe(
  tap(console.log),
  switchMap(goOn => goOn ? timer$ : EMPTY),
  tap(console.log.bind(console, "main stream")),
  map(() => sample(tabelline)),
  map((next: Multiplication) => {
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
  }),
  tap(console.log)
).subscribe(q => history.value.unshift(q));
interactions$
  .pipe(
    filter((value) => !isNil(value)),
    tap(console.log.bind(console, "answering"))
  ).subscribe((value) => { value!.question.answer = value!.choice })

</script>
