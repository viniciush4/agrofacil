<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white no-shadow text-black">
        <q-btn flat round dense icon="arrow_back" @click="voltar"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="flex flex-center">
        <div class="q-pa-md" style="text-align: center;">
          <span class="text-h5">Quem é o transportador?</span>
        </div>
        <div style="width:100%;">
          <q-list>
            <q-item
                    clickable
                    v-ripple
                    v-for="transportador in transportadores"
                    :key="transportador.id"
                    active-class="bg-teal-1 text-black"
                    :active="transportador_id == transportador.id"
                    @click="transportador_id = transportador.id"
            >
              <q-item-section>
                <q-item-label>{{ transportador.nome }}</q-item-label>
                <q-item-label caption lines="1">{{ transportador.placa}}</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>{{ transportador.data_ultima_compra}}</q-item-label>
                <q-icon name="star" color="yellow" v-if="transportador.favorito" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-page>
    </q-page-container>
    <transition name="router-anim" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <q-footer class="bg-secondary text-white" v-if="transportador_id != 0">
        <q-toolbar v-ripple class="q-pa-none" style="text-align: center;">
          <q-btn flat class="full-width" label="Continuar" icon-right="arrow_forward_ios" @click="avancar"/>
        </q-toolbar>
      </q-footer>
    </transition>
  </q-layout>
</template>

<style>
  .q-layout__shadow:after{
    box-shadow: none;
  }
</style>

<script>
export default {
  name: 'PageEmitirNotaComprador',
  data () {
    return {
      transportador_id: 0,
      transportador: {},
      transportadores: [
        {
          id: 1,
          nome: 'TRANSPORTE PRÓPRIO',
          cnpj: '',
          cpf: '138.218.469-89',
          placa: 'MTX 5908',
          data_ultimo_transporte: '18/06/2019',
          favorito: true
        },
        {
          id: 2,
          nome: 'José Reinholz',
          cnpj: '',
          cpf: '138.218.469-89',
          placa: 'MTX 5908',
          data_ultimo_transporte: '18/06/2019',
          favorito: false
        },
        {
          id: 3,
          nome: 'Henrique Schultz',
          cnpj: '',
          cpf: '254.145.469-97',
          placa: 'MTX 5908',
          data_ultimo_transporte: '16/06/2019',
          favorito: false
        }
      ]
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
        path: '/emitir-nota/impressao'
      })
    }
  }
}
</script>
