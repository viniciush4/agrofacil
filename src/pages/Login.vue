<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-image">
        <div class="q-pa-md q-gutter-md">
          <img class="logo" alt="Logo" src="~assets/logo.svg">
        </div>
        <div class="q-pa-md q-gutter-md">
          <q-input color="secondary" bg-color="white" filled v-model="login" label="Login">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input color="secondary" bg-color="white" filled v-model="senha" label="Senha" type="password">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          <div class="q-ml-md">
            <q-btn color="secondary" class="full-width q-ml-md" label="Entrar" @click="entrar"/>
          </div>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
  .logo{
    width: 230px;
  }
</style>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      login: '',
      senha: ''
    }
  },
  methods: {
    entrar: function () {
      this.$router.replace({
        path: '/menu'
      })
    }
  }
}
</script>
