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
            <span class="text-h5">Quem é o comprador?</span>
          </transition>
        </div>
        <div class="q-pa-md" style="max-width: 350px">
          <q-list bordered separator>
            <q-item clickable v-ripple active-class="item-list-selected" :active="comprador_id == 1" @click="comprador_id = 1">
              <q-item-section>
                <q-item-label>Extrabom Supermercados Ltda</q-item-label>
                <q-item-label caption lines="1">36.346.450/0001-67</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>18/06/2019</q-item-label>
                <q-icon name="star" color="yellow" />
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple active-class="item-list-selected" :active="comprador_id == 2" @click="comprador_id = 2">
              <q-item-section>
                <q-item-label>Supermercados Carone Ltda</q-item-label>
                <q-item-label caption>49.258.741/0001-98</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>18/06/2019</q-item-label>
                <q-icon name="star" color="yellow" />
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple active-class="item-list-selected" :active="comprador_id == 3" @click="comprador_id = 3">
              <q-item-section>
                <q-item-label>João da Silva</q-item-label>
                <q-item-label caption>138.457.897-19</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-page>
    </q-page-container>
    <q-footer class="bg-secondary text-white">
      <q-toolbar v-ripple class="q-pa-none" style="text-align: center;">
        <q-btn flat class="full-width" label="Continuar" icon-right="arrow_forward_ios" @click="avancar"/>
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
  data () {
    return {
      comprador_id: 0
    }
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
  }
}
</script>
