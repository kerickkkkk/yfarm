<script setup>
import CartStep from '@/components/CartStep.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const step = route.meta.step
</script>
<template>
  <div
    class="bg-cover"
    style="height: 40vh; backgroundImage: url(./images/ImgAbout01.png)"
  />
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
