<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Tabelline
        </v-card-title>
        <v-card-text>
          <p
            v-for="op in tabelline" :key="`${op.leftHandSide.value}${op.rightHandSide.value}`"
          >
          {{op.leftHandSide.value}} X {{op.rightHandSide.value}} = {{op.value}}
          </p>

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
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
    ...BASIC_OPERATIONS.mapGetters(['tabelline'])
  }
}
</script>
