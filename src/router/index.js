import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'FrontEnd',
    component: () => import('../views/frontend/NavBar.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontend/HomeView.vue')
      },
      {
        path: 'intention',
        name: 'Intention',
        component: () => import('../views/frontend/OriginalIntention.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/frontend/ProductsView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'DashBoard',
    component: () => import('../views/dashboard/NavBar.vue'),
    children: [
      {
        path: '',
        name: 'DashboardHome',
        component: () => import('../views/dashboard/DashboardHome.vue')
      },
      {
        path: 'products',
        name: 'DashboardProducts',
        component: () => import('../views/dashboard/DashboardProducts.vue')
      },
      {
        path: 'orders',
        name: 'DashboardOrders',
        component: () => import('../views/dashboard/DashboardOrders.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
