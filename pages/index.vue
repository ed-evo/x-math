<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline text-center d-block" >
          {{ question.toString() }} =
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-item-group>
            <v-btn
              text
              v-for="choice in choices" :key="choice"
              @click="change(choice)"
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
              v-for="item in logs" :key="item.answerTime.toMillis()"
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

<script>
import { createNamespacedHelpers } from 'vuex'
const BASIC_OPERATIONS = createNamespacedHelpers('basic-operations');
export default {
  name: 'IndexPage',
  computed: {
    ...BASIC_OPERATIONS.mapGetters(['question', 'choices', 'logs'])
  },
  created () {
    this.next();
  },
  methods: {
    ...BASIC_OPERATIONS.mapActions(['next', 'submit']),
    async change (value) {
      await this.submit({ value });
    }
  }
}
</script>
