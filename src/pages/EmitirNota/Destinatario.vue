<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white no-shadow text-black">
        <q-btn flat round dense icon="arrow_back" @click="voltar"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="flex flex-center">
        <div class="q-pa-md">
          <transition name="slide-fade" mode="out-in">
            <span class="text-h5">Qual o CPF ou CNPJ do destinatráio?</span>
          </transition>
        </div>
      </q-page>
    </q-page-container>
    <q-footer class="bg-secondary text-white">
      <q-toolbar v-ripple style="text-align: center;" @click="avancar">
        <q-toolbar-title>Continuar</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style>
  .animated {
    animation-duration: 0.5s;
  }
  /* data change transitions */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .title {
    transition-delay: 100ms;
  }
  .q-layout__shadow:after{
    box-shadow: none;
  }
</style>

<script>
export default {
  name: 'PageEmitirNotaDestinatario',
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
  }
}
</script>
