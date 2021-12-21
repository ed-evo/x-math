<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline text-center d-block" >
          {{question.leftHandSide.value}} X {{question.rightHandSide.value}} =
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-item-group>
            <v-btn
              text
              v-for="choice in choices" :key="choice"
              @click="change(choice)"
            >
              {{ choice }}
            </v-btn>
            <v-btn
              text
              @click="change(NaN)"
            >
              nessuno
            </v-btn>
          </v-item-group>
        </v-card-actions>
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
    ...BASIC_OPERATIONS.mapGetters(['question', 'choices'])
  },
  created () {
    this.next();
  },
  methods: {
    ...BASIC_OPERATIONS.mapActions(['next', 'submit']),
    async change (value) {
      alert((await this.submit({ value })) ? "CORRETTO" : "ERRATO")
      this.next()
    }
  }
}
</script>
