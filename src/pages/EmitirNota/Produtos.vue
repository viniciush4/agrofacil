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
          <span class="text-h5">Quais as quantidades dos produtos vendidos?</span>
        </div>
        <div style="width:100%;">
          <q-list>
            <q-item
              v-for="produto in produtos"
              :key="produto.id"
              :active="produto_id == produto.id"
              @click="produto_id = produto.id"
            >
              <q-item-section>
                <q-item-label>{{ produto.nome }}</q-item-label>
                <q-item-label caption lines="1">R$ {{ produto.valor }}</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-input
                  filled
                  type="number"
                  :suffix="produto.unidade"
                  v-model="produto.quantidade"
                  color="secondary"
                  :input-style="{ textAlign: 'center' }"
                  @click="selecionarTexto"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-page>
    </q-page-container>
    <transition name="router-anim" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <q-footer class="bg-secondary text-white"  v-if="quantidade_total_eh_maior_que_zero">
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
  name: 'PageEmitirNotaProdutos',
  data () {
    return {
      produto_id: 0,
      produto: {},
      produtos: [
        {
          id: 1,
          nome: 'Cenoura',
          unidade: 'KG',
          valor: '3,56',
          quantidade: 0
        },
        {
          id: 2,
          nome: 'Beterraba',
          unidade: 'KG',
          valor: '2,30',
          quantidade: 0
        },
        {
          id: 3,
          nome: 'Alface',
          unidade: 'UN',
          valor: '1,50',
          quantidade: 0
        },
        {
          id: 4,
          nome: 'Chuchu',
          unidade: 'KG',
          valor: '4,00',
          quantidade: 0
        },
        {
          id: 5,
          nome: 'Melancia',
          unidade: 'KG',
          valor: '4,58',
          quantidade: 0
        }
      ]
    }
  },
  methods: {
    voltar: function () {
      this.$router.replace({
        path: '/emitir-nota/comprador'
      })
    },
    avancar: function () {
      this.$router.replace({
        path: '/emitir-nota/transporte'
      })
    },
    selecionarTexto: function (event) {
      event.target.select()
    }
  },
  computed: {
    quantidade_total_eh_maior_que_zero: function () {
      return this.produtos.some(function (element, index, array) {
        return element.quantidade > 0
      })
    }
  }
}
</script>
