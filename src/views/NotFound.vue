<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let timer = null
const countTime = ref(10)

onMounted(() => {
  timer = setInterval(
    () => {
      countTime.value -= 1
      if (countTime.value === 0) {
        router.push('/')
      }
    }
    , 1000)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>
<template>
  <div class="vh-100 bg-light d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h1 class="display-1 mb-6">
        <span class="d-block">404</span>
        Page Not Found
      </h1>
      <p class="h1 mb-5">
        倒數 ({{ countTime }}) 秒
      </p>
      <RouterLink
        class="btn btn-outline-secondary ms-auto"
        to="/"
      >
        回首頁
      </RouterLink>
    </div>
  </div>
</template>
