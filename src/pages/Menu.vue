<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey">
        <div class="q-pa-md q-gutter-md">
          <q-btn color="primary" label="Emitir Nota" class="full-width" @click="emitirNota" />
          <q-btn color="secondary" label="Notas Emitidas" class="full-width" />
          <q-btn color="amber" label="Produtos" class="full-width" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
  .logo{
    width: 200px;
  }
</style>

<script>
export default {
  name: 'PageMenu',
  methods: {
    emitirNota: function () {
      this.$router.replace({
        path: 'emitir-nota/comprador'
      })
    }
  }
}
</script>
