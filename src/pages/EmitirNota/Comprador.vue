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
          <span class="text-h5">Quem é o comprador?</span>
        </div>
        <div style="width:100%;">
          <q-list>
            <q-item
              clickable
              v-ripple
              v-for="comprador in compradores"
              :key="comprador.id"
              active-class="bg-teal-1 text-black"
              :active="comprador_id == comprador.id"
              @click="comprador_id = comprador.id"
            >
              <q-item-section>
                <q-item-label>{{ comprador.nome }}</q-item-label>
                <q-item-label caption lines="1">{{ comprador.cnpj ? comprador.cnpj : comprador.cpf }}</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>{{ comprador.data_ultima_compra}}</q-item-label>
                <q-icon name="star" color="yellow" v-if="comprador.favorito" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-page>
    </q-page-container>
    <transition name="router-anim" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <q-footer class="bg-secondary text-white" v-if="comprador_id != 0">
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
  name: 'PageEmitirNotaDestinatario',
  data () {
    return {
      comprador_id: 0,
      comprador: {},
      compradores: [
        {
          id: 1,
          nome: 'Extrabom Supermercados Ltda',
          cnpj: '36.346.450/0001-67',
          cpf: '',
          data_ultima_compra: '18/06/2019',
          favorito: true
        },
        {
          id: 2,
          nome: 'Supermercados Carone Ltda',
          cnpj: '49.258.741/0001-96',
          cpf: '',
          data_ultima_compra: '18/06/2019',
          favorito: true
        },
        {
          id: 3,
          nome: 'João da Silva Sauro',
          cnpj: '',
          cpf: '138.219.478-89',
          data_ultima_compra: '',
          favorito: false
        },
        {
          id: 4,
          nome: 'Maria Josefina da Graças',
          cnpj: '',
          cpf: '138.219.478-90',
          data_ultima_compra: '',
          favorito: false
        },
        {
          id: 5,
          nome: 'Juvenal Siqueira',
          cnpj: '',
          cpf: '138.219.478-90',
          data_ultima_compra: '',
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
        path: '/emitir-nota/produtos'
      })
    }
  }
}
</script>
