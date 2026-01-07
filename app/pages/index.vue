<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-toolbar :collapse="collapse" collapse-position="end">
          <template v-slot:append>
            <v-btn icon @click="started = !started">
              <v-icon>{{ started ? 'mdi-pause' : 'mdi-play' }}</v-icon>
            </v-btn>
            <v-dialog v-if="true">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon>mdi-cog</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-select
                    v-model="tabellineStore.selected"
                    :items="tabellineStore.availableNumbers"
                    label="Tabelline"
                    mandatory
                    multiple
                    chips
                  >
                  </v-select>
                  <v-slider
                    v-model="tabellineStore.answerTime"
                    :min="3"
                    :max="30"
                    :step="1"
                    label="Tempo per risposta"
                    thumb-label="always"
                    >
                    <template v-slot:thumb-label="{ modelValue }">
                      {{ modelValue }}
                    </template>
                  </v-slider>
                  <!--<v-switch
                    v-model="tabellineStore.showAnswerTime"
                    label="Mostra tempo rimasto di risposta"
                  ></v-switch> -->
                </v-card-text>
              </v-card>
            </v-dialog>
          </template>
        </v-toolbar>
        <v-card v-if="question">
          <v-card-title class="headline text-center" >
            {{ question.question.toString() }} =
          </v-card-title>
          <v-card-actions>
            <v-row>
              <v-col v-for="choice in question.choices" :key="String(isNaN(choice) ? 'nan' : choice)">
                <v-chip
                  @click="interactions$.next({choice, question})"
                  class="w-100 justify-center"
                  label
                >
                  {{ isNaN(choice) ? 'nessuno' : choice }}
                </v-chip>
              </v-col>
            </v-row>
          </v-card-actions>

            <!-- <v-progress-linear
              v-if="tabellineStore.showAnswerTime"
              v-model="timeProgress"
              height="10"
              color="blue-accent-2"
              :chunk-count="tabellineStore.answerTime / 1000"
              chunk-gap="2"
            ></v-progress-linear> -->
        </v-card>
        <v-card>
          <v-card-text>
            <v-timeline
              dense
              side="start"
            >
              <v-timeline-item
                small
                v-for="item in logs" :key="item.creationTime.toMillis()"
                dot-color="transparent"
                :icon-color="item.isAnswered ? (item.isCorrect ? 'green-accent-2' : 'amber-accent-2') : 'grey-lighten-1'"
                :icon="item.isAnswered ? (item.isCorrect ? 'mdi-robot-happy' : 'mdi-robot-confused') : 'mdi-bed-clock'"
              >
                <span>{{ item.question.toString() }} =</span>
                <template v-slot:opposite>
                  <v-chip
                  v-for="choice in mapChoiceForDisplay(item)" :key="String(isNaN(choice.choice) ? 'nan' : choice.choice)"
                  :color="choice.color"
                  >
                    {{ choice.choice }}
                  </v-chip>
                </template>
  
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { switchMap, Subject, tap, timer, map, filter, merge, EMPTY, take } from 'rxjs'
import _ from "lodash"
import { Multiplication } from '~/models/expressions';
import { MultiChoice } from '~/models/questions';

const { random, shuffle, sample, isNil } = _;

interface ChoiceDisplay {
  choice: number;
  color: string;
}

function mapChoiceForDisplay(question: MultiChoice): ChoiceDisplay[] {
  return Array.from(question.choices).map((choice: number) => {
    let color = 'grey-lighten-1';
    if (question.isAnswered) {
      if (choice === question.question.value) {
        color = 'green-accent-2';
      } else if (choice === question.answer) {
        color = 'amber-accent-2';
      }
    }
    return {
      choice,
      color
    }
  });
}

const collapse = ref(true)
const started = ref(false)
const timeProgress = ref(0)

const tabellineStore = useTabellineStore();

interface AnswerEvent {
  choice: number;
  question: MultiChoice;
}
const NUMBERS = tabellineStore.availableNumbers;
const tabelline = tabellineStore.tabelline;

const history = ref<MultiChoice[]>([]);
const control$ = new Subject<boolean>();
const interactions$ = new Subject<AnswerEvent | null>();

const question = computed(() => history.value[0]);
const logs = computed(() => history.value.slice(1));

const processStream$ = merge(
  control$.pipe(map(start => start === true)),
  interactions$.pipe(map((value) => !isNil(value)))
).pipe(
  switchMap(goOn => goOn ? timer(0, tabellineStore.answerTime * 1000) : EMPTY),
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
)
processStream$.subscribe(q => history.value.unshift(q));
interactions$
  .pipe(
    filter((value) => !isNil(value)),
  ).subscribe((value) => { value!.question.answer = value!.choice })

// merge(
//   processStream$.pipe(map(() => true)),
//   control$
// ).pipe(
//   switchMap(goOn => (tabellineStore.showAnswerTime && goOn) ? timer(0, tabellineStore.answerTime / 100).pipe(take(100)) : EMPTY),
//   tap(count => console.log('progress', count))
// ).subscribe((tick) => {
//   timeProgress.value = tick + 1;
// })


watch(started, (newVal) => {
  control$.next(newVal);
})
</script>
