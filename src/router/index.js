import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'FrontEnd',
    component: () => import('../views/frontend/LayoutView.vue'),
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
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/frontend/ProductView.vue')
      },
      {
        path: 'articles',
        name: 'Aritcles',
        component: () => import('../views/frontend/ArticlesView.vue')
      },
      {
        path: 'article/:id',
        name: 'Aritcle',
        component: () => import('../views/frontend/ArticleView.vue')
      },
      {
        path: 'aboutus',
        name: 'AboutUs',
        component: () => import('../views/frontend/AboutusView.vue')
      },
      {
        path: 'qa',
        name: 'Qa',
        component: () => import('../views/frontend/QaView.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/frontend/CartView.vue'),
        meta: {
          step: 1
        }
      },
      {
        path: 'checkout',
        name: 'CartCheckout',
        component: () => import('../views/frontend/CartCheckout.vue'),
        meta: {
          step: 2
        }
      },
      {
        path: 'finish',
        name: 'CartFinish',
        component: () => import('../views/frontend/CartFinish.vue'),
        meta: {
          step: 3
        }
      },
      {
        path: 'likes',
        name: 'Likes',
        component: () => import('../views/frontend/LikesView.vue')
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
      },
      {
        path: 'articles',
        name: 'DashboardArticles',
        component: () => import('../views/dashboard/DashboardArticles.vue')
      },
      {
        path: 'coupons',
        name: 'DashboardCoupons',
        component: () => import('../views/dashboard/DashboardCoupons.vue')
      }
    ]
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue')
  }
  // // new-page 以下都要 重新導向 參考
  // {
  //   path: '/new-page/:pathMatch(.*)*',
  //   redirect: {
  //     name: 'Home'
  //   }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior () {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
