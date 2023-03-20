<script setup>
import CartStep from '@/components/CartStep.vue'
import { useRoute } from 'vue-router'
import BannerView from './components/BannerView.vue'
const route = useRoute()
const step = route.meta.step
</script>
<template>
  <BannerView />
  <div class="container">
    <CartStep :step="step" />
    <div class="container">
      完成訂購
      <RouterLink
        to="/products"
        class="btn btn-outline-secondary"
      >
        選購更多
      </RouterLink>
    </div>
  </div>
</template>
<style lang="scss">

</style>
