<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary">
        <!--<q-select filled v-model="propriedade" :options="propriedades" label="Filled" />-->
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      propriedade: null,
      propriedades: [
        'Sítio do Café', 'Fazenda Boa Vista'
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
