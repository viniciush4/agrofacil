<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white no-shadow text-black">
        <q-btn flat round dense icon="close" @click="sair"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="flex flex-center">
        <div class="q-pa-md">
          <span class="text-h5">Escolha a propriedade:</span>
          <div class="q-pa-md">
            <q-select outlined v-model="propriedade_id" :options="propriedades" label="Propriedade" class="q-mt-md" color="teal" />
          </div>
        </div>
        <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
          <div class="q-pa-md" style="text-align: center;" v-if="propriedade_id">
            <span class="text-h5">O que você deseja fazer?</span>
            <div class="q-pa-md">
              <q-btn color="secondary" label="Emitir Nota Fiscal" class="full-width q-mt-md" @click="emitirNota" />
              <q-btn color="secondary" label="Ver Notas Emitidas" class="full-width q-mt-md" @click="emitirNota" disabled />
              <q-btn color="secondary" label="Configurar Impressora" class="full-width q-mt-md" @click="emitirNota" disabled />
            </div>
          </div>
        </transition>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
  .logo{
    width: 200px;
  }
  .q-layout__shadow:after{
    box-shadow: none;
  }
</style>

<script>
export default {
  name: 'PageMenu',
  data () {
    return {
      propriedade_id: null,
      propriedades: [
        'Sítio Bela Vista', 'Fazenda Águas Claras'
      ]
    }
  },
  methods: {
    emitirNota: function () {
      this.$router.replace({
        path: 'emitir-nota/comprador'
      })
    },
    sair: function () {
      this.$router.replace({
        path: '/'
      })
    }
  }
}
</script>
