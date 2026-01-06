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
          <v-btn-group variant="outlined" class="d-flex w-100" >
            <v-btn
              v-for="choice in question.choices" :key="String(isNaN(choice) ? 'nan' : choice)"
              @click="interactions$.next({choice, question})"
              class="flex-grow-1"
            >
              {{ isNaN(choice) ? 'nessuno' : choice }}
            </v-btn>
          </v-btn-group>
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
              <span v-if="item.isCorrect">{{ item.toString() }}</span>
              <span v-else>
                {{ item.question.toString() }} =
                <span class="text-decoration-line-through">{{ item.answer }}</span> <span class="text-green">{{ item.question.value }}</span>
              </span>
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
const tabelline = NUMBERS.map(b => new Multiplication(2, b));

const history = ref<MultiChoice[]>([]);
const control$ = new Subject<boolean>();
const interactions$ = new Subject<AnswerEvent | null>();

const question = computed(() => history.value[0]);
const logs = computed(() => history.value.filter(question => question.isAnswered));

let timer$ = timer(0, 30000);
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
    // if (random(1, 100) % 4 < 3) {
    //   choices.add(next.value);
    // }
    choices.add(next.value);
    do {
      let rnd = sample(tabelline);
      choices.add(rnd.value);
    } while (choices.size < 3);
    choices = new Set<number>(shuffle(Array.from(choices)));
    // choices.add(NaN);
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
