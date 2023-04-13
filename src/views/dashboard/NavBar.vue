<script setup>
import { computed, inject } from 'vue'
import { useRoute, useRouter, RouterLink, RouterView } from 'vue-router'
import { logoutApi } from '@/api/dashboard/user.js'

const route = useRoute()
const router = useRouter()
const swal = inject('$swal')

const currentRouteName = computed(() => route.name || '')
const logout = () => {
  logoutApi()
    .then((response) => {
      if (response.data.success) {
        swal(response.data.message)
        document.cookie = `ttShopToken=;expires=${new Date()}`
        router.push('/login')
      } else {
        swal('有錯誤')
      }
    }).catch((error) => {
      swal('', error?.response?.data?.message || '有錯誤', 'error')
    })
}
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-2">
    <div class="container-fluid">
      <RouterLink
        class="navbar-brand"
        to="/admin"
      >
        儀表板
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarCollapse"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              aria-current="page"
              to="/"
            >
              前往前台
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :class="{ active : currentRouteName === 'DashboardOrders'}"
              class="nav-link"
              aria-current="page"
              to="/admin/orders"
            >
              訂單列表
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :class="{ active : currentRouteName === 'DashboardProducts'}"
              class="nav-link"
              aria-current="page"
              to="/admin/products"
            >
              產品列表
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :class="{ active : currentRouteName === 'DashboardArticles'}"
              class="nav-link"
              aria-current="page"
              to="/admin/articles"
            >
              最新消息
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :class="{ active : currentRouteName === 'DashboardCoupons'}"
              class="nav-link"
              aria-current="page"
              to="/admin/coupons"
            >
              優惠券
            </RouterLink>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              role="button"
              @click.prevent="logout"
            >
              登出
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
