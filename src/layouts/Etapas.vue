<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary">
        <q-btn color="secondary" class="q-ml-md" label="Voltar" @click="anterior"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      {{ this.urlAnterior }}
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'Etapas',
  props: ['urlAnterior', 'urlProxima'],
  data () {
    return {
      urlAnterior2: this.urlAnterior,
      urlProxima2: this.urlProxima,
      propriedade: null,
      propriedades: [
        'Sítio do Café', 'Fazenda Boa Vista'
      ]
    }
  },
  methods: {
    anterior: function () {
      console.log(this.urlAnterior2)
      this.$router.replace({
        path: this.urlAnterior2
      })
    }
  }
}
</script>

<style>
</style>
