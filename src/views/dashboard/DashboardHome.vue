<script setup>
import { onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import { serviceNoPath } from '@/utils/service.js'
const router = useRouter()
const swal = inject('$swal')

const checkLogin = () => {
  serviceNoPath({
    method: 'POST',
    url: '/api/user/check'
  })
    .then(({ data }) => {
      if (!data.success) {
        swal('', `${data.message || '請重新登入'}`, 'error')
        router.push('/login')
      }
    })
    .catch((error) => {
      swal('', error?.response?.data?.message || '有錯誤', 'error')
      router.push('/login')
    })
}
onMounted(() => {
  checkLogin()
})
</script>

<template>
  <div>
    後臺首頁
  </div>
</template>
