<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { serviceNoPath } from '@/utils/service'
const router = useRouter()
const swal = inject('$swal')

const username = ref('')
const password = ref('')

const submitHandler = () => {
  const params = {
    username: username.value,
    password: password.value
  }
  serviceNoPath({
    method: 'POST',
    url: '/admin/signin',
    data: params
  }).then(({ data }) => {
    const { token, expired } = data
    document.cookie = `ttShopToken=${token}; expires=${new Date(expired)};`
    router.push('/admin')
  })
    .catch((error) => {
      swal('', error?.response?.data?.message || '有錯誤', 'error')
    })
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <form class="bg-light p-4">
      <div class="mb-3">
        <label
          for="username"
          class="form-label"
        >信箱</label>
        <input
          id="username"
          v-model="username"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
        >
      </div>
      <div class="mb-3">
        <label
          for="password"
          class="form-label"
        >Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="form-control"
        >
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click="submitHandler"
      >
        送出
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
