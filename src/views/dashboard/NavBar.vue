<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'
const route = useRoute()
const currentRouteName = computed(() => route.name || '')
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
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped lang="scss"></style>
