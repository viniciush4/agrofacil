
const routes = [
  {
    path: '/',
    component: () => import('pages/Login.vue')
  },
  // {
  //   path: '/menu2',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('pages/Index.vue'),
  //       name: 'Menu2'
  //     }
  //   ]
  // },
  {
    path: '/menu',
    component: () => import('pages/Menu.vue')
  },
  {
    path: '/emitir-nota/comprador',
    component: () => import('pages/EmitirNota/Comprador.vue')
  },
  {
    path: '/emitir-nota/produtos',
    component: () => import('pages/EmitirNota/Produtos.vue')
  },
  {
    path: '/emitir-nota/transporte',
    component: () => import('pages/EmitirNota/Transporte.vue')
  },
  {
    path: '/emitir-nota/impressao',
    component: () => import('pages/EmitirNota/Impressao.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
