<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white no-shadow text-black">
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="flex flex-center">
        <div class="q-pa-md" style="text-align: center;">
          <span class="text-h5">Imprimindo Nota Fiscal...</span>
        </div>
        <div style="width:100%;">
          <img src="~assets/print-gif.gif" style="width:100%;">
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
  .q-layout__shadow:after{
    box-shadow: none;
  }
</style>

<script>
export default {
  name: 'PageEmitirNotaImpressao',
  data () {
    return {}
  },
  methods: {
    voltar: function () {
      this.$router.replace({
        path: '/menu'
      })
    },
    avancar: function () {
      this.$router.replace({
        path: '/emitir-nota/produtos'
      })
    }
  },
  created: function () {
    var self = this
    setTimeout(function () {
      self.$router.replace({
        path: '/menu'
      })
    }, 5000)
  }
}
</script>
