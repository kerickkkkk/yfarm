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
    swal('登入成功')
    router.push('/admin/products')
  })
    .catch((error) => {
      swal('', error?.response?.data?.message || '有錯誤', 'error')
    })
}
</script>

<template>
  <div
    class="d-flex justify-content-center align-items-center vh-100 bg-cover"
    style="background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/vue3/1679408620153.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UfV7XGE9dwbzfDKlaraKFCNdBCu1eRCqMeY2uMoWuCm5Wsr3dC3T%2BKYyNdtVgPBRSy1j%2FI%2B12dhfOhJ00U2Qha3NLlZolefgPlWQNGT4dlM6Da4GlvrN5smHGkF2yI1vhNOQ2fwLJdzDXr3lliJO5hjTwXox39aijm6qNMFdSIwtttCEALYkxwo0c%2BgBTKuB6%2Blup6P7efhl2Om1bojxAxksPzq4T5TemqKcwLHDr7SeCeAfE5MXLjlpvFzVEvLtDk8Gxv5ipu802OKOYxWTTs2HSXDemT0jDuQoabGdJ%2BlISfeSsHMOtgFaTY0Z42L22wx8Y0yEXHkU3fa%2BKUNMqg%3D%3D)"
  >
    <VForm
      v-slot="{ errors }"
      @submit="submitHandler"
    >
      <div class="mb-3">
        <div>
          <img
            class="mx-auto d-block"
            width="110"
            src="/logo.png"
            alt="logo"
          >
        </div>
        <div class="mb-3">
          <label
            for="email"
            class="form-label"
          >
            <span class="text-danger">*</span>
            Email
          </label>
          <VField
            id="email"
            v-model="username"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
          />
          <ErrorMessage
            name="email"
            class="invalid-feedback"
          />
        </div>
      </div>
      <div class="mb-3">
        <label
          for="password"
          class="form-label"
        >
          <span class="text-danger">*</span>
          密碼
        </label>
        <VField
          id="password"
          v-model="password"
          name="密碼"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': errors['密碼'] }"
          placeholder="請輸入 密碼"
          rules="required"
        />
        <ErrorMessage
          name="密碼"
          class="invalid-feedback"
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
      >
        送出
      </button>
    </VForm>
  </div>
</template>
