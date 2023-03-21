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
      <div class="row">
        <div class="col-md-6 vh-100 mb-7 mb-md-0">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div>
              <h1 class="display-3 text-success mb-4">
                <i class="bi bi-check2-circle" /> 訂購成功
              </h1>
              <p class="display-6 mb-4">
                感謝您的訂購，如對產品有任何問題請隨時聯絡我們。
              </p>
              <RouterLink
                to="/products"
                class="btn btn-outline-secondary"
              >
                選購更多
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/vue3/1679356579542.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cnJRJWkhVI15JKelCd%2BaaChrSfW4%2Bs6u7FyTHkM7YVUtxXF6F%2B75rGW9LSDiBbXh7RJCmTZ%2BjT%2BWu6cBOktBtU3fnImss0PbxhFNpTg6wttSaoOrgRa9tAk8sBhWI7ru86FWfsKMpq6lxY1TsLMtT6HHJ6EpgXUAgyYiKbELQErobJ3sS9vsRnpg8i2yADz6yrIe5CFi0Fp5byezt8p26wPZBH7iF%2FK7ps1rEqfzqs2YT6U%2BNQ8Y69LpoAlcrPoKGasjuJ%2FG6CQ0%2Fn81S%2BTF9vJu5PdsWoNWY5%2FF%2FWXsKGXVOO2bRqAO0p32Or3tqHGOjRnR4VTDgyjkXxkEz6uhtQ%3D%3D"
            alt="感謝定購"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>
